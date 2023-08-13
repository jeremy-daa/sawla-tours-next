// react icon forwared arrow and back arrow
import "react-multi-carousel/lib/styles.css";

import Card from "./Card";

import "swiper/css";
import "swiper/css/effect-coverflow";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";

interface Props {
  title: string;
  description?: string;
  cards: Package[];
}
interface Package {
  image: string;
  title: string;
  description: string;
  link: string;
  days?: number;
}

const Slider = ({ title, description, cards }: Props) => {
  const [screenSize, setScreenSize] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newSize = true;

      if (width >= 570) {
        newSize = true;
      } else {
        newSize = false;
      }

      setScreenSize(newSize);
    };

    // Initial screen size check
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return screenSize ? (
    <div className="slider-wrapper">
      <h1 className="slider-title">{title}</h1>
      <h1 className="slider-title-description">{description}</h1>

      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={1000}
        centerMode
        pauseOnHover
        className="slider"
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        partialVisbile={false}
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1424,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 1000,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 0,
            slidesToSlide: 1,
          },
          tablet: {
            breakpoint: {
              max: 1424,
              min: 1000,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
              link={card.link}
              days={card.days}
            />
          );
        })}
      </Carousel>
    </div>
  ) : (
    <div className="slider-wrapper">
      <h1 className="slider-title">{title}</h1>
      <h1 className="slider-title-description">{description}</h1>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
              link={card.link}
              days={card.days}
            />
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
