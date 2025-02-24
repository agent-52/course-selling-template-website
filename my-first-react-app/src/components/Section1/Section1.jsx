import Logo from "../logo/Logo"
import Button from "../Button/Button"
import "./Section1.css"
const Section1 = () =>{

    return(
        <div className="section1 ">
            <div className="relative">
                
                <div className="s1ImgBox mgL4 mgT4"><img src="/images/photos/i5.png" alt="" /></div>
                <div className="box flute1"><img src="/images/icons/flute.png" alt="" /></div>
                
            </div>
            <div className="flexC alignC mgT8 gap0">
                <div className="mgB2">
                <Logo classArray1="f1 fs2_5 cW" classArray2="f1 fs1 cW"/>
                </div>
                <h1 className="f1 fs3 " style={{fontWeight: 100}}>First Notes to Masterpieces</h1>
                <div className="mxW55 textC fs1_2 flexC gap00" style={{fontWeight: 50, opacity: 0.5}}>
                    <div >Get expert music lessons from qualified teachers</div>
                    <div>in the comfort of your own home with our live</div> 
                    <div>online and offline classes.</div> 
                </div>
                <div className="flexC pdb0">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <Button text="Book demo class" classArray="bgBl cW brR fs1 pdi1 flex alignC textC fs1 pdb0 " />
            </div>
            <div className="flexC alignR justifyC">
                <div className="box guitar1"><img src="/images/icons/guitar.png" alt="" /></div>
                <div className="box drum1"><img src="/images/icons/drum.png" alt="" /></div>
                <div className="s1ImgBox1"><img src="/images/photos/i4.png" alt="" /></div>
                
            </div>
            


        </div>
    )
}

export default Section1