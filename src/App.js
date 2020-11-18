// router
import { Switch, Route } from 'react-router-dom'
// pages
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import OurWork from './pages/OurWork'
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
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  )
}

export default App
