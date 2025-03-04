import "./LessonCard.css"
const LessonCard = ({img, instrument, startPrice, desc}) =>{

    return(
        <div className="lessonCard">
            <div className="lessonImg"><img src={img} alt="" /></div>
            <div className="flexC justifyC gap00 pdi0">
                <div className="flexC gap00 pdt1">
                    <div className=" cBl fs1_3 w100" style={{borderBottom:"2px solid #ADBBC6"}}>{instrument} Lesson</div>
                    <div className="cLb" style={{opacity: 0.7}}>{desc}</div>
                </div>
                <div className="flex justifyBw alignC">
                    <div className="cBl">from <span className="fs1_5">{startPrice}£</span></div>
                    <div className="cartImgBox"><img src="/images/icons/cart.png" alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default LessonCard