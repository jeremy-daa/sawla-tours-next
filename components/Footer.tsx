import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsCaretRight,
} from "react-icons/bs";
import Logo from "../public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-column">
        <div className="footer-logo">
          <Link href="/">
            <Image src={Logo} alt="SawlaTours Logo" />
          </Link>
        </div>
        <div className="footer-contact">
          <h1 className="contact-us">
            <Link href={"/contact"}>Contact Us</Link>
          </h1>
          <ul>
            <li>
              <Link href="tel:+251911111111">+251 911 111 111</Link>
            </li>
            <li>
              <a href="mailto:sawlayours@gmail.com">Mail Us</a>
            </li>
            <li>
              <a href="https://goo.gl/maps/6Y5Z9Z7Z7Z7Z7Z7Z7">
                Addis Ababa, Ethiopia
              </a>
            </li>
          </ul>

          <h2 className="contact-us">Office Hours</h2>
          <ul>
            <li>
              <a href="/">Monday - Friday</a>
            </li>
            <li>
              <a href="/">8:00 AM - 5:00 PM</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-column">
        <div className="footer-links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <NavLink href="/">
                <BsCaretRight />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink href="/ethiopia-tours">
                <BsCaretRight />
                Ethiopia Tours
              </NavLink>
            </li>
            <li>
              <NavLink href="/top-destinations">
                <BsCaretRight />
                Ethiopia Top Destinations
              </NavLink>
            </li>

            <li>
              <NavLink href="/tours-by-experience">
                <BsCaretRight />
                Ethiopia Tours By Experiences
              </NavLink>
            </li>
            <li>
              <NavLink href="/about-us">
                <BsCaretRight />
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink href="/contact-us">
                <BsCaretRight />
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-column">
        <div className="footer-social">
          <h2>Follow Us</h2>
          <ul>
            <li>
              <a href="https://www.facebook.com/sawlatours">
                <BsFacebook /> <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/sawlatours">
                <BsInstagram /> <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/sawlatours">
                <BsTwitter /> <span>Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/sawlatours">
                <BsYoutube /> <span>YouTube</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
