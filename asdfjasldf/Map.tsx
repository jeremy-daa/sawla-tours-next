import styled from "styled-components";

interface Props {
  title?: string;
  description?: string;
  image?: string;
}

const Map = ({ title, description, image }: Props) => {
  const Map = styled.div`
      &::after {
        background: url("${image}") no-repeat center;`;
  return (
    <Map className="map-container inset-blurr">
      <div className="map-description-container">
        <h1 className="map-title">{title}</h1>
        <p className="map-description">{description}</p>
      </div>
      <img src={image} alt={title} className="map inset-blurr" />
    </Map>
  );
};

export default Map;
