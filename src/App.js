import HomePage from "./Components/LandingPage/HomePage";
import AboutPage from "./Components/About/AboutPage";
import ProjectPage from "./Components/ProjectPage/ProjectPage";
import ContactPage from './Components/Contact/ContactPage'
import Footer from './Components/Footer/footer'
function App() {
  return (
    <div className="App">
      <HomePage />
      <AboutPage />
      <ProjectPage/>
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
