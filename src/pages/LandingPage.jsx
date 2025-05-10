import { Navbaar } from "../components/Navbar";
import { About } from "../components/About";
import { HeadSection } from "../components/HeadSection";
import { Section3 } from "../components/section3";
import { Section4 } from "../components/section4";
import "../App.css";
export const LandingPage = () => {
    return(
        <>
        
        <Navbaar/>
        
        <HeadSection/>
        <div className="main-content">
        <About/>
        </div>
        <div className="main-content">
        <Section3/>
        <Section4/>
        </div>
         
        </>
    )
}