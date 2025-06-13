import React from "react";
import "./Contact.css";


const EmailLink = ({ email, subject, body }) => {
  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return <a href={mailto}>Send Email</a>;
};

const Contact = () => {
    return (
        <div className="Contact">
          <p> Stark Industries of Computers</p>
            <p>RT-Nagar bangalure-560032</p>  
            <p> Phone No :9972178430</p>
            <p>srihariks1602@gmail.com</p>
            <EmailLink email="srihariks1602@gmail.com" subject="Hello!" body="How are you?"/>
           

        </div>
    );
};
export default Contact;