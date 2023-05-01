import "./contact.scss";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { LinkedIn, GitHub, WhatsApp } from "@material-ui/icons";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setMessage(true);

    emailjs
      .sendForm(
        "service_up5iqpk",
        "template_b63ttkf",
        form.current,
        "jh2Yz5jkJOwsMR4w4"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          window.scrollTo(0, document.body.scrollHeight);
          document.getElementById("alert").classList.remove("hidden");
        },
        (error) => {
          console.log(error.text);
        }
      );
    setMessage(true);
  };

  return (
    <div className='contact' id='contact'>
      <div className='left'>
        <img src='assets/shake.svg' alt='' />
      </div>
      <div className='right'>
        <h2>Contact.</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input name='email' type='text' placeholder='Email' required />
          <input name='phone' type='text' placeholder='Phone number' />
          <textarea name='msg' placeholder='Message' required></textarea>
          <button type='submit'>Send</button>
          {message && (
            <span
              style={{
                background: "#40c740",
                color: "white",
                padding: "5px",
                borderRadius: "5px",
              }}>
              Thanks, I,ll reply ASAP :)
            </span>
          )}
        </form>
        <div className='socialIcons'>
          <a
            href='https://www.linkedin.com/in/anton-amir-882b191ba/'
            target='_blank'
            rel='noreferrer'>
            <LinkedIn className='icon' />
          </a>
          <a href='https://github.com/toony10' target='_blank' rel='noreferrer'>
            <GitHub className='icon' />
          </a>
          <a
            href='https://wa.me/message/GM6TF62VR3CEM1'
            target='_blank'
            rel='noreferrer'>
            <WhatsApp className='icon' color='red' />
          </a>
        </div>
      </div>
    </div>
  );
}
