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
  return (
    <div className="descriptions-wrapper inset-blurr">
      <div className="description">
        <h1 className="description-title">{title}</h1>
        <p className="description-text">{description}</p>
      </div>
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
    </div>
  );
};

export default TourDescription2;
