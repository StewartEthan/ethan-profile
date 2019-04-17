import React from 'react'
// import axios from '@fs/zion-axios'

export function useBaconIpsum({ defaultValue = '' } = {}) {
  const [baconIpsum, setBaconIpsum] = React.useState(defaultValue)
  React.useEffect(() => {
    const url = `https://baconipsum.com/api/?sentences=1&type=meat-and-filler&start-with-lorem=1&make-it-spicy=1`
    // const url = `https://corporatebs-generator.sameerkumar.website/`
    const headers = { Accept: 'application/json' }
    // axios
    //   .get(url, { headers })
    fetch(url, { headers })
      .then(res => res.json())
      // .then(res => res.data)
      .catch(err => {
        console.error(`Couldn't fetch bacon ipsum! 😭`, err)
        return ''
      })
      .then(setBaconIpsum)
  }, [])
  return baconIpsum
}

export function useRandomStarWarsGif({ defaultValue = {} } = {}) {
  // 0UzsYskCB0ph5ynS8FXGJzuhudqnrXqs
  const [gifUrl, setGifUrl] = React.useState(defaultValue)
  let fetching = false
  function requestNewGif() {
    if (fetching) return
    fetching = true
    const url = `https://api.giphy.com/v1/gifs/random?tag=star%20wars&rating=g&api_key=0UzsYskCB0ph5ynS8FXGJzuhudqnrXqs`
    fetch(url)
      .then(res => res.json())
      .then(raw => raw.data)
      .catch(err => {
        console.error(`Couldn't fetch random Star Wars gif! 😭`, err)
        return {}
      })
      .then(setGifUrl)
      .then(() => {
        fetching = false
      })
  }
  React.useEffect(requestNewGif, [])
  return [gifUrl, requestNewGif]
}
