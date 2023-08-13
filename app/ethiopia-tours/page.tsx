import GenericGrid from "@/components/GenericGrid";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import PackagesList from "@/components/PackagesList";
import PlannerPolaroid from "@/components/PlannerPolaroid";
import Images from "@/data/Images";
import { EthiopiaTourPackagesArraySimplified } from "@/data/PackagesArray";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Ethiopia Tour Themes - Sawla Tours",
  description: `Bespoke Ethiopian Expeditions. Anywhere in Ethiopia. The journey themes you witness on our platform serve merely as an appetizer to the grand banquet of travel experiences we're capable of orchestrating. It's just a glimpse of what Sawla can offer. With a treasure trove of experience in crafting exceptional Ethiopian journeys, our team is ready to design an unforgettable adventure just for you. Every journey is unique, just like you, and always with a positive spin.`,
};
const page = () => {
  return (
    <div>
      <Hero
        title="Ethiopia Tour Themes"
        index={false}
        background={Images.simien2}
        description="Bespoke Ethiopian Expeditions"
        link="/enquire"
      />
      <Intro
        title="Bespoke Ethiopian Expeditions"
        subtitle="Anywhere in Ethiopia"
        description={[
          "The journey themes you witness on our platform serve merely as an appetizer to the grand banquet of travel experiences we're capable of orchestrating. It's just a glimpse of what Sawla can offer. With a treasure trove of experience in crafting exceptional Ethiopian journeys, our team is ready to design an unforgettable adventure just for you. Every journey is unique, just like you, and always with a positive spin.",
          "Brimming with love for Ethiopia, equipped with vast knowledge, and teamed with top-notch safari guides and trusted local pros, we don't just do travel - we redefine it.",
        ]}
        img1={Images.gonder2}
        img2={Images.axum1}
        button="Explore the Possibilities"
        link="#tours"
        lr={true}
      />
      <div className="ethiopia-tours-wrapper">
        <PackagesList
          title="Ethiopia Tour Theme Packages"
          packages={EthiopiaTourPackagesArraySimplified}
          description="Dive into uncharted territories and wilderness, be part of meaningful conservation efforts, elevate your travel dreams in untouched spots, and soak in genuine cultural moments."
        />
      </div>
      <PlannerPolaroid />
      <GenericGrid />
    </div>
  );
};

export default page;
