import Image from "next/image";
import { BsInfoCircle } from "react-icons/bs";

interface Props {
  title: string;
  description?: string[];
  itineraries?: {
    title: string;
    description: string[];
    image: string;
  }[];
}

const ItineraryDescription = ({ title, description, itineraries }: Props) => {
  return (
    <div className="itinerary-wrapper">
      <h1 className="itinerary-heading">
        <BsInfoCircle />
        {title}
      </h1>
      {description && (
        <div className="itinerary-description">
          {description &&
            description.map((item, key) => <p key={key}>{item}</p>)}
        </div>
      )}
      {itineraries && (
        <div className="itinerary-list">
          {itineraries.map((item, index) => {
            return (
              <div className="itinerary-item" key={index}>
                <div className="itinerary-image-container">
                  <Image
                    src={item.image}
                    width={500}
                    height={500}
                    alt={item.title}
                  />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <ul>
                    {item.description.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ItineraryDescription;
