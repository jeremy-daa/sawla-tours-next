import Link from "next/link";
import crop from "../functions/cropString";
import Image from "next/image";

interface Props {
  className?: string;
  image: string;
  title: string;
  description: string;
  link: string;
  days?: number;
}

const Card = (props: Props) => {
  const cropString = crop;
  return (
    <div className={`card ${props.className}`} data-aos="fade-up">
      <div className="card-img">
        <Image src={props.image} alt={props.title} width={500} height={500} />
      </div>
      <div className="card-content">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{cropString(props.description, 300)}</p>
        <div className="card-bottom">
          {props.days ? (
            <span className="card-days">{props.days} Days</span>
          ) : null}
          <Link className="card-link offset" href={props.link}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
