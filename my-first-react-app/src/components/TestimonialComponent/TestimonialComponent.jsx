import "./TestimonialComponent.css"
const TestimonialComponent = ({name, message, heading}) =>{
    return(
        <div className="testimonialComponent flexC gap0">
            <div className="cBl textC mgB1 underline">{name}</div>
            <div className="f1 fs1_8 cBl textC">{heading}</div>
            <div className="mxW55 cBl fs1 textC">"{message}"</div>
        </div>
    )
}

export default TestimonialComponent;