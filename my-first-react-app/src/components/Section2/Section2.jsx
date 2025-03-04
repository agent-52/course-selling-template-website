import DetailForm from "../DetailForm/DetailForm"
import Button from "../Button/Button"
import Testimonials from "../Testimonials/Testimonials"
const Section2 = ({name="Relya", city="mumbai"}) =>{

    return(
        <div className="section2">
            <div className="courseral flex justifyC" style={{opacity: 0.7, fontWeight:100}}>
                <div className="flex gap0 pdi4">
                    <div className="box"><img src="/images/icons/note.png" alt="" /></div>
                    <div>
                        <div>A wide range of </div>
                        <div>music lessons</div>
                    </div>
                </div>
                <div className="flex gap0 pdi4">
                    <div className="box"><img src="/images/icons/music2.png" alt="" /></div>
                    <div>
                        <div>Regular testing</div>
                        <div>Sessions</div>
                    </div>
                </div>
                <div className="flex gap0 pdi4">
                    <div className="box"><img src="/images/icons/musicClass.png" alt="" /></div>
                    <div>
                        <div>Quality music</div>
                        <div>education</div>
                    </div>
                </div>
                <div className="flex gap0 pdi4">
                    <div className="box"><img src="/images/icons/musicTeacher.png" alt="" /></div>
                    <div>
                        <div>Experienced</div>
                        <div>teachers</div>
                    </div>
                </div>
            </div>
            
            <div className="pdb6">
                <div className="flex alignC justifySe ">
                    <div className="flexC gap1">
                        <h2 className="f1 fs3 cBl">What We Offer</h2>
                        <p className="mxW55 fs1 mgB0" style={{opacity: 0.6}}>At {name}, we offer detailed lessons to our students, which can be taken from anywhere in the world through the internet. Our unique learning pathway of lessons is designed to help students progress at their own pace. We also provide full recordings of our lessons, which our students can access anytime, anywhere.</p>
                        <Button text="I want to study" classArray="bgBl cW brR fs1 pdi1 flex alignC textC fs1 pdb0 "/>
                    </div>
                    <div>
                        <DetailForm />
                    </div>
                </div>
            </div>
            
            <div className="pdb4 pdB6">
                <div className="flex alignC justifySe ">
                    <div className="s1ImgBox1"><img src="/images/photos/i2.jpg" alt="" /></div>
                    <div className="flexC gap1">
                        <h2 className="f1 fs3 cBl">About Us</h2>
                        <p className="mxW55 fs1 mgB0" style={{opacity: 0.6}}>Welcome to {name} music school! Our school is based in {city} and offers a wide range of music lessons for piano, guitar, flute, drums, singing. Our purpose is to provide quality music education to anyone who has a passion for music. Our mission is to help our students achieve their music goals through our online as well  as offline leaning pathway of lessons and testing sessions.</p>
                        <Button text="Book a Lesson" classArray="bgBl cW brR fs1 pdi1 flex alignC textC fs1 pdb0 "/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Section2