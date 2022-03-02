import { Router, Route } from "react-router-dom"
import MainPage from "./MainPage"
import LoginPage from './LoginPage';

function App() {
  return(
  <div>
    <Router>
      <Route exact path="/login" component={LoginPage}></Route>
      <Route exact path="/main" component={MainPage}></Route>
      {/* <LoginPage exact path="/login" component={LoginPage}/>
      <MainPage exact path="/main" component={MainPage}/> */}
    </Router>
  </div>
  );
}

export default App;