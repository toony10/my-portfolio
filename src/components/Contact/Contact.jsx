import "./contact.scss";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { LinkedIn, GitHub, WhatsApp } from "@material-ui/icons";
import { TextField } from "@material-ui/core";
import { AiFillCheckCircle } from "react-icons/ai";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

export default function Contact() {
  const [open, setOpen] = useState(false);

  const form = useRef();

  const handleClose = () => {
    setOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

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
    setOpen(true);
  };

  return (
    <div className='contact' id='contact'>
      <div className='left'>
        <img src='assets/shake.svg' alt='' />
      </div>
      <div className='right'>
        <h2>Contact</h2>
        <form ref={form} onSubmit={sendEmail}>
          <TextField
            name='email'
            id='standard-basic'
            label='Email'
            variant='standard'
            required
            className='h-16 lg:h-12'
          />
          <TextField
            name='phone'
            id='standard-basic'
            label='Phone Number'
            className='h-16 lg:h-12'
            variant='standard'
          />
          <TextField
            name='msg'
            id='standard-basic'
            label='Message'
            variant='standard'
            multiline
            rows={4}
            required
          />
          <button type='submit' className='mt-5'>
            Send
          </button>
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
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'>
          <DialogContent>
            <DialogContentText id='alert-dialog-description' className='flex'>
              <AiFillCheckCircle
                className='m-auto mr-4 text-8xl lg:text-5xl'
                color='#0ca90ca6'
              />
              Your message has been sent successfully and I'll contact you soon.
              Thank you for your time :)
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
