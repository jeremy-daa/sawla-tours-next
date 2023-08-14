import Link from "next/link";

interface Props {
  destination?: string;
  reasons?: {
    title: string;
    description: string[];
    image: string;
  }[];
}

const DestinationDescription = ({ destination, reasons }: Props) => {
  return (
    <div className="destination-reasons-wrapper">
      <h1>{destination}</h1>
      <div className="destination-reasons">
        {reasons?.map((reason, index) => (
          <div className="destination-reason" key={index}>
            <div
              className="reason-image"
              style={{ backgroundImage: `url(${reason.image})` }}
            ></div>

            <div className="reason-description">
              <h2>{reason.title}</h2>
              {reason.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Link href={"/enquire"} className="offset reason-button">
        Start Planning
      </Link>
    </div>
  );
};

export default DestinationDescription;
