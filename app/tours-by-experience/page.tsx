import GenericGrid from "@/components/GenericGrid";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import PackagesGrid from "@/components/PackagesGrid";
import PlannerPolaroid from "@/components/PlannerPolaroid";
import Images from "@/data/Images";
import { ToursByExperienceArray } from "@/data/PackagesArray";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Itineraries By Experience - Sawla Ethiopia Tours",
  description:
    "Your pathfinder to extraordinary Ethiopian experiences. As seasoned experts, we pair passion with decades of local knowledge to create tours as unique as you.",
};
const page = () => {
  const packages = ToursByExperienceArray.map((item) => {
    return {
      title: item.title,
      image: item.image,
      link: item.link,
    };
  });
  const TopToursByExperience = ToursByExperienceArray.sort(
    () => 0.5 - Math.random()
  ).slice(0, 5);

  return (
    <article>
      <Hero
        title="Itineraries By Experience"
        index={false}
        background={Images.wollo1}
        description="Your pathfinder to extraordinary Ethiopian experiences"
        link="/enquire"
      />
      <Intro
        title="Your pathfinder to extraordinary Ethiopian experiences"
        subtitle="Itineraries By Experience"
        description={[
          "As seasoned experts, we pair passion with decades of local knowledge to create tours as unique as you.",
          "With Sawla, every journey unfolds countless possibilities. Relish the richness of history, the depth of tribal cultures, the pulsating vibe of festivals, the adrenaline of adventures, and the beauty of Ethiopian landscapes – all tailored to your tastes.",
        ]}
        lr
        link="#top-tours"
        button="Top Itineraries By Experience"
        img1={Images.lalibela4}
        img2={Images.yemata1}
      />
      {/* <section id="top-tours">
        <Slider
          title="Top Itineraries By Experience"
          description="We've curated our top Itineraries By Experience to help you find the perfect match."
          cards={TopToursByExperience}
        />
      </section> */}
      <Intro
        title="A Tour for every taste"
        subtitle="What's your travel style?"
        description={[
          "Are you a history buff? Our Historic Tours reveal ancient wonders. If cultural immersion is your calling, Tribal Tours will immerse you in Ethiopia's diverse societies.  ",
          "For festival lovers, our Festival Tours offer vibrant celebrations, while our Adventure Tours test your mettle in the wild.",
          "Photographers can capture breathtaking vistas in our Photography Tours, and nature enthusiasts will love our Birding and Wildlife Tours.",
        ]}
        lr={false}
        link="#top-tours"
        button="Top Itineraries By Experience"
        img1={Images.lalibela4}
        img2={Images.yemata1}
      />
      <PackagesGrid
        title="Our Itineraries By Experience"
        placeholder="Search by experience"
        packages={packages}
      />

      <PlannerPolaroid />
      <GenericGrid />
    </article>
  );
};

export default page;
