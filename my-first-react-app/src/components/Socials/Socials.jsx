import "./social.css"
const socialArray = [
    {name:"instagram", link: "/", iconUrl: "/images/icons/insta.png"},
    {name:"youtube", link: "/", iconUrl: "/images/icons/yt.png"},
    {name:"facebook", link: "/", iconUrl: "/images/icons/facebook.png"},
    {name:"telegram", link: "/", iconUrl: "/images/icons/tele.png"}

]
const Socials = () =>{

    return(
        <div className="flex gap0">
            {socialArray.map((social, index) =>{
                return(
                    <a href={social.link} className="socialLink" key={index}><img src={social.iconUrl} alt={social.name} /></a>
                )
            })}
        </div>
    )
}

export default Socials;