import { BsInfoCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import crop from "../functions/cropString";
import LineBreak from "../components/LineBreak";
import { useState } from "react";

interface Props {
  title: string;
  description?: string;
  packages: Package[];
}

interface Package {
  title: string;
  description: string;
  link: string;
  image: string;
  days?: number | string;
}

const PackagesList = (props: Props) => {
  const [noFade, setNoFade] = useState(true);
  if (window.innerWidth < 768) {
    if (noFade) {
      setNoFade(false);
    }
  }
  const cropString = crop;
  return (
    <div className="package-list-container">
      <h1 className="title">
        <BsInfoCircle />
        <br className="title-hide" />
        <span>{props.title}</span>
        <p className="title-description">{props.description}</p>
      </h1>
      <div className="packages">
        {/* Map the pacages from props */}
        {props.packages.map((packageItem, index) => {
          return (
            <div
              className="package"
              key={index}
              data-aos={noFade ? "fade-up" : ""}
              data-aos-duration="2000"
            >
              <h2 className="package-title">
                <LineBreak str={packageItem.title} />
              </h2>
              <div className="package-content">
                <div className="package-img">
                  <img src={packageItem.image} alt="Package" />
                </div>
                <p className="package-description">
                  {cropString(packageItem.description, 200)}
                </p>
                <div className="package-description-bottom">
                  {packageItem.days ? (
                    <p className="package-days">
                      <span>
                        {
                          //if days is a string add day, else add days
                          typeof packageItem.days === "string"
                            ? packageItem.days + " Day"
                            : packageItem.days + " Days"
                        }
                      </span>
                    </p>
                  ) : (
                    ""
                  )}
                  <Link className="package-link offset" href={packageItem.link}>
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PackagesList;
