import { GridPackagesArray } from "../Data/PackagesArray";
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
                <img
                  src={item.image}
                  alt="package"
                  className="grid-package-img"
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
