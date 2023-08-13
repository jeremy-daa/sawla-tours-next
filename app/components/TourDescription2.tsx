import Bale1 from "../assets/bale_1.jpg";
import styled from "styled-components";

interface Props {
  title: string;
  destinations: List[];
  description: string;
}
interface List {
  title: string;
  description: string;
}
const TourDescription2 = ({ title, description, destinations }: Props) => {
  const TourDescription = styled.div`
      &::after {
        background: url("${Bale1}") no-repeat center;`;
  return (
    <TourDescription className="descriptions-wrapper inset-blurr">
      <div className="description">
        <h1 className="description-title">{title}</h1>
        <p className="description-text">{description}</p>
      </div>
      {/* <Accordion destinations={destinations} /> */}
      <div className="destinations-list">
        <ul>
          {destinations.map((destination, index) => {
            return (
              <li key={index}>
                <span>{destination.title}</span>
                <p>{destination.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </TourDescription>
  );
};

export default TourDescription2;
