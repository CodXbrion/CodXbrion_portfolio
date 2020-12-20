import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Projects from './pages/Projects'
import Navbar from './components/navbar/Navbar'



function App() {
  

  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/skills'>
            <Skills/>
          </Route>
          <Route exact path='/contact'>
            <Contact/>
          </Route>
          <Route exact path='/projects'>
            <Projects/>
          </Route>        
          <Route path='*'>
            <Error/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
