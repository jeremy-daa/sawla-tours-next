import styled from "styled-components";
import Danakil3 from "../assets/danakil_3.jpeg";
import Zebra1 from "../assets/zebra_1.jpg";
import Abay1 from "../assets/abay_1.jpg";
import { Link } from "react-router-dom";

const PlannerPolaroid = () => {
  const PlannerPolaroid = styled.div`
      &::after {
        background: url("${Zebra1}") no-repeat center;`;
  return (
    <PlannerPolaroid className="polaroid-parent inset-blurr">
      <h1 className="title">How to Plan Your Next Trip</h1>
      <div className="polaroid-container">
        <div className="polaroid">
          <img src={Danakil3} alt="planner" />
          <div>
            <h1 className="polaroid-title">1. Choose Your Destination</h1>
            <p className="polaroid-description">
              Research and identify potential destinations based on your
              preferences, interests, and travel goals.
              <br />
              <br />
              Explore our destination options, itineraries, and packages to
              gather information and ideas.
            </p>
          </div>
        </div>
        <div className="polaroid">
          <img src={Zebra1} alt="planner" />
          <div>
            <h1 className="polaroid-title">2. Itinerary Customization</h1>
            <p className="polaroid-description">
              Determining the duration of your trip and creating a rough
              itinerary outlining the activities and sights you wish to
              experience.
              <br />
              <br />
              You can customize your itinerary by selecting specific activities,
              accommodations, transportation options, and any additional
              services you may require.
            </p>
          </div>
        </div>
        <div className="polaroid">
          <img src={Abay1} alt="planner" />
          <div>
            <h1 className="polaroid-title">3. Booking and Logistics</h1>
            <p className="polaroid-description">
              Finalize your travel dates and make the necessary reservations for
              flights, accommodations, and transportation.
              <br />
              <br />
              We will handle all the logistics and ensure that your trip is well
              organized and hassle-free.
            </p>
          </div>
        </div>
        <br />
        <div
          className="span-100"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link className="polaroid-link offset" href="/ethiopia-guide/8">
            More on Planning
          </Link>
        </div>
      </div>
    </PlannerPolaroid>
  );
};

export default PlannerPolaroid;
