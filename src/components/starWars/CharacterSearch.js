import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import debounce from 'lodash/debounce'
import { useStarWarsCharacterSearch } from '../util/hooks'

function getListContent(results) {
  if (!results) return <p>Search results will show up here</p>
  return results.length ? <ul>{results.map(getSearchResultMarkup)}</ul> : <p>No results found</p>
}
function getSearchResultMarkup(result) {
  return <li>{result.name}</li>
}

export default function CharacterSearch() {
  const [query, setQuery] = React.useState('')
  const [searchResults, requestNewResults] = useStarWarsCharacterSearch()
  function handleInput(newQuery) {
    if (newQuery.length < 3) return
    setQuery(newQuery)
    requestNewResults(newQuery)
  }
  const debouncedHandler = debounce(handleInput, 500)
  return (
    <>
      <input type="search" onChange={evt => debouncedHandler(evt.target.value)} />
      <div>{getListContent(searchResults)}</div>
      <div /> {/* Individual */}
    </>
  )
}
