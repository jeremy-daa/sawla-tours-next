import { BsInfoCircle } from "react-icons/bs";
import Link from "next/link";
import crop from "../functions/cropString";
import LineBreak from "./LineBreak";
import Image from "next/image";

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
        {props.packages.map((packageItem, index) => {
          return (
            <div className="package" key={index}>
              <h2 className="package-title">
                <LineBreak str={packageItem.title} />
              </h2>
              <div className="package-content">
                <div className="package-img">
                  <Image
                    src={packageItem.image}
                    alt="Package"
                    width={300}
                    height={300}
                  />
                </div>
                <p className="package-description">
                  {cropString(packageItem.description, 200)}
                </p>
                <div className="package-description-bottom">
                  {packageItem.days ? (
                    <p className="package-days">
                      <span>
                        {typeof packageItem.days === "string"
                          ? packageItem.days + " Day"
                          : packageItem.days + " Days"}
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
