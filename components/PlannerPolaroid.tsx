import Link from "next/link";
import Image from "next/image";
import Images from "../data/Images";
import Intro from "./Intro";

const PlannerPolaroid = () => {
  return (
    <>
      <Intro
        title="How Can We Help You Create an Extraordinary Ethiopian Adventure?"
        description={[
          "At Sawla Tours, we are passionate about turning your travel dreams into reality. With years of hands-on experience in crafting unforgettable journeys to Ethiopia, we are your go-to experts in deciding when to travel, where to explore, and what to discover.",
          "Whether you have a detailed itinerary in mind, seek professional advice, or simply don't know where to begin, we're eager to assist. Reach out to us today, and together, we'll create an extraordinary travel experience tailored just for you.",
        ]}
        img1={Images.danakil3}
        img2={Images.wollo1}
        button="Contact Us Now"
        link="/contact-us"
        lr={false}
        color={true}
      />
    </>
  );
};

export default PlannerPolaroid;
