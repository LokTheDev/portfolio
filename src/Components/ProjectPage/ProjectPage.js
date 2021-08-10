import "./ProjectPage.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import RestFulApi from "./ProjectCard/projectCardImg/icons8-api-100.png";
import InventorySystem from './ProjectCard/projectCardImg/icons8-in-inventory-96.png';
import Book from './ProjectCard/projectCardImg/icons8-bookmark-128.png'



function ProjectPage() {
  return (
    <div className="ProjectPage" id="projectPage">
      <ProjectCard
        ProjectImg={RestFulApi}
        Title="RestFul API"
        Content="It's a basic RESTful API based on MongoDB and Node.JS.
        Can perform get, post ,patch, put and delete function! Connected to database to store all the information. Ready to apply in real-life usage."
        btn1="JavaScript"
        btn2="Node.JS"
        btn3="MongoDB"
        Link="https://github.com/LokTheDev/restful-API-TESTing"
      />

      <ProjectCard
        ProjectImg={InventorySystem}
        Title="Inventory Management"
        Content="It's an Inventory management system that can be applied to real-life situation.
        Using JavaScript, with basic CRUD function. This Application also has Login / register System!
        Check out my Github to see Java version with GUI"
        btn1="JavaScript"
        btn2="Node.JS"
        btn3="MongoDB"
        Link="https://github.com/LokTheDev/inventory-management-system"
      />
      <ProjectCard
        ProjectImg={Book}
        Title="React APP portfolio"
        Content="This webApp is fully built on React!
        Try to visit this web with your Iphone. This a responsive webApp. Well designed with Figma, and design pattern."
        btn1="JavaScript" btn2="React.JS" btn3="CSS"
      />
      
    </div>
  );
}

export default ProjectPage;
