"use client";
import { useState } from "react";
import useAOS from "../functions/useAOS";
import Link from "next/link";
import Image from "next/image";
interface Props {
  img1: string;
  img2: string;
  title?: string;
  description?: string[];
  button?: string;
  lr?: boolean;
  link?: string;
  subtitle?: string;
}

const Intro = (props: Props) => {
  const [width, setWidth] = useState(true);
  window.addEventListener("resize", () => {
    if (window.innerWidth < 500) {
      setWidth(false);
    } else {
      setWidth(true);
    }
  });
  const style = {
    transform: "translateX(50px)",
  };
  useAOS();
  return (
    <section id="about" className="home-intro">
      {props.lr ? (
        <div className="intro-container">
          <div className="intro-text">
            <h2 className="intro-heading">{props.title}</h2>
            <h2 className="intro-subheading">{props.subtitle}</h2>
            {props.description &&
              props.description.map((description, index) => (
                <p className="intro-description" key={index}>
                  {description}
                </p>
              ))}
            {props.button && (
              <Link
                className="offset"
                href={props.link ? props.link : "/tours-by-experience"}
              >
                {props.button}
              </Link>
            )}
          </div>
          <div className="intro-img">
            <Image
              src={props.img1}
              alt="Intro image"
              width={1000}
              height={1000}
            />
            <Image
              src={props.img2}
              alt="Intro image"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      ) : (
        <div className="intro-container">
          <div className="intro-img" style={width ? style : {}}>
            <Image
              src={props.img1}
              alt="Intro image"
              width={1000}
              height={1000}
            />
            <Image
              src={props.img2}
              alt="Intro image"
              width={1000}
              height={1000}
            />
          </div>
          <div className="intro-text">
            <h2 className="intro-heading">{props.title}</h2>
            <h2 className="intro-subheading">{props.subtitle}</h2>
            {props.description &&
              props.description.map((description, index) => (
                <p className="intro-description" key={index}>
                  {description}
                </p>
              ))}

            {props.button && (
              <a className="offset" href={props.link}>
                {props.button}
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Intro;
