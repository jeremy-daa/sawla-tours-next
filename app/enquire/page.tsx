import EnquireForm from "@/components/EnquireForm";
import Hero from "@/components/Hero";
import Images from "@/data/Images";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Booking & Enquiry - Sawla Tours",
  description: `We are here to help you plan your next trip to Ethiopia. Please fill out the form below and we will get back to you as soon as possible.`,
};
const page = () => {
  return (
    <div>
      <Hero
        title="Enquire"
        description="We are here to help you plan your next trip to Ethiopia. Please fill out the form below and we will get back to you as soon as possible."
        index={false}
        background={Images.simien5}
      />
      <EnquireForm />
    </div>
  );
};

export default page;
