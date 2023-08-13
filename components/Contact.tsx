import { GoLocation } from "react-icons/go";
import { MdAlternateEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import Images from "@/data/Images";

const Contact = () => {
  const style = {
    background: `url("${Images.simien1}")  no-repeat center center / cover`,
  };
  return (
    <div className="contact-container inset-blurr">
      <div className="contact-box">
        <div className="left" style={style}>
          <div className="contact-info-wrapper">
            <h2 className="info-title">You Can Reach Us Through</h2>
            <div className="info">
              <GoLocation />

              <a href="https://maps.google.com/">Addis Ababa, Ethiopia</a>
            </div>
            <div className="info">
              <MdAlternateEmail />
              <a href="mailto:example@gmail.com">example@gmail.com</a>
            </div>
            <div className="info">
              <BsTelephone />
              <a href="tel:+251-911-111-111">+251-911-111-111</a>
            </div>
          </div>
        </div>
        <form className="right">
          <h2>Contact Us</h2>
          <input
            type="text"
            className="field"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            className="field"
            placeholder="Your Email"
            required
          />
          <input type="text" className="field" placeholder="Phone" />
          <textarea placeholder="Message" className="field" required></textarea>
          <button type="submit" className="offset">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
