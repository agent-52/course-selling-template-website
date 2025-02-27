import Faq from "../Faq/Faq"

const Section3 = () =>{
    return(
        <section className="pdb6 flexC gap3">
            <h1 className="fs3 f1 cBl textC">Frequently Asked Questions</h1>
            <div className="flexC alignC gap0">
                <Faq question="Who are lessons suitable for ?" answer="These lessons are suitable for individuals who are 5+ years old. Our teachers are bilingual and can speak both english and hindi."/>
                <Faq answer="" question="What equipment do i need to take online music lessons?"/>
                <Faq answer="" question="How do i set up my equipment for the lesson?"/>
                <Faq answer="" question="How do i book and pay for lessons?"/>
            </div>
        </section>
    )
}

export default Section3