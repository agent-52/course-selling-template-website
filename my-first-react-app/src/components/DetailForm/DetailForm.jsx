import { useState } from "react"


const DetailForm = () =>{
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [date, setDate] = useState("")
    const [message, setMessage] = useState("")
    return (
        <form action="" method="post" className="pdi2 pdb2  fs1 flexC gap2">
            <h1 className="f1 fs3 cBl ">Schedule a Free Trial</h1>
            <div className="flex gap1_5">
                <div className="flexC gap0">
                    <label htmlFor="name">Name</label>
                    <input type="text" value={name} placeholder="Anshul" onChange={(name) => setName(name.target.value)}/>
                </div>
                <div className="flexC gap0">
                    <label htmlFor="phone">Phone <span className="cBl">*</span></label>
                    <input type="tel" value={phone} required placeholder="8817716105" onChange={(phone) => setPhone(phone.target.value)}/>
                </div>
            </div>
            <div className="flex gap1_5">
                <div className="flexC gap0">
                    <label htmlFor="email">Email <span className="cBl">*</span></label>
                    <input type="email" value={email} required placeholder="anshul123@gmail.com" onChange={(email) => setEmail(email.target.value)}/>
                </div>
                <div className="flexC gap0">
                    <label htmlFor="date">Date <span className="cBl">*</span></label>
                    <input type="date" value={date} onChange={(date) => setDate(date.target.value)}/>
                </div>
            </div>
            <div className="flexC gap0">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" value={message} placeholder="Hi i am anshual i learned guitar before but i am unable to play without watching a tutorial i hope you can help me out!" onChange={(message) => setMessage(message.target.value)}></textarea>
            </div>
            <button type="submit" className="w100 bgBl cW f2 fs1 brR pdi1 pdb0">Schedule</button>
        </form>
    )
}

export default DetailForm