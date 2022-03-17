import { BrowserRouter as Router, Route } from "react-router-dom"
import HomePage from "./HomePage"
import LoginPage from './LoginPage';
import Archive from './Archive';

function App() {
  return(
  <div>
      <Router>
        <Route exact path="/" component={LoginPage}/>
        <Route exact path="/home" component={HomePage}/>
        <Route exact path="/archive" component={Archive}/>

      </Router>
  </div>
  );
}

export default App;