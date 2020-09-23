import React, {Component} from "react";
import './styles.css';

const Contact = (props) => (
    <>
     <div className="contact-wrapper">
         <div className="contact-firstName contact-elem">{props.firstName}</div>
         <div className="contact-lastName contact-elem">{props.lastName}</div>
         <div className="contact-phone contact-elem">{props.phone}</div>
         <div className="contact-gender contact-elem">{props.gender}</div>
     </div>
    </>
);

export default Contact;