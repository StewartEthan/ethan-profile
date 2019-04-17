import React from 'react'
import { css } from '@emotion/core'
import { useBaconIpsum } from '../util/hooks'
import { hash } from '../util/util'

const baseListStyle = css`
  display: grid;
  grid-row-gap: 1em;
  list-style: none;
  margin-top: 0.5em;

  li {
    padding: 0 0.375em;
    position: relative;

    &::before {
      margin-left: -2em;
      position: absolute;
    }
  }
`
const factListStyle = css`
  li {
    --bullet-color: #87b940;

    &::before {
      --size: 0.875em;
      background-color: var(--bullet-color);
      border-radius: 20px 40px;
      content: '';
      height: var(--size);
      top: calc(50% - var(--size) / 2);
      width: var(--size);
    }
    &:nth-of-type(3n + 1) {
      --bullet-color: #f16458;
    }
    &:nth-of-type(3n + 2) {
      --bullet-color: #27c4f4;
    }
    &:nth-of-type(3n) {
      --bullet-color: #87b940;
    }
  }
`
const favListStyle = css`
  li::before {
    content: attr(data-emoji);
  }
`

export default function RandomFacts() {
  const baconIpsum = useBaconIpsum()
  const favorites = [
    {
      emoji: `🎥`,
      category: `Movie`,
      info: `Star Wars (all the movies, I refuse to pick one favorite)`,
    },
    { emoji: `📺`, category: `TV Show`, info: `Parks and Recreation` },
    {
      emoji: `🎵`,
      category: `Music Genre`,
      info: `Hip-hop/rap`,
    },
    { emoji: `🌈`, category: `Color`, info: `All of them` },
    {
      emoji: `📄`,
      category: `Lorem ipsum generator`,
      info: `Bacon ipsum (${baconIpsum || 'Fetching bacon ipsum...'})`,
    },
  ]
  const aboutMe = [
    `Born and raised in Idaho`,
    `Oldest of six children`,
    `Served a mission in California (Ventura mission)`,
    `Married for ${new Date().getFullYear() - 2014} years`,
    `Been writing code since 2014, (professionally since 2015)`,
  ]
  return (
    <>
      <h1>Random Facts</h1>
      <p>Here are some random facts about me, in no particular order</p>
      <h2>About Me</h2>
      <ul css={[baseListStyle, factListStyle]}>
        {aboutMe.map(fact => (
          <li key={hash(fact)}>{fact}</li>
        ))}
      </ul>
      <h2>Favorite Things</h2>
      <ul css={[baseListStyle, favListStyle]}>
        {favorites.map(fav => (
          <li key={hash(fav.info)} data-emoji={fav.emoji}>
            <strong>{fav.category}:</strong>&nbsp;{fav.info}
          </li>
        ))}
      </ul>
    </>
  )
}
