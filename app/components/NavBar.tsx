"use client";
import Logo from "../../public/assets/logo.png";
import LogoDark from "../../public/assets/logo_dark.png";
import { useEffect, useState } from "react";
import HeadRoom from "react-headroom";
import { CiMenuFries } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";
import { BsFillCaretDownFill } from "react-icons/bs";
import { RiCompass3Fill } from "react-icons/ri";
import {
  EthiopiaGuideRoutes,
  EthiopiaTourPackagesRoutes,
  TopDestinationsRoutes,
  ToursByExperienceRoutes,
} from "../Data/PackagesArray";
import Link from "next/link";
import NavLink from "./NavLink";
import Image from "next/image";

const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navChecked, setNavChecked] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  const handleNavToggle = () => {
    setNavChecked(!navChecked);
  };
  const toggleNavbar = () => {
    setNavOpen(!navOpen);
  };

  const closeNavbar = () => {
    setNavChecked(true);
    setNavOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeadRoom>
      <header className={scrollPosition > 150 ? "scrolled" : "original"}>
        <div className="logo" data-aos="fade-right">
          {scrollPosition > 150 ? (
            <Link href={"/"} onClick={closeNavbar}>
              <Image src={LogoDark} alt="Sawla Tours Logo" />
            </Link>
          ) : (
            <Link href={"/"}>
              <Image src={Logo} alt="Sawla Tours Logo" />
            </Link>
          )}
        </div>
        <input
          type="checkbox"
          checked={navOpen}
          onChange={toggleNavbar}
          id="nav_check"
          hidden
        />
        <nav data-aos="fade-left">
          <div className="logo">
            <Link href={"/"}>
              <Image src={Logo} alt="SawlaTours Logo" />
            </Link>
          </div>
          <ul>
            <li>
              <NavLink href="/" onClick={closeNavbar}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink href="ethiopia-tours" onClick={closeNavbar}>
                Ethiopia Tours <BsFillCaretDownFill className="down-icon" />
              </NavLink>
              <ul className="submenu">
                {EthiopiaTourPackagesRoutes.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link href={item.link}>{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              <NavLink href="top-destinations" onClick={closeNavbar}>
                Popular Destinations{" "}
                <BsFillCaretDownFill className="down-icon" />
              </NavLink>
              <ul className="submenu">
                {TopDestinationsRoutes.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link href={item.link}>{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              <NavLink href="tours-by-experience" onClick={closeNavbar}>
                Tours by Experiences{" "}
                <BsFillCaretDownFill className="down-icon" />
              </NavLink>
              <ul className="submenu">
                {ToursByExperienceRoutes.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link href={item.link}>{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              <NavLink href="ethiopia-guide" onClick={closeNavbar}>
                Ethiopia Guide
                <BsFillCaretDownFill className="down-icon" />
              </NavLink>
              <ul className="submenu">
                {EthiopiaGuideRoutes.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link href={item.link}>{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </li>

            <li>
              <NavLink href="about-us" onClick={closeNavbar}>
                About Us
                <BsFillCaretDownFill className="down-icon" />
              </NavLink>
              <ul className="submenu">
                <li>
                  <Link href="about-us/#about">About Sawla Tours</Link>
                </li>
                <li>
                  <Link href="about-us/#why">Why travel wit Sawla Tours</Link>
                </li>
                <li>
                  <Link href="about-us/#how">How we work</Link>
                </li>
                <li>
                  <Link href="about-us/#travel-specialists">
                    Sawla&apos;s Travel Specialist
                  </Link>
                </li>
                <li>
                  <Link href="about-us/#guides">Sawla&apos;s Guides</Link>
                </li>
                <li>
                  <Link href="about-us/#drivers">Sawla&apos;s Drivers</Link>
                </li>
                <li>
                  <Link href="about-us/#camping-crew">Our camping crew</Link>
                </li>
              </ul>
            </li>
            <li>
              <NavLink href="contact-us" onClick={closeNavbar}>
                Contact Us
              </NavLink>
            </li>
            <li className="enquire">
              <RiCompass3Fill />
              <NavLink href="enquire" onClick={closeNavbar}>
                Start Planning
              </NavLink>
            </li>
          </ul>
        </nav>
        <label
          htmlFor="nav_check"
          className="hamburger"
          onClick={handleNavToggle}
        >
          {navChecked ? <CiMenuFries /> : <CiCircleRemove className="close" />}
        </label>
      </header>
    </HeadRoom>
  );
};

export default NavBar;
