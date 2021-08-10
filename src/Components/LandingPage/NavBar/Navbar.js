import "./NavBar.css";
import aboutImg from "./navImg/account_circle_black_24dp.svg";
import projectImg from "./navImg/article_black_24dp.svg";
import contactImg from "./navImg/icons8-new-contact-48.png";

function NavBar() {
  return (
    <div className="navContainer">
      <div className="navBtn">
        
        <button>
          <a href="#about">
            <img src={aboutImg} alt="about" />
          </a>
        </button>
        <button>
          <a href="#projectPage">
            <img src={projectImg} alt="project" />
          </a>
        </button>
        <button>
          <a href='#Contact'>
            <img src={contactImg} alt="contact" width="24px" />
          </a>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
