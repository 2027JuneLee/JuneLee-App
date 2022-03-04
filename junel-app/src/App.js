import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./MainPage"
import LoginPage from './LoginPage';

function App() {
  return(
  <div>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginPage />}/>
        <Route exact path="/home" component={<MainPage />}/>
        {/* <LoginPage exact path="/login" component={LoginPage}/>
        <MainPage exact path="/main" component={MainPage}/> */}
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;