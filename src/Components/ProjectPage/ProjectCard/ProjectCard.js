import './ProjectCard.css';
import GitLogo from './projectCardImg/icons8-github-50.png';

function ProjectCard(props) {
  return (
    <div className="ProjectCard">
      <div className="ProjectImgContainer">
        <img src={props.ProjectImg} alt="projectPic"  width="140px" height="140px" />
      </div>
      <div className="ProjectContent">
          <h1>{props.Title}</h1>
          <p>{props.Content}</p>
          <div className="ProjectContentBottom">
              <div className="ProjectBtn">
                <button>{props.btn1}</button>
                <button>{props.btn2}</button>
                <button>{props.btn3}</button>
              </div>
          </div>
          <div className='ProjectLink'>
                <a href={props.Link} target="_blank"><img src={GitLogo} alt="githubLink"/></a>
              </div>
      </div>
    </div>
  );
}

export default ProjectCard;
