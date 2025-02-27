import Logo from "../logo/Logo"
import Button from "../Button/Button"
import Socials from "../Socials/Socials"
const Header = () =>{

    return (
        <header className="justifyBw flex w100 pdb1_5 fs1 pdi2 alignC">
            <div className="f2 flex justifyL gap6 w100">
                <div>Home</div>
                <div>About Us</div>
                <div>Lessons</div>
                <div>More</div>
            </div>
            <div className="w100 flex justifyC alignC">
                <Logo classArray1="f1 cW fs1" classArray2="f1 cW fs0_8"/>
            </div>
            <div className="w100 flex justifyR gap2">
                <Socials />
                <Button text="Book a Lesson" classArray="bgBl cW pdi1 flex alignC textC fs1 pdb0 brR"/>
            </div>
        </header>
    )
}

export default Header