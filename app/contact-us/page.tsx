import Contact from "@/components/Contact";
import ContactMap from "@/components/ContactMap";
import Hero from "@/components/Hero";
import Images from "@/data/Images";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Contact Us - Sawla Tours",
  description: `What would you like to know? We are here to help.`,
};
const page = () => {
  return (
    <div className="contact">
      <Hero
        title="Contact Us"
        description="What would you like to know? We are here to help."
        background={Images.omo1}
        index={false}
      />
      <ContactMap />
      <Contact />
    </div>
  );
};

export default page;
