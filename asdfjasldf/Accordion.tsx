interface Props {
  destinations: List[];
}
interface List {
  title: string;
  description: string;
}
const Accordion = ({ destinations }: Props) => {
  return (
    <div className="accordion-wrapper">
      <ul className="accordion">
        {destinations.map((destination, index) => {
          return (
            <li key={index}>
              <input type="checkbox" name="accordion" id={destination.title} />
              <label htmlFor={destination.title}>{destination.title}</label>
              <div className="content">
                <p>{destination.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Accordion;
