import { useState } from "react"


const DetailForm = () =>{
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [date, setDate] = useState("")
    const [domain, setDomain] = useState("")
    const sendWhatsAppMessage = () =>{
        let name = document.querySelector("#name").value.trim()
        let date = document.querySelector("#date").value.trim()
        let domain = document.querySelector("#domain").value.trim()
        let message = `Hello, ${name} this side. I am interested in learning ${domain}. Could you please provide details on availability and fees? I would love to have a demo class on ${date} if possible. Looking forward to your response. Thank you!`;
        let phoneNumber = "+918817716118"; // Change this to your number
        let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    }
    return (
        <form  onSubmit={sendWhatsAppMessage} className="pdi2 pdb2  fs1 flexC gap2">
            <h1 className="f1 fs3 cBl ">Schedule a Free Trial</h1>
            <div className="flex gap1_5">
                <div className="flexC gap0">
                    <label htmlFor="name">Name<span className="cBl">*</span></label>
                    <input type="text" value={name} placeholder="Anshul" onChange={(name) => setName(name.target.value)} id="name" required/>
                </div>
                <div className="flexC gap0">
                    <label htmlFor="phone">Phone </label>
                    <input type="tel" value={phone} placeholder="8817716105" onChange={(phone) => setPhone(phone.target.value)} id="phoneNumber"/>
                </div>
            </div>
            <div className="flex gap1_5">
                <div className="flexC gap0">
                    <label htmlFor="email">Email </label>
                    <input type="email" value={email} placeholder="anshul123@gmail.com" onChange={(email) => setEmail(email.target.value)} id="email"/>
                </div>
                <div className="flexC gap0">
                    <label htmlFor="date">Date <span className="cBl">*</span></label>
                    <input type="date" value={date} onChange={(date) => setDate(date.target.value)} id="date"/>
                </div>
            </div>
            <div className="flexC gap0">
                <label htmlFor="message">Domain<span className="cBl">*</span></label>
                <input name="domain" id="domain" value={domain} placeholder="Singing / Flute / Guitar / Drum ..." onChange={(domain) => setDomain(domain.target.value)} ></input>
            </div>
            <button type="submit" className="w100 bgBl cW f2 fs1 brR pdi1 pdb0" >Schedule</button>
        </form>
    )
}

export default DetailForm