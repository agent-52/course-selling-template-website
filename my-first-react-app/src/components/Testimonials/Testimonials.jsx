import "./Testimonials.css"
import TestimonialComponent from "../TestimonialComponent/TestimonialComponent"
import { useEffect, useState } from "react"

const messageArray1 = [
    {
        name: "Meera S.",
        heading: "Professional and Passionate Teachers",
        message: "The instructors here are not just skilled musicians but also amazing mentors. Their passion for teaching is evident, and they genuinely care about every student’s progress."
    },
    {
        name: "Aarav M.",
        heading: "Life-Changing Experience!",
        message: "This music school has truly transformed my love for music! The instructors are incredibly talented and patient, making learning fun and engaging. Highly recommended!"
    },
    {
        name: "Sanya R.",
        heading: "Best Music Classes Ever!",
        message: "I always wanted to learn guitar, and this school made it so easy! The lessons are well-structured, and the teachers are super encouraging. Now, I can play my favorite songs!"
    },
    {
        name: "Rahul K.",
        heading: "A Fantastic Learning Environment!",
        message: "The school provides a friendly and inspiring space to learn music. My son has improved tremendously in just a few months of piano lessons!"
    },
    
]

const Testimonials = () =>{
    const [tIndex, setTIndex] = useState(0)
    const [message, setMessage] = useState(messageArray1[0])
    useEffect(() =>{
        setMessage(messageArray1[tIndex])
        // console.log(messageArray1)
    },[tIndex])
    const handleNext = () =>{
        const maxIndex = messageArray1.length -1
        if(tIndex === maxIndex){
            setTIndex(0)
        }else{
            const next = tIndex
            const nextIndex = tIndex + 1
            setTIndex(nextIndex)
        }
    }
    const handleBack = () =>{
        const maxIndex = messageArray1.length -1
        if(tIndex === 0){
            setTIndex(maxIndex)
        }else{
            const next = tIndex
            const nextIndex = tIndex - 1
            setTIndex(nextIndex)
        }
    }
    return(
        <div>
            <button onClick={handleNext} className="box"><img src="/images/icons/arrow.png" alt="next" /></button>
             <TestimonialComponent name={message.name} message={message.message} heading={message.heading}/> 
            <button onClick={handleBack} className="box"><img src="/images/icons/arrow.png" alt="back" /></button>
        </div>
    )
}

export default Testimonials