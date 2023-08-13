"use client";

import { useRef, useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { ToursByExperienceRoutes } from "@/data/PackagesArray";

const EnquireForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [numberOfTravelers, setNumberOfTravelers] = useState("");
  const [packageName, setPackageName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const errorRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  emailjs.init("JTzxPvCsq4pDOMoqv");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
    // check if number of travelers is less than 1 and an integer
    if (
      !Number.isInteger(Number(numberOfTravelers)) ||
      Number(numberOfTravelers) < 1
    ) {
      setError("Number of travelers must be a number greater than 0");
      errorRef.current?.scrollIntoView();
      document.getElementById("number-of-travelers")?.focus();
      return;
    } else {
      setError("");
    }
    if (error === "") {
      setName("");
      setEmail("");
      setPhone("");
      setArrivalDate("");
      setDepartureDate("");
      setNumberOfTravelers("");
      setPackageName("");
      setMessage("");
      if (formRef.current) {
        emailjs
          .sendForm("service_yfk6tf8", "template_fvk7fj7", formRef.current)
          .then(
            (result) => {
              if (result.text === "OK") {
                alert(
                  "Thank you for your enquiry. We will get back to you shortly."
                );
                if (formRef.current) formRef.current.reset();
              }
            },
            (error) => {
              alert(
                "Sorry, there was an error sending your enquiry. \nPlease try again later or email us at abc@gmail.com"
              );
              console.log(error.text);
            }
          );
      }
    }
  };
  return (
    <div className="inset-blurr enquire-wrapper">
      <div className="enquire-form-container">
        <h1 className="title">
          <BsInfoCircle />
          Ready to Book Your Trip?
        </h1>
        <h2 ref={errorRef}>
          Fill out the form below and we will get back to you as soon as
          possible.
        </h2>
        <form className="enquire-form" onSubmit={handleSubmit} ref={formRef}>
          <div className="enquire-form-error">{error && <p>{error}</p>}</div>
          <div className="enquire-form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>

          <div className="enquire-form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="enquire-form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              onChange={(e) => setPhone(e.target.value)}
              required
              value={phone}
            />
          </div>
          <div className="enquire-form-group">
            <label htmlFor="arrival-date">Arrival and Departure Date</label>
            <div className="arrival-departure-date">
              <input
                type="date"
                name="arrival-date"
                id="arrival-date"
                placeholder="Enter your arrival date"
                onChange={(e) => setArrivalDate(e.target.value)}
                value={arrivalDate}
              />
              <input
                type="date"
                name="departure-date"
                id="departure-date"
                placeholder="Enter your departure date"
                onChange={(e) => setDepartureDate(e.target.value)}
                value={departureDate}
              />
            </div>
          </div>
          <div className="enquire-form-group">
            <label htmlFor="number-of-travelers">Number of travelers</label>
            <input
              type="number"
              name="number-of-travelers"
              id="number-of-travelers"
              placeholder="Enter the number of travelers"
              onChange={(e) => setNumberOfTravelers(e.target.value)}
              required
              value={numberOfTravelers}
            />
          </div>
          <div className="enquire-form-group">
            <label htmlFor="package">Package</label>
            <select
              name="package"
              id="package"
              onChange={(e) => setPackageName(e.target.value)}
              required
              value={packageName}
            >
              <option value="" disabled>
                Select an option
              </option>
              ;
              {ToursByExperienceRoutes.map((item, key) => {
                return (
                  <option value={item.title} key={key}>
                    {item.title}
                  </option>
                );
              })}
              <option value="placeholder">Custom Package</option>
            </select>
          </div>

          <div className="enquire-form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message"
              onChange={(e) => setMessage(e.target.value)}
              required
              value={message}
            />
          </div>
          <button type="submit" className="offset">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquireForm;
