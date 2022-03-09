import { BrowserRouter as Router, Route } from "react-router-dom"
import HomePage from "./HomePage"
import LoginPage from './LoginPage';

function App() {
  return(
  <div>
      <Router>
        <Route path="/" component={LoginPage}/>
        <Route path="/home" component={HomePage}/>

      </Router>
  </div>
  );
}

export default App;