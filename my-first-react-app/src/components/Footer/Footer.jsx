import Button from "../Button/Button"
import Logo from "../logo/Logo"
import Socials from "../Socials/Socials"
import "./Footer.css"

const Footer = ({name="Relya"}) =>{

    return(
        <footer className="bgLb cBl pdb2">
            <div className="pdi2 footer">
                <div>
                    <div className="flex justifySb w100 cBl gap3 alignC">
                        <div className="cBl">Home</div>
                        <div className="cBl">About Us</div>
                        <div className="cBl">Lessons</div>
                        <div className="cBl">Feedback</div>
                    </div>
                    <div className="h100 grid galignE"><Socials /></div>
                </div>
                <div className="flexC gap1 justifyC alignC w100">
                    <Logo classArray1="f1 cW fs1" classArray2="f1 cW fs0_8"/>
                    <div className="flexC textC alignC justifyC gap00">
                        <div className="cBl">We're open from 9:00-21:00 during the</div>
                        <div className="cBl">weekdays and 9:00-20:00 during the</div>
                        <div className="cBl">weekend.</div>
                    </div>
                    <div className="h100 grid galignE noLineBreak justifyC textC gap0">
                        <a href="/" className="underline cBl">Terms and Policies for {name} Online Music School</a>
                        <div className="cW">©2025, Music Online School {name}</div>
                    </div>
                </div>
                <div className="w100 flexC alignE">
                    <div className="flexC gap00">
                        <div className="cBl">Phone: +91 8817716005</div>
                        <div className="cBl">Email: {name}musicschool@gmail.com</div>
                    </div>
                    <div className="h100 grid w100 galignE justifyE"><Button classArray="brR bgBl cW pdb0 pdi1 fs1 flex alignC textC" text="Book a Lesson"/></div>
                </div>
            </div>

        </footer>
    )
}

export default Footer