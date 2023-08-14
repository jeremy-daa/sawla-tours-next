import React from "react";
import { useState } from "react";

interface Props {
  title: string;
  description?: string[];
  itineraries?: {
    title: string;
    description: string[];
    image: string;
  }[];
}

const TrekkingDescription = ({ title, itineraries }: Props) => {
  const [expandedItineraries, setExpandedItineraries] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleExpand = (itineraryTitle: string) => {
    setExpandedItineraries((prevState) => ({
      ...prevState,
      [itineraryTitle]: !prevState[itineraryTitle],
    }));
  };

  const renderDescription = (description: string[]) => {
    return description.map((desc, index) => (
      <React.Fragment key={index}>
        {desc}
        {index < description.length - 1 && (
          <>
            <br />
            <br />
          </>
        )}
      </React.Fragment>
    ));
  };

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  const getFirstParagraph = (itineraryTitle: string) => {
    const itinerary =
      itineraries?.find((it) => it.title === itineraryTitle) ||
      (itineraries && itineraries[0]);
    if (itinerary && itinerary.description) {
      return truncateText(itinerary.description[0], 300).replace(
        /(<([^>]+)>)/gi,
        ""
      );
    }
    return "";
  };

  return (
    <div className="trekking-container">
      <h1>{title}</h1>
      {itineraries?.map((itinerary, index) => {
        const itineraryTitle = itinerary.title || title;
        return (
          <div key={index}>
            {itinerary.title && <h2>{itinerary.title}</h2>}
            <img src={itinerary.image} alt={itineraryTitle} />
            <p className="trekking-description">
              {expandedItineraries[itineraryTitle]
                ? renderDescription(itinerary.description)
                : getFirstParagraph(itineraryTitle)}
            </p>
            <label htmlFor={itineraryTitle} className="read-more-button">
              {expandedItineraries[itineraryTitle] ? "Read Less" : "Read More"}
            </label>
            <input
              id={itineraryTitle}
              type="checkbox"
              checked={expandedItineraries[itineraryTitle] || false}
              onChange={() => toggleExpand(itineraryTitle)}
              hidden
            />
          </div>
        );
      })}
    </div>
  );
};

export default TrekkingDescription;
