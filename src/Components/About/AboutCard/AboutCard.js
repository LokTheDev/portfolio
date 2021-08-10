import "./AboutCard.css";
import myPic from "../about img/mypic.jpeg";
import Section from "./AboutSection/AboutSection";

function AboutCard() {
  return (
    <div className="AboutCard">
      <img className="MyPicIRL" src={myPic} alt="myrealpic" />

      <Section
        Icon="🏫"
        Title1="University of Technology, Sydney"
        Title2="(Software Development)"
      />

      <Section
        Icon="📍"
        Title1="About Lok: "
        Content="Graduated from Psychology Degree,  and found out my interest in Software Engineering. Mainly focus on Mobile development and website development!
Always keen to learn new technology! I love to code and solve algorithm like solving puzzle!"
      />

      <Section
        Icon="🔧"
        Title1="JavaScript"
        Title2="Python"
        Title3="Swift"
        Title4="Java"
      />

      <Section
        Icon="💬"
        Title1="English"
        Title2="Cantonese"
        Title3="Mandarin"
      />
    </div>
  );
}

export default AboutCard;
