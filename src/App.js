// router
import { Switch, Route } from 'react-router-dom'
// pages
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import OurWork from './pages/OurWork'
import MovieDetail from './pages/MovieDetail'
// components
import Nav from './components/Nav'
// styles
import GlobalStyle from './components/GlobalStyle'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path="/">
          <AboutUs />
        </Route>
        <Route exact path="/work">
          <OurWork />
        </Route>
        <Route path="/work/:id">
          <MovieDetail />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  )
}

export default App
