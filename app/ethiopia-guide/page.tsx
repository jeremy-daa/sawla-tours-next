import GenericGrid from "@/components/GenericGrid";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import PackagesList from "@/components/PackagesList";
import PlannerPolaroid from "@/components/PlannerPolaroid";
import { EthiopiaGuideArray } from "@/data/PackagesArray";

import Images from "@/data/Images";
import { Metadata } from "next";
import React from "react";
import Accordion from "@/components/Accordion";
export const metadata: Metadata = {
  title: "Ethiopia Tour Themes - Sawla Tours",
  description: `Bespoke Ethiopian Expeditions. Anywhere in Ethiopia. The journey themes you witness on our platform serve merely as an appetizer to the grand banquet of travel experiences we're capable of orchestrating. It's just a glimpse of what Sawla can offer. With a treasure trove of experience in crafting exceptional Ethiopian journeys, our team is ready to design an unforgettable adventure just for you. Every journey is unique, just like you, and always with a positive spin.`,
};
const page = () => {
  return (
    <div>
      <Hero
        title="Ethiopia Guide"
        description="Explore the best of Ethiopia with our expert guides."
        background={Images.danakil2}
        link="/enquire"
        linkname="Start Planning"
        index={false}
      />
      <Intro
        title={"Why Ethiopia is a Special travel place for travelers "}
        description={[
          "Ethiopia isn't just a travel destination; it's a journey of discovery, a realm of extraordinary experiences waiting to unfold. Dive in and discover why Ethiopia is an adventurer's paradise, a historian's dream, and a culture enthusiast's delight.",
        ]}
        img1={Images.yemata1}
        img2={Images.lalibela5}
        button="Start your journey"
        lr={false}
        link="/enquire"
      />
      {/* <div className="ethiopia-guide-wrapper">
        <div className="ethiopia-guide">
          <h2>Why should you visit Ethiopia?</h2>
          <ul>
            <li>
              <span>Rich cultural heritage</span>Ethiopia is home to a diverse
              range of ethnic groups, each with their own unique traditions and
              customs.
            </li>
            <li>
              <span>Historic sites</span>Ethiopia has a rich history dating back
              to ancient times, with notable sites such as the ancient city of
              Axum and the rock-hewn churches of Lalibela.
            </li>
            <li>
              <span>Stunning landscapes</span>From the Danakil Depression to the
              Simien Mountains, Ethiopia boasts breathtaking natural scenery
              that will leave travelers in awe.
            </li>

            <li>
              <span>Unique wildlife</span>Ethiopia is home to a variety of
              unique wildlife, including the Ethiopian wolf and the Gelada
              baboon.
            </li>
            <li>
              <span>Coffee culture</span>Ethiopia is the birthplace of coffee,
              and traveling here provides an opportunity to experience the
              country&apos;s rich coffee culture firsthand.
            </li>
            <li>
              <span>Religious pilgrimage sites</span>Ethiopia is a deeply
              religious country, with numerous pilgrimage sites such as the Axum
              Tsion, the Rock Churches of Lalibela, Debre Berhan Selassie
              Church, and the Sof Omar Cave.
            </li>
            <li>
              <span>Culinary Delights</span>Indulge in Ethiopia&apos;s unique
              cuisine, a fusion of flavors and spices that sets every
              foodie&apos;s heart alight.
            </li>
            <li>
              <span>Warm hospitality</span>Ethiopians are known for their warm
              and welcoming nature, making travelers feel at home.
            </li>
            <li>
              <span>Trekking opportunities</span>Ethiopia offers numerous
              opportunities for trekking, including community trekking in Tigray
              and Wollo, the Simien Mountains, and Bale Mountains National Park.
            </li>
            <li>
              <span>Colorful markets</span>Experience the bustle of
              Ethiopia&apos;s vibrant markets, a sensory delight reflecting the
              country&apos;s rich daily life.
            </li>
            <li>
              <span>Festivals</span>Ethiopia is home to a variety of festivals
              throughout the year, including the Timkat festival and the Meskel
              festival.
            </li>
          </ul>
        </div>
      </div> */}
      <Accordion
        title="Why should you visit Ethiopia?"
        destinations={[
          {
            title: "Rich cultural heritage",
            description:
              "Ethiopia is home to a diverse range of ethnic groups, each with their own unique traditions andcustoms.",
          },
          {
            title: "Historic sites",
            description:
              "Ethiopia has a rich history dating back to ancient times, with notable sites such as the ancient city of Axum and the rock-hewn churches of Lalibela.",
          },
          {
            title: "Stunning landscapes",
            description:
              "From the Danakil Depression to the Simien Mountains, Ethiopia boasts breathtaking natural scenery that will leave travelers in awe.",
          },
          {
            title: "Unique wildlife",
            description:
              "Ethiopia is home to a variety of unique wildlife, including the Ethiopian wolf and the Gelada baboon.",
          },
          {
            title: "Coffee culture",
            description:
              "Ethiopia is the birthplace of coffee, and traveling here provides an opportunity to experience the country's rich coffee culture firsthand.",
          },
          {
            title: "Religious pilgrimage sites",
            description:
              "Ethiopia is a deeply religious country, with numerous pilgrimage sites such as the Axum Tsion, the Rock Churches of Lalibela, Debre Berhan Selassie Church, and the Sof Omar Cave.",
          },
          {
            title: "Culinary Delights",
            description:
              "Indulge in Ethiopia's unique cuisine, a fusion of flavors and spices that sets every foodie's heart alight.",
          },
          {
            title: "Warm hospitality",
            description:
              "Ethiopians are known for their warm and welcoming nature, making travelers feel at home.",
          },
          {
            title: "Trekking opportunities",
            description:
              "Ethiopia offers numerous opportunities for trekking, including community trekking in Tigray and Wollo, the Simien Mountains, and Bale Mountains National Park.",
          },
          {
            title: "Colorful markets",
            description:
              "Experience the bustle of Ethiopia's vibrant markets, a sensory delight reflecting the country's rich daily life.",
          },
          {
            title: "Festivals",
            description:
              "Ethiopia is home to a variety of festivals throughout the year, including the Timkat festival and the Meskel festival.",
          },
        ]}
      />
      <PackagesList
        title={"More on Guide to Ethiopia"}
        packages={EthiopiaGuideArray}
      />
      <PlannerPolaroid />
      <GenericGrid />
    </div>
  );
};

export default page;
