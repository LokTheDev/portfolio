import React, { useState } from "react";
import "./ContactPage.css";
import Form from "./Form/Form";

function ContactPage() {
  const [name, setName] = useState("______");

        const nameDataHandler = (EnteredName) => {
            const EnteredInput = EnteredName;
            setName(EnteredInput);
        }



  return (
    <div className="ContactPage" id='Contact'>
      <div className="Card_Cover">
        <div className="ContactPage_Text">
          <h1>Hello, {name}</h1>
          <p>Contact Me</p>
        </div>

        <div className="FormContainer">
          <div className="ContactPage_Form">
            <Form onSaveUserName={nameDataHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
