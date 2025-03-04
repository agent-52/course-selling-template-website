import LessonCard from "../LessonCard/LessonCard"
import "./LessonSection.css"
const lessonsArray = [
    {
        img: "/images/photos/guitar.jpg",
        instrument: "Guitar",
        startPrice: "34",
        desc: "15 videos, 4 tests"
    },
    {
        img: "/images/photos/flute.jpeg",
        instrument: "Flute",
        startPrice: "34",
        desc: "17 videos, 4 tests"
    },
    {
        img: "/images/photos/piano.jpg",
        instrument: "Piano",
        startPrice: "34",
        desc: "15 videos, 4 tests"
    },
    {
        img: "/images/photos/drum.jpg",
        instrument: "Drum",
        startPrice: "34",
        desc: "15 videos, 4 tests"
    }
]
const LessonSection = () =>{

    return(
        <div className="pdb5 flexC gap2">
            <div className="bgLb banner flex justifySe pdb1 alignC ">
                <div className="cBl f1 fs2">Profitable Offers</div>
                <div className="dot bgBl"></div>
                <div className="cBl f1 fs2">Profitable Offers</div>
                <div className="dot bgBl"></div>
                <div className="cBl f1 fs2">Profitable Offers</div>
            </div>
            <div className="flexC justifyC alignC gap0 pdt4">
                <h3 className="cBl fs2_5 f1 textC">Our Lessons</h3>
                <p className="textC fs1 w80" style={{opacity: 0.6}}>Join our music school today and take the first step towards achieving your musical dreams. With our experienced teachers, comprehensive curriculum, and innovative learning programme, we are confident that you will enjoy your musical journey with us.</p>
            </div>
            
            <div className="flex justifyC gap3 alignC">
                <button  className="box  testimonialButtons"><img src="/images/icons/back.png" alt="next" /></button>
                {lessonsArray.map((lesson) =>{
                    return(
                        <LessonCard img={lesson.img} instrument={lesson.instrument} startPrice={lesson.startPrice} desc={lesson.desc} />
                    )
                })}
                <button  className="box testimonialButtons"><img src="/images/icons/next.png" alt="back" /></button>
            </div>
        </div>
    )
}

export default LessonSection;