import React from 'react'
import { Router, Link, NotFound, RequiresAuth } from '@fs/zion-router'
import Subnav from '@fs/zion-subnav'
import { Trans } from 'react-i18next'
import Home from './home/Home'
// import UserInfo from './user/UserInfo'
import RandomFacts from './randomFacts/RandomFacts'

function App() {
  return (
    <>
      <Subnav>
        <Link to="/">
          <Trans i18nKey="nav.home">Home</Trans>
        </Link>
        <Link to="random-facts">
          <Trans i18nKey="nav.randomFacts">Random Facts</Trans>
        </Link>
        {/* <Link to="favorite-movies">
          <Trans i18nKey="nav.favoriteMovies">Favorite Movies</Trans>
        </Link> */}
      </Subnav>

      <Router>
        <RequiresAuth path="/" component={Home} />
        <RequiresAuth path="/random-facts" component={RandomFacts} />
        <NotFound default />
      </Router>
    </>
  )
}
export default App
