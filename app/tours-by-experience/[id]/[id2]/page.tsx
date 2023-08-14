import NotFound from "@/app/404";
import Accordion from "@/components/Accordion";
import GenericGrid from "@/components/GenericGrid";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import ItineraryDescription from "@/components/ItineraryDescription";
import PlannerPolaroid from "@/components/PlannerPolaroid";
import { getItinerary } from "@/data/ExperiencesPackagesItineraryArray";
import { Metadata } from "next";
import React from "react";
type Params = {
  params: {
    id: string;
    id2: string;
  };
};
export function generateMetadata({ params: { id, id2 } }: Params): Metadata {
  const Itinerary = getItinerary(Number(id2), Number(id));

  return {
    title: Itinerary ? Itinerary.title + " - Sawla Tours" : "Not Found",
    description: Itinerary ? Itinerary.description : "Not Found",
  };
}
const page = ({ params: { id, id2 } }: Params) => {
  const itinerary = getItinerary(Number(id2), Number(id));

  return (
    <div>
      {itinerary ? (
        <>
          {itinerary.title && (
            <Hero
              title={itinerary.title}
              index={itinerary.index}
              background={itinerary.image}
              description={itinerary.description}
              link="/enquire"
            />
          )}
          {itinerary.intro[0] && (
            <Intro
              title={itinerary.intro[0].title}
              subtitle={itinerary.intro[0].subtitle}
              description={itinerary.intro[0].description}
              lr={itinerary.intro[0].lr}
              link={itinerary.intro[0].link}
              button={itinerary.intro[0].button}
              img1={itinerary.intro[0].img1}
              img2={itinerary.intro[0].img2}
            />
          )}
          <div id="destination-highlights">
            {itinerary.tourdescription2 &&
              itinerary.tourdescription2.map((tourdescription2, index) => (
                <>
                  <Accordion
                    key={index}
                    title={
                      index === 0
                        ? "Highlighted Destinations"
                        : "Itinerary at a Glance"
                    }
                    destinations={tourdescription2.destinations}
                  />
                </>
              ))}
          </div>
          {itinerary.itinerarydescription && (
            <ItineraryDescription
              title={itinerary.itinerarydescription.title}
              itineraries={itinerary.itinerarydescription.itineraries}
            />
          )}
          <PlannerPolaroid />
          <GenericGrid />
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default page;
