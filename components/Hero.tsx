import Image from "next/image";
interface Props {
  background?: string;
  index?: boolean;
  title?: string;
  description?: string;
  link?: string;
  linkname?: string;
}

const Hero = ({
  background,
  index,
  title,
  description,
  link,
  linkname,
}: Props) => {
  return (
    <div
      className="hero-wrap"
      style={{
        position: "relative",
        width: "100%",
        background: `linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.1),
          rgba(0, 0, 0, 0.1)
        )`,
      }}
    >
      <Image
        src={background ? background : ""}
        alt={title ? title : ""}
        width={1000}
        height={1000}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(0.75)",
        }}
      />
      {index ? (
        <div className="home-hero" data-aos="fade-up">
          <h1 className="heading">Embark on Extraordinary Journeys with us!</h1>
          <h3 className="heading-description">
            Creating memories that will last a lifetime
          </h3>
          {link ? (
            <a className="offset" href="#about">
              Explore
            </a>
          ) : null}
        </div>
      ) : (
        <div className="other-hero" data-aos="fade-up">
          <div className="hero-description">
            <h1 className="heading">{title}</h1>
            <h3 className="heading-description">{description}</h3>
            {link ? (
              <a className="offset" href={link}>
                {linkname ? linkname : "Start Planning"}
              </a>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
