import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import BlogsList from './components/BlogsList'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

const App = () => (
  <Switch>
    <Route exact path="/" component={BlogsList} />
    <Route exact path="/login" component={Login} />
  </Switch>
)

export default App
