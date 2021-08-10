import "./Form.css";
import GitIcon from "./FormIcon/icons8-github-128.png";
import LinkIcon from "./FormIcon/icons8-linkedin-128.png";
import Email from "./FormIcon/icons8-email-open-96.png";
/* test */

import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import { everyLimit } from "async";
import { useState } from "react";
import { func } from "prop-types";
init("user_BBkn5oJ3zoTn0kyWCIGQR");

function sendEmail(e) {
    function formClick() {
        document.getElementById("submitForm").reset();
        document.getElementById("formStatus").innerHTML = 'Email Sent :)'
        document.getElementById("formReply").innerHTML = 'I will get back to you soon '
        document.getElementById("formStatus").style.color ='green'
        document.getElementById("formReply").innerHTML = 'I will get back to you soon ✔️'
        document.getElementById("formReply").style.color ='green'
    }
    
  e.preventDefault();
  emailjs
    .sendForm(
      "service_cpqd2q8",
      "template_804pqpk",
      e.target,
      "user_BBkn5oJ3zoTn0kyWCIGQR"
    )
    .then(formClick())
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
}

function ContactForm(props) {
  function nameChangeHandler(event) {
    const inputName = event.target.value;
    props.onSaveUserName(inputName.toUpperCase());
  }


  return (
    <div className="ContactForm">
      <h1 id='formStatus'></h1>
      <p id='formReply'></p>
      <form onSubmit={sendEmail} className="formSelf" id="submitForm">
        <input
          name="user_name"
          type="text"
          placeholder="name"
          onChange={nameChangeHandler}
          required
        />
        <input type="email" name="user_email" placeholder="email" required />
        <textarea
          name="message"
          type="text"
          placeholder="Your Message!"
          rows="5"
          cols="20"
          required
        />
        <button className="formBtn" type="submit">
          {" "}
          Send!{" "}
        </button>
      </form>
      <div className="FormIconSection">
        <a target="_blank" href="https://www.linkedin.com/in/l-l-8a17b1208/">
          {" "}
          <img className="formIcon" src={LinkIcon} alt="GitHub" />{" "}
        </a>
        <a target="_blank" href="https://github.com/LokTheDev">
          {" "}
          <img className="formIcon" src={GitIcon} alt="GitHub" />{" "}
        </a>
        <a target="_blank" href="mailto:Loktl733@gmail.com">
          {" "}
          <img className="formIcon" src={Email} alt="Email" />{" "}
        </a>
      </div>
    </div>
  );
}

export default ContactForm;
