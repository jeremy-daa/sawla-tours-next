import Image from "next/image";
interface Props {
  title?: string;
  description?: string;
  image?: string;
}

const Map = ({ title, description, image }: Props) => {
  return (
    <div className="map-container inset-blurr">
      <div className="map-description-container">
        <h1 className="map-title">{title}</h1>
        <p className="map-description">{description}</p>
      </div>
      <Image
        src={image ? image : ""}
        alt={title ? title : ""}
        className="map inset-blurr"
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default Map;
