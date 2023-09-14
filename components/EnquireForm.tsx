"use client";

import { useRef, useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
// import emailjs from "@emailjs/browser";
import { ToursByExperienceRoutes } from "@/data/PackagesArray";

const EnquireForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [numberOfTravelers, setNumberOfTravelers] = useState("");
  const [packageName, setPackageName] = useState("");
  const [destination, setDestination] = useState("");
  const [accommodation, setAccommodation] = useState("");
  const [activities, setActivities] = useState("");
  const [budget, setBudget] = useState("");
  const [currency, setCurrency] = useState("");
  const [hearAboutUs, setHearAboutUs] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const errorRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // emailjs.init("JTzxPvCsq4pDOMoqv");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
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
      if (formRef.current) {
        // emailjs
        //   .sendForm("service_yfk6tf8", "template_fvk7fj7", formRef.current)
        //   .then(
        //     (result) => {
        //       if (result.text === "OK") {
        //         alert(
        //           "Thank you for your enquiry. We will get back to you shortly."
        //         );
        //         if (formRef.current) formRef.current.reset();
        //       }
        //     },
        //     (error) => {
        //       alert(
        //         "Sorry, there was an error sending your enquiry. \nPlease try again later or email us at abc@gmail.com"
        //       );
        //       console.log(error.text);
        //     }
        //   );
        const data = {
          name,
          email,
          phone,
          arrivalDate,
          departureDate,
          numberOfTravelers,
          packageName,
          destination,
          accommodation,
          activities,
          budget,
          currency,
          hearAboutUs,
          message,
        };
        const res = await fetch("/api/enquire", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (res.ok) {
          alert("Thank you for your enquiry. We will get back to you shortly.");
          setName("");
          setEmail("");
          setPhone("");
          setArrivalDate("");
          setDepartureDate("");
          setNumberOfTravelers("");
          setPackageName("");
          setDestination("");
          setAccommodation("");
          setActivities("");
          setBudget("");
          setCurrency("");
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
    <div className="inset-blurr enquire-wrapper">
      <div className="enquire-form-container">
        <h1 className="title">
          <BsInfoCircle />
          Ready to Book Your Trip?
        </h1>
        <h2 ref={errorRef}>
          If you want to talk to us about your travel plans, please share as
          much information as you can
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
            <label htmlFor="destination">Destination Preference</label>
            <input
              type="text"
              name="destination"
              id="destination"
              placeholder="Enter your destination preference"
              onChange={(e) => setDestination(e.target.value)}
              value={destination}
            />
          </div>
          <div className="enquire-form-group">
            <label htmlFor="accommodation">
              Transportation & Accommodation Preference
            </label>
            <input
              type="text"
              name="accommodation"
              id="accommodation"
              placeholder="Enter your accommodation preference"
              onChange={(e) => setAccommodation(e.target.value)}
              value={accommodation}
            />
          </div>
          {/* •	Desired Activities & Experiences  */}
          <div className="enquire-form-group">
            <label htmlFor="activities">Activities & Experiences</label>
            <input
              type="text"
              name="activities"
              id="activities"
              placeholder="Enter your desired activities & experiences"
              onChange={(e) => setActivities(e.target.value)}
              value={activities}
            />
          </div>

          <div className="enquire-form-group">
            <label htmlFor="budget">Budget Range</label>
            <div className="arrival-departure-date">
              <input
                type="number"
                name="budget"
                id="budget"
                placeholder="Enter your budget"
                onChange={(e) => setBudget(e.target.value)}
                value={budget}
              />
              <select
                name="currency"
                id="currency"
                onChange={(e) => setCurrency(e.target.value)}
                value={currency}
              >
                <option value="ETB">ETB</option>
                <option value="USD">USD</option>
                <option value="CAD">CAD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="AUD">AUD</option>
                <option value="NZD">NZD</option>
                <option value="INR">INR</option>
                <option value="JPY">JPY</option>
                <option value="CNY">CNY</option>
              </select>
            </div>
          </div>
          <div className="enquire-form-group">
            <label htmlFor="hear-about-us">Where did you hear about us?</label>
            <select
              name="hear-about-us"
              id="hear-about-us"
              onChange={(e) => setHearAboutUs(e.target.value)}
              value={hearAboutUs}
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="Internet">Internet (Google, Bing, etc.)</option>
              <option value="Social Media">Social Media</option>
              <option value="Printed Advert">Printed Advert</option>
              <option value="Refferal">Referral</option>
              <option value="Other">Other</option>
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
            {!loading ? "Send" : "Sending..."}
          </button>
          <div className="confidentiality-statement">
            <p>
              We value your trust and assure you that your information will be
              kept confidential. Thank you for considering us for your travel
              needs. We look forward to helping you explore the world in comfort
              and style!
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquireForm;
