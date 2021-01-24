import React from 'react';
import emailjs from 'emailjs-com';

import './Contact.css';
const Contact = () => {
  const sendEmailHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'gmail',
        'template_lyjwwrf',
        e.target,
        'user_idI7FU4iOiMqa7pQtNzuP'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div data-aos="zoom-out" id="contact" className="Contact">
      <h1>Curious to know more about me?</h1>
      <span className="Contact__message-span">Send me a message</span>
      <div className="Contact__container"  style={{ height: 500 }}>
        <form onSubmit={sendEmailHandler} >
          <div className="group">
            <input type="text" name="name" required />
            <span className="highlight" />
            <span className="bar" />
            <label>Name</label>
          </div>
          <div className="group">
            <input type="text" name="subject" required />
            <span className="highlight" />
            <span className="bar" />
            <label>Subject</label>
          </div>
          <textarea type="text" placeholder="Message" name="message" required />
            <input className="button3" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
