import { div } from "three/tsl"
import "./Faq.css"

const Faq = ({question, answer}) =>{
    const handleExpand = () =>{
        const answer = document.querySelector(".answer")
        const question = document.querySelector(".question")
        const faqIcon = document.querySelector(".faqIcon")
        if(answer.classList.contains("hidden")){
            faqIcon.src = "/images/icons/minus.png"
            answer.classList.remove("hidden")
            answer.classList.add("visibleAns")
            question.classList.add("cLb")
            question.classList.remove("cBl")
        }else{
            answer.classList.remove("visibleAns")
            answer.classList.add("hidden")
            faqIcon.src = "/images/icons/add.png"
            question.classList.add("cBl")
            question.classList.remove("cLb")
        }
    }
    return(
        <div className="faq fs1_3 flexC gap0 justifyC ">
            <div className="flex justifyBw alignC">
                <div className="question cBl">{question}</div>
                <div className="faqImgBox" onClick={handleExpand}><img src="/images/icons/add.png" alt="expand"  className="faqIcon"/></div>
            </div>
            <div className="answer hidden">{answer}</div>
        </div>
    )
}

export default Faq