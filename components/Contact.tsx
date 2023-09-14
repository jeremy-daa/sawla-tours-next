"use client";
import { GoLocation } from "react-icons/go";
import { MdAlternateEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import Images from "@/data/Images";
// import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const style = {
    background: `url("${Images.simien1}")  no-repeat center center / cover`,
  };
  // emailjs.init("JTzxPvCsq4pDOMoqv");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const errorRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.length < 3) {
      setError("Name must be more than 3 characters");
      //go to error section and return
      errorRef.current?.scrollIntoView();
      document.getElementById("name")?.focus();
      return;
    } else {
      setError("");
    }
    if (!/^[0-9+-]+$/.test(phone)) {
      setError("Phone number must contain only numbers and + or -");
      errorRef.current?.scrollIntoView();
      document.getElementById("phone")?.focus();
      return;
    } else {
      setError("");
    }
    if (error === "") {
      setLoading(true);
      if (formRef.current) {
        // emailjs
        //   .sendForm("service_yfk6tf8", "template_adicuq9", formRef.current)
        //   .then(
        //     (result) => {
        //       if (result.text === "OK") {
        //         alert(
        //           "Thank you for your enquiry. We will get back to you shortly."
        //         );
        //         setName("");
        //         setEmail("");
        //         setPhone("");
        //         setMessage("");
        //         setLoading(false);
        //         if (formRef.current) formRef.current.reset();
        //       }
        //     },
        //     (error) => {
        //       alert(
        //         "Sorry, there was an error sending your enquiry. \nPlease try again later or email us at abc@gmail.com"
        //       );
        //       console.log(error.text);
        //       setLoading(false);
        //     }
        // );
        const data = {
          name,
          email,
          phone,
          message,
        };

        const res = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (res.ok) {
          alert(
            "Thank you for your feedback. We will get back to you shortly."
          );
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          setLoading(false);
          if (formRef.current) formRef.current.reset();
        }
        if (!res.ok) {
          alert(
            `Sorry, there was an error sending your enquiry. \nPlease try again later or email us at explore@sawlatours.com`
          );
          setLoading(false);
        }
      }
    }
  };
  return (
    <div className="contact-container inset-blurr">
      <div className="contact-box">
        <div className="left" style={style}>
          <div className="contact-info-wrapper">
            <h2 className="info-title">You Can Reach Us Through</h2>
            <div className="info">
              <GoLocation />

              <a href="https://goo.gl/maps/Hfv6dQPWspUmUYDA6">
                Addis Ababa, Ethiopia
              </a>
            </div>
            <div className="info">
              <MdAlternateEmail />
              <a href="mailto:explore@sawlatours.com">explore@sawlatours.com</a>
            </div>
            <div className="info">
              <BsTelephone />
              <a href="tel:+25170578306">+251 705 783 06</a>
            </div>
          </div>
        </div>
        <form className="right" ref={formRef} onSubmit={handleSubmit}>
          <h2>Contact Us</h2>
          <div className="enquire-form-error">{error && <p>{error}</p>}</div>

          <input
            type="text"
            name="name"
            className="field"
            placeholder="Name & Surname"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="email"
            className="field"
            placeholder="Email Address"
            required
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="text"
            name="phone"
            className="field"
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          <textarea
            placeholder="Message"
            className="field"
            required
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            name="message"
          ></textarea>
          <button type="submit" className="offset">
            {!loading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
