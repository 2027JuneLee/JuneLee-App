import { BrowserRouter as Router, Route } from "react-router-dom"
import HomePage from "./HomePage"
import LoginPage from './LoginPage';
import Archive from './Archive';
import Web from './Web';

function App() {
  return(
  <div>
      <Router>
        <Route exact path="/" component={LoginPage}/>
        <Route exact path="/home" component={HomePage}/>
        <Route exact path="/archive" component={Archive}/>
        <Route exact path="/web" component={Web}/>

      </Router>
  </div>
  );
}

export default App