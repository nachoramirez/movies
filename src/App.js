import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './Components/Header/Header.jsx'
import GlobalStyle from './GlobalStyle'

import Home from './Containers/Home/Home.jsx'
import Movie from './Containers/Movie/Movie.jsx'
import SearchPage from './Containers/SearchPage/SearchPage.jsx'
import GenresPage from './Containers/GenresPage/GenresPage.jsx'
import Series from './Containers/Series/Series.jsx'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movie/:id" component={Movie} />
          <Route exact path="/tv/:id" component={Movie} />
          <Route exact path="/search/" component={SearchPage} />
          <Route exact path="/genre/:id" component={GenresPage} />
          <Route exact path="/series/" component={Series} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
