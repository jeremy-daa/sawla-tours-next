import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import ItineraryDescription from "@/components/ItineraryDescription";
import SimpleDescription from "@/components/SimpleDescription";
import Images from "@/data/Images";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "About Us - Sawla Tours",
  description: `We are Sawla Tours - a team of seasoned Ethiopian tourism professionals, united by passion and unparalleled industry knowledge. Our distinct blend of expertise and professionalism makes us your trustworthy compass in navigating the vast landscapes of Ethiopian adventures.`,
};
const page = () => {
  return (
    <div className="about">
      <Hero
        background={Images.lalibela8}
        index={false}
        title="About Us"
        link="#about"
        linkname="Explore"
      />
      <div id="about">
        <Intro
          title="Meet Sawla Tours"
          subtitle="Your Ethiopian Adventure Architects"
          description={[
            "We are Sawla Tours - a team of seasoned Ethiopian tourism professionals, united by passion and unparalleled industry knowledge. Our distinct blend of expertise and professionalism makes us your trustworthy compass in navigating the vast landscapes of Ethiopian adventures.",
            "As you journey with us, prepare to be immersed in Ethiopia's breathtaking beauty, crafting unforgettable experiences along the way. At Sawla, we pride ourselves on our exceptional service quality and accessibility - making us your one-stop solution for all travel inquiries. From arranging top-notch facilities to curating end-to-end services, we've got your travel needs covered.",
          ]}
          link="#why"
          button="Why Sawla Tours?"
          img1={Images.intro1}
          img2={Images.intro2}
          lr={true}
        />
      </div>
      <div id="why">
        <SimpleDescription
          title="Why Travel with Sawla Tours?"
          description={[
            {
              title: "1. Unparalleled Personal Service & Expertise",
              description: [
                "Our experienced expedition leaders provide firsthand knowledge and expert guidance at every step, ensuring a trip tailored to perfection. Count on our specialist travel consultants for insightful advice and meticulous planning.",
              ],
            },
            {
              title: "2. Genuine Passion",
              description: [
                "Our team's love for travel and unparalleled service makes each experience unique.",
              ],
            },
            {
              title: "3. Tailor-Made Holidays",
              description: [
                "Individual approach, unforgettable experiences. We celebrate your uniqueness and go above and beyond to design itineraries that surpass your expectations with unforgettable travel experiences. No two Sawla trips are the same and we take great pride in a bespoke approach, working with you to create your perfect trip.",
              ],
            },
            {
              title: "4. Total Flexibility",
              description: [
                "As a small, independent, family-owned business, we pride ourselves on accommodating changes to your booking, offering a level of flexibility larger operators simply can't match.",
              ],
            },
            {
              title: "5. Lightning-Fast Responses",
              description: [
                "Our Ethiopia travel specialists waste no time in addressing your inquiries and concerns. Expect prompt and efficient communication.",
              ],
            },
            {
              title: "6. Top-Notch Guides",
              description: [
                "Our handpicked guides are passionate about sharing their deep knowledge and love for Ethiopia. Prepare for an unforgettable journey with their expertise.",
              ],
            },
            {
              title: "7. Glowing Recommendations",
              description: [
                "With two-thirds of our bookings coming from repeat clients or referrals, our dedication to crafting unforgettable experiences speaks for itself.",
              ],
            },
            {
              title: "8. Responsible Travel",
              description: [
                "We are committed to preserving the incredible destinations we visit. By collaborating with NGOs, communities, and local representatives, we promote sustainable and conscious travel.",
              ],
            },
            {
              title: "9. Vivid Itineraries & Quotations",
              description: [
                "Your custom-designed trip will be presented in a visually appealing format, complete with country facts, maps, images, and transparent pricing details.",
              ],
            },
            {
              title: "10. Continuous Improvement",
              description: [
                "With years of experience, we continuously refine our offerings based on valuable client feedback, ensuring that every trip gets better and better. In-Depth Experience: Our extensive knowledge fulfills your desires, creating an unforgettable holiday.",
              ],
            },
          ]}
        />
      </div>
      <div id="how">
        <ItineraryDescription
          title="How we work"
          itineraries={[
            {
              title: "Our First Conversation",
              image: Images.hamer2,
              description: [
                "The first step in planning your adventure begins with an open and genuine conversation. We want to get to know you inside out. Tell us about your past travels, your unique preferences, your specific interests, and even your budget. By understanding who you are, we can determine if we're the perfect match for each other.",
              ],
            },
            {
              title: "Getting Down to Business",
              image: Images.benna1,
              description: [
                "Once we're ready to dive into the nitty-gritty, we'll establish your desired trip and set specific travel dates. We'll guide you through the optimal destinations based on the time of year and narrow down your options to precise regions and dates. Our meticulous approach ensures that every detail is taken into account.",
              ],
            },
            {
              title: "Creating Your Perfect Journey",
              image: Images.lalibela5,
              description: [
                "Crafting your perfect journey is our utmost priority. We carefully curate the safari lodges and hotels, determining the number of nights you should spend in each location and the activities that will make your heart soar. We'll also assist with flight arrangements, ensuring you have more time to immerse yourself in the breathtaking landscapes. Within one to two days, we'll provide you with a comprehensive itinerary and the proposed tour cost. Remember, this is just the beginning, and we can always refine the plan.",
              ],
            },
            {
              title: "Adding in the Little Details",
              image: Images.simien4,
              description: [
                "But it's the little details that truly make a difference. We'll help you select the best tours, dining options, and additional activities that will create indelible memories. Our personalized ideas and recommendations are tailored to your desires, ensuring an extraordinary journey. Once everything is in place, we'll confirm your accommodations, flights and others and request a deposit of 25% of the total trip cost. The final payment is due 60 days before your departure.",
              ],
            },
            {
              title: "Fleshing Things Out",
              image: Images.danakil2,
              description: [
                "If you feel the need to fine-tune your itinerary even further, we're here for you. We won't rest until you're completely satisfied with every aspect of your journey. Your contentment is our top priority.",
              ],
            },
            {
              title: "Your Trip Preparation",
              image: Images.bale1,
              description: [
                "As your departure date approaches, we'll send you a Preparation Package containing your itinerary, packing list, and other essential details. Four weeks before your trip, you'll receive the final itinerary, along with contact information for our dedicated personnel who will be there to assist you. We want you to feel secure and fully informed, so we'll provide e-tickets and copies of this information for your loved ones.",
              ],
            },
            {
              title: "Bon Voyage",
              image: Images.danakil3,
              description: [
                "When your adventure begins, rest assured that we'll be in constant communication with our contacts at each location, ensuring everything runs smoothly. We're only a phone call away if you need any assistance or have concerns during your journey. Bon voyage!",
              ],
            },
            {
              title: "When You Return",
              image: Images.abay1,
              description: [
                "Upon your return, we eagerly await your stories and feedback. Your candid input is invaluable to us, as it helps us enhance our service. We're honored that many of our travelers become repeat customers, and we hope you'll catch the travel bug and plan your next journey with us.",
              ],
            },
          ]}
        />
      </div>
      <div id="travel-specialists">
        <Intro
          title="Meet Our Travel Specialists"
          subtitle="Travel Maestros"
          description={[
            "Unveiling the wonders of Ethiopia, our team of travel specialists brings first-hand knowledge and an infectious love for exploration. Each member of our crew has dived deep into the heart of our destinations, ready to craft your dream holiday with precision, passion, and practical advice.",
            "We, at Sawla, share a common bond: an insatiable thirst for travel, a spirit of discovery, and an unwavering dedication to offering you an unmatched journey. Each of our experts carries a treasure chest of personal experiences, eagerly waiting to share their insights and make your journey truly unique.",
            "Our commitment is simple: your satisfaction. We take pride in designing memorable itineraries, handcrafted to align with your dreams. Each trip we curate not only offers expert guidance but also fosters a personal connection to the magical places we explore.",
            "The Sawla squad is always a phone call, an email, or a live chat away, ready to turn your dream holiday into reality and answer your every query. Eagerly awaiting your call, we invite you to take the leap into the mesmerizing world of Ethiopian adventures. So, what's keeping you? Let's start the journey together!",
          ]}
          img1={Images.intro3}
          img2={Images.mursi1}
          lr={false}
        />
      </div>
      <div id="guides">
        <Intro
          title="Meet Our Guides"
          subtitle="Unlock Ethiopia with Sawla Tours"
          description={[
            "At Sawla Tours, our guides are not just escorts - they are your personal storytellers, naturalists, and historians. These multilingual maestros accompany you, breathing life into every detail and sparking your spirit of discovery. With their depth of knowledge and the power of their narratives, your Ethiopian escapade becomes an enriching, memorable, and fun-filled adventure.",
            "They extend more than just individual attention – our guides' expertise helps to bridge the gap between you and your destinations, immersing you in a world of fascinating stories and intriguing facts. As your journey unfolds, you'll find these guiding lights becoming part of your travel family.",
            "In our quest to provide exceptional travel experiences, we collaborate with top-of-the-line private safari guides and reliable local experts. Their insider perspective enables us to open doors to extraordinary opportunities, taking you beyond the confines of typical travel.",
            "Get ready to explore Ethiopia like never before with Sawla Tours. Our guides are waiting to make your journey an unforgettable one.",
          ]}
          img1={Images.tigray3}
          img2={Images.lalibela9}
          lr={true}
        />
      </div>
      <div id="drivers">
        <Intro
          title="Meet Our Drivers"
          description={[
            "At Sawla Tours, our drivers aren't just wheelmen; they are the steady hands navigating your journey across Ethiopia's diverse terrains. Each with a driving experience ranging from seven to twenty years, they are seasoned navigators, adept at traversing every nook and corner of our country, in all weather conditions.",
            "Our drivers not only hold valid licenses but also undergo annual scrutiny of their driving records. To keep their skills sharp, we provide rigorous training each year, ensuring their expertise remains at the forefront of safe and efficient driving practices.",
            "But they are more than skilled drivers. Handpicked for their excellent communication abilities, our drivers are courteous, responsible, and honest. They are armed with local knowledge and a genuine passion for hospitality, making your ride not just comfortable, but also enlightening and enjoyable.",
            "So, buckle up and relax! With Sawla Tours, you're in good hands, steering your Ethiopian adventure toward unforgettable experiences.",
          ]}
          img1={Images.intro4}
          img2={Images.hamer1}
          lr={false}
        />
      </div>
      <div id="camping-crew">
        <Intro
          title="Meet Our Mobile Camp Crew!"
          subtitle="Join the Sawla Tours Outdoor Family"
          description={[
            "At Sawla Tours, we aren't just a crew – we are a tribe of outdoor lovers, bound by the allure of nature's beauty and adventure's thrill. Our team is a vibrant blend of seasoned hikers, campers, and wilderness enthusiasts, all fuelled by a shared passion for exploring the great outdoors.",
            "We celebrate diversity and foster inclusivity, crafting a warm and welcoming environment that transcends social boundaries. For us, the outdoors is an open playground where everyone is invited.",
            "Safety and satisfaction are our cornerstones. Our experienced guides and camp leaders boast robust training in wilderness survival, first aid, and emergency response. We ensure that our campsites are immaculate and adhere strictly to the 'Leave No Trace' principles, making sure we leave Mother Nature as untouched as we found her.",
            "Our wilderness offerings span a broad spectrum, from tranquil weekend getaways to extended nature expeditions. With activities like hiking, fishing, and kayaking, we cater to all, be it the seasoned camper or the curious newbie.",
            "Camping with Sawla is more than just an adventure – it's a journey towards reconnecting with nature, unplugging from the digital world, and forging enduring friendships. Our crew isn't just a team; it's a family that grows with every new member.",
          ]}
          img1={Images.chebera1}
          img2={Images.tigray1}
          lr={true}
        />
      </div>
    </div>
  );
};

export default page;
