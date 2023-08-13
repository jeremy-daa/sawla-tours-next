import { ImLocation2 } from "react-icons/im";
import Card from "./Card";
import { Link } from "react-router-dom";
import pickRandom from "../functions/pickRandom";
import cropString from "../functions/cropString";
interface Props {
  title1?: string;
  title2?: string;
  link?: string;
  packages?: Package[];
  id?: string;
}
interface Package {
  title: string;
  description: string;
  image: string;
  link: string;
  days?: number;
}

const IntroPackages = ({ title1, title2, link, packages, id }: Props) => {
  const random = pickRandom<Package>(packages ?? [], 3);
  return (
    <div className="experience-packages-wrapper" id={id}>
      <h2 className="packages-title" data-aos="fade-down">
        <ImLocation2 /> {title1}{" "}
        <Link href={`/${link}`} className="link">
          {title2}
        </Link>
      </h2>
      <div className="packages">
        {random.map((item) => (
          <Card
            className="package-card"
            image={item.image}
            title={item.title}
            description={cropString(item.description, 200)}
            link={item.link}
            days={item.days}
          />
        ))}
      </div>
    </div>
  );
};

export default IntroPackages;
