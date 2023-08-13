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
  const style = {
    background: `linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
    ),url("${background}") no-repeat fixed center center / cover`,
  };
  return (
    <div className="hero-wrap" style={style}>
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
