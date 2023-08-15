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
  color?: boolean;
}

const Intro = (props: Props) => {
  return (
    <section id="about" className={"home-intro"}>
      {props.lr ? (
        <div className="intro-container">
          <div className="intro-text" data-aos="fade-left">
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
          <div className="intro-img" data-aos="fade-right">
            <Image
              src={props.img1}
              alt="Intro image"
              width={400}
              height={400}
            />
            <Image
              src={props.img2}
              alt="Intro image"
              width={400}
              height={400}
            />
          </div>
        </div>
      ) : (
        <div
          className={props.color ? "intro-container color" : "intro-container"}
        >
          <div className="intro-img" data-aos="fade-left">
            <Image
              src={props.img1}
              alt="Intro image"
              width={400}
              height={400}
            />
            <Image
              src={props.img2}
              alt="Intro image"
              width={400}
              height={400}
            />
          </div>
          <div className="intro-text" data-aos="fade-right">
            <h2
              className="intro-heading"
              style={
                props.color
                  ? {
                      color: "var(--light)",
                    }
                  : {}
              }
            >
              {props.title}
            </h2>
            <h2
              className="intro-subheading"
              style={
                props.color
                  ? {
                      color: "var(--light)",
                    }
                  : {}
              }
            >
              {props.subtitle}
            </h2>
            {props.description &&
              props.description.map((description, index) => (
                <p className="intro-description" key={index}>
                  {description}
                </p>
              ))}

            {props.button && (
              <a
                className="offset"
                href={props.link}
                style={
                  props.color
                    ? {
                        color: "var(--light)",
                      }
                    : {}
                }
              >
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
