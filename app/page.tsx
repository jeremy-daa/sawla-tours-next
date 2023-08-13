import Images from "./Data/Images";
import Hero from "./components/Hero";
import Intro from "./components/Intro";

export default function Home() {
  return (
    <>
      <Hero background={Images.lalibela5} index title="Home" link="#about" />
      <Intro
        img1={Images.intro1}
        img2={Images.intro2}
        title="Welcome to Sawla Tours"
        subtitle="Where Extraordinary Journeys Unfold"
        description={[
          "We're not just a travel company; we're your key to unlocking unforgettable adventures in the heart of Ethiopia, the mesmerizing jewel of Africa.",
          "Our mission? To unveil Ethiopia's enchanting magic, tailored uniquely to you. With us, travel is not a one-size-fits-all affair but a deeply personalized journey, sculpted around your desires, budget, and adventure spirit.",
        ]}
        lr
        button="About Us"
        link="/about-us"
      />
    </>
  );
}
