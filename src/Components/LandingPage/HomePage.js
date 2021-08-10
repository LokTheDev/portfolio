import NavBar from "./NavBar/Navbar";
import NameCard from "./NameCard/NameCard";
import MainTextPage1 from "./mainTextPage1/MainTextPage1";
import IconDiv from "./IconDiv/IconDiv";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homePage" id="home">
      <NavBar />
      <div className="ContentPage1">
        <NameCard />
        <MainTextPage1 />
        <IconDiv />
      </div>
    </div>
  );
}

export default HomePage;
