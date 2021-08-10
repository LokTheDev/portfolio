import './SectionCard.css';


function AboutSection(props){
    return <div className='AboutSection'>
        <h1>{props.Icon}</h1>
        <h2>{props.Title1}</h2>
        <h2>{props.Title2}</h2>
        <h2>{props.Title3}</h2>
        <h2>{props.Title4}</h2>
        <h2>{props.Title5}</h2>
        <p>{props.Content}</p>
    </div>
}

export default AboutSection;