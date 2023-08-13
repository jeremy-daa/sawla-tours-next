import { Link } from "react-router-dom";
import Ertaale from "../assets/erta_ale_1.jpg";
const Planner = () => {
  return (
    <div className="planner-container">
      <h1 className="planner-title">How to Plan Your Trip</h1>
      <div className="planner">
        <div className="planner-item">
          <img className="planner-item-img" src={Ertaale} />
          <div>
            <h2 className="planner-item-title">1. Choose Your Destination</h2>
            <p className="planner-item-description">
              Research and identify potential destinations based on your
              preferences, interests, and travel goals. <br />
              <br />
              Explore our destination options, itineraries, and packages to
              gather information and ideas.
            </p>
          </div>
        </div>
        <div className="planner-item">
          <img className="planner-item-img" src={Ertaale} />
          <div>
            <h2 className="planner-item-title">2. Itinerary Customization</h2>
            <p className="planner-item-description">
              Determining the duration of your trip and creating a rough
              itinerary outlining the activities and sights you wish to
              experience. <br />
              <br />
              You can customize your itinerary by selecting specific activities,
              accommodations, transportation options, and any additional
              services you may require.
            </p>
          </div>
        </div>
        <div className="planner-item">
          <img className="planner-item-img" src={Ertaale} />
          <div>
            <h2 className="planner-item-title">3. Booking and Logistics</h2>
            <p className="planner-item-description">
              Finalize your travel dates and make the necessary reservations for
              flights, accommodations, and transportation. <br />
              <br />
              We will handle all the logistics and ensure that your trip is well
              organized and hassle-free.
            </p>
          </div>
        </div>
      </div>
      <Link href="/ethiopia-guide/how-to-plan">
        <button className="planner-btn offset">More on How to Plan</button>
      </Link>
    </div>
  );
};

export default Planner;
