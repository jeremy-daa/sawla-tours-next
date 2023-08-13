import Image from "next/image";
import { GridPackagesArray } from "../data/PackagesArray";
GridPackagesArray;
const GenericGrid = () => {
  const packages = GridPackagesArray;
  return (
    <div className="grid-packages-container">
      <div className="grid-packages m-0">
        {packages.map((item, index) => {
          return (
            <div className="grid-package" key={index}>
              <div className="grid-image-container">
                <Image
                  src={item.image}
                  alt="package"
                  className="grid-package-img"
                  width={500}
                  height={500}
                />
              </div>
              <div className="grid-package-description">
                <h1 className="grid-package-title">{item.title}</h1>
                <a href={item.link} className="offset grid-package-button">
                  Discover More
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GenericGrid;
