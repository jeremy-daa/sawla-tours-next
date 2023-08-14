import Link from "next/link";
import Image from "next/image";
import { BsInfoCircle } from "react-icons/bs";
interface Props {
  title?: string;
  description: string[];
  image: string;
  link?: number;
}

const TourDescription = ({ title, description, image, link }: Props) => {
  return (
    <div className="tour-description-wrapper">
      <Image
        src={image ? image : ""}
        alt={title ? title : ""}
        className="tour-description-image"
        width={500}
        height={500}
      />
      <div className="tour-description">
        <h1 className="tour-description-title">
          <BsInfoCircle /> {title}
        </h1>
        <p className="tour-description-text">
          {description.map((paragraph, index) => (
            <span key={index}>
              {paragraph}
              <br />
              <br />
            </span>
          ))}
        </p>
        {link && (
          <Link
            href={`/tours-by-experience/${link}`}
            className="offset itinerary-link"
          >
            More on the Itinerary
          </Link>
        )}
      </div>
    </div>
  );
};

export default TourDescription;
