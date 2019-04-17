/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Button from '@fs/zion-button'
import { css } from '@emotion/core'
import { useRandomStarWarsGif } from '../util/hooks'

const containerStyle = css`
  display: grid;
  grid-row-gap: 0.5em;
  justify-items: center;
  margin: auto;
  max-width: 650px;

  img {
    max-height: 60vh;
    object-fit: contain;
    width: 100%;
  }
  iframe {
    width: 100%;
  }
`

export default function RandomStarWars() {
  const [gifUrl, requestNewGif] = useRandomStarWarsGif()
  return (
    <div css={containerStyle}>
      <h1>I LOVE STAR WARS</h1>
      <p>
        I have a lifelong obsession. Here's some Star Wars related stuff I thought would be fun.
      </p>
      <h2>Random Star Wars GIF</h2>
      <p>
        In the interest of making sure anyone seeing this page has enough Star Wars in their life,
        here is a random Star Wars GIF from Giphy. Use the button below to change the GIF.
      </p>
      {gifUrl.image_url ? <img src={gifUrl.image_url} alt={gifUrl.title} /> : 'Loading gif...'}
      <Button type="button" kind="recommended" onClick={requestNewGif}>
        New Random Gif
      </Button>
      <div style={{ marginTop: '1em' }}>
        <p>
          And just for kicks, here's the trailer for Episode 9 because watching it makes me super
          happy and I can't wait to see what happens.
        </p>
        <iframe
          title="Teaser trailer for Star Wars Episode 9: The Rise of Skywalker"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/adzYW5DZoWs"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}
