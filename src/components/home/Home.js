import React from 'react'
import { css } from '@emotion/core'
// import { Trans } from 'react-i18next'
import selfie from '../static/selfie.jpg'

const imgCss = css`
  max-width: 200px;
  width: 15vw;
`

export default function Home() {
  return (
    <>
      <h1>Hello there!</h1>
      <p>
        My name is Ethan Stewart. I have been at FamilySearch since 2016 and am currently the
        front-end tech lead for the Help team. I love Star Wars, video games, and writing code.
        Click the links above to learn more about me.
      </p>
      <img src={selfie} alt="Selfie of Ethan" css={imgCss} />
    </>
  )
}

// const Home = () => (
//   <div
//     css={css`
//       text-align: center;
//     `}
//   >
//     <HomeHeader>
//       <Logo />
//       <p>
//         <Trans i18nKey="update.instructions">
//           Edit <code>src/components/App.js</code> and save to reload.
//         </Trans>
//       </p>
//       <a
//         css={css`
//           color: #61dafb;
//         `}
//         href="https://www.familysearch.org/frontier/docs/#/"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <Trans i18nKey="learn.frontier">Learn Frontier</Trans>
//       </a>
//     </HomeHeader>
//   </div>
// )

// export default Home
