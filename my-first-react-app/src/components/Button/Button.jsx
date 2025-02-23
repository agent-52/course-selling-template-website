import "./button.css"

const Button = ({classArray, text}) =>{
    return(
        <button className={classArray}>{text}</button>
    )
}

export default Button;