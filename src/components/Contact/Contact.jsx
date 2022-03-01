import "./contact.scss";
import { useState } from "react";
import { LinkedIn, Facebook, GitHub } from "@material-ui/icons";
export default function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className='contact' id='contact'>
      <div className='left'>
        <img src='assets/shake.svg' alt='' />
      </div>
      <div className='right'>
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Email' required />
          <textarea placeholder='Message' required></textarea>
          <button type='submit'>Send</button>
          {message && <span>Thanks, I,ll reply ASAP :)</span>}
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
            href='https://www.facebook.com/profile.php?id=100009154630898'
            target='_blank'
            rel='noreferrer'>
            <Facebook className='icon' />
          </a>
        </div>
      </div>
    </div>
  );
}
