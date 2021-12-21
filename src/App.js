import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './Components/Header/Header.jsx'
import GlobalStyle from './GlobalStyle'

import Home from './Containers/Home/Home.jsx'
import Movie from './Containers/Movie/Movie.jsx'
import SearchPage from './Containers/SearchPage/SearchPage.jsx'
import GenresPage from './Containers/GenresPage/GenresPage.jsx'
import Series from './Containers/Series/Series.jsx'
import Premiere from './Containers/Premiere/Premiere.jsx'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/movies/" component={Home} />
          <Route exact path="/movies/movie/:id" component={Movie} />
          <Route exact path="/movies/tv/:id" component={Movie} />
          <Route exact path="/movies/search/" component={SearchPage} />
          <Route exact path="/movies/genre/:id" component={GenresPage} />
          <Route exact path="/movies/series/" component={Series} />
          <Route exact path='/movies/premiere' component={Premiere} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
