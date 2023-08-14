interface Props {
  title?: string;
  destinations: List[];
}
interface List {
  title: string;
  description?: string;
}
const Accordion = ({ destinations, title }: Props) => {
  return (
    <div className="accordion-wrapper inset-blurr">
      <h2 className="accordion-title">{title}</h2>
      <ul className="accordion">
        {destinations.map((destination, index) => {
          return (
            <li key={index}>
              <input type="checkbox" name="accordion" id={destination.title} />
              <label htmlFor={destination.title}>{destination.title}</label>
              {destination.description && (
                <div className="content">
                  <p>{destination.description}</p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Accordion;
