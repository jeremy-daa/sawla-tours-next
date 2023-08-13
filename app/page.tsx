import Images from "./Data/Images";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero background={Images.lalibela5} index title="Home" link="#about" />
    </>
  );
}
