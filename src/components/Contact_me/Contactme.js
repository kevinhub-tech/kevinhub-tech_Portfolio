import React, { useRef, useState } from "react";
import "./Contactme.css";
import emailjs from "@emailjs/browser";
import phone from "../../images/phone-call.png";
import mail from "../../images/mail.png";
import location from "../../images/location.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Contactme() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gfq1sfs",
        "template_9gopenp",
        form.current,
        "yswlHZ5Vlaj-QCmIj"
      )
      .then(
        (result) => {
          toast(
            `Thank you for the submission! ${name} 
          🌟`,
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            }
          );
        },
        (error) => {
          console.log(error.text);
          toast("Oops! Something went wrong");
        }
      );
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact__me" id="contact">
      <h2 className="contactme__heading">Contact me</h2>
      <section className="container">
        <div className="contactme">
          <div className="contactme__left">
            <div className="contactme__info">
              <div className="icon">
                <img src={phone} alt="phone"></img>
              </div>
              <p>+959799120315</p>
            </div>
            <div className="contactme__info">
              <div className="icon">
                <img src={mail} alt="mail"></img>
              </div>
              <p>winkhantpaing32@gmail.com</p>
            </div>
            <div className="contactme__info">
              <div className="icon">
                <img src={location} alt="location"></img>
              </div>
              <p>Yangon, Myanmar</p>
            </div>
          </div>
          <div className="contactme__right">
            <form className="contactme__form" ref={form} onSubmit={sendEmail}>
              <div className="form__group">
                <label htmlFor="name">Your Name:</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  id="name"
                  name="user_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
              <div className="form__group">
                <label htmlFor="name">Your Email:</label>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  id="email"
                  name="user_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div className="form__group">
                <label htmlFor="message">Your Message:</label>
                <textarea
                  type="text"
                  placeholder="Enter Your Message"
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button className="submit__btn" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}

export default Contactme;
