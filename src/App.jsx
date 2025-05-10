import {BrowserRouter , Routes , Route} from "react-router-dom"
import {LandingPage} from "./pages/LandingPage" 
import { SignupFormPage } from "./pages/SignupFormPage";
import { LoginFormPage } from "./pages/LoginFormPage";
import { HomePage } from "./pages/HomePage";

const App = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
             <Route path="/" element = {< LandingPage/>}/>
             <Route path="/home" element = {< LandingPage/>}/>
             <Route path="/signupForm" element = { < SignupFormPage/>}/> 
             <Route path="/loginForm" element = { <LoginFormPage/>}></Route>
             <Route path = "/dashboard" element = {<HomePage/>}></Route>
        </Routes>
    </BrowserRouter></>
  )
}
export default App;