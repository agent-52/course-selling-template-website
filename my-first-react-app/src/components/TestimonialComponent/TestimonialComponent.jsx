import "./TestimonialComponent.css"
const TestimonialComponent = ({name, message, heading}) =>{
    return(
        <div className="testimonialComponent">
            <div className="cBl textC">{name}</div>
            <div className="f1 f1_5 cBl">{heading}</div>
            <div className="mxW55 cBl fs1 textC">{message}</div>
        </div>
    )
}

export default TestimonialComponent;