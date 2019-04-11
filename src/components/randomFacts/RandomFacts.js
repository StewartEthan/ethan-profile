import React from 'react'
import { useBaconIpsum } from './hooks'

export default function RandomFacts() {
  const baconIpsum = useBaconIpsum()
  const favorites = [
    {
      emoji: `🎥`,
      category: `Movie`,
      info: `Star Wars (all the movies, I refuse to pick one as a favorite)`,
    },
    { emoji: `📺`, category: `TV Show`, info: `Parks and Recreation` },
    {
      emoji: `🎵`,
      category: `Music Genre`,
      info: `Hip-hop/Rap (but I like most non-country music)`,
    },
    { emoji: `🌈`, category: `Color`, info: `All of them` },
    {
      emoji: `❓`,
      category: `Lorem ipsum generator`,
      info: `Bacon ipsum ${(baconIpsum && `(${baconIpsum})`) || ''}`,
    },
  ]
  const aboutMe = [
    `Born and raised in Idaho`,
    `Oldest of six children`,
    `Served a mission in California (Ventura mission)`,
    `Married for about ${new Date().getFullYear() - 2014} years`,
    `Been writing code since 2014, (professionally since 2015)`,
  ]
  return (
    <>
      <h1>Random Facts</h1>
      <p>Here are some random facts about me, in no particular order</p>
      <h2>About Me</h2>
      <ul>
        {aboutMe.map(fact => (
          <li>{fact}</li>
        ))}
      </ul>
      <h2>Favorite Things</h2>
      <ul>
        {favorites.map(fav => (
          <li>
            {fav.emoji}&nbsp;<strong>{fav.category}:</strong>&nbsp;{fav.info}
          </li>
        ))}
      </ul>
    </>
  )
}
