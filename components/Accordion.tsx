import LineBreak from "./LineBreak";

interface Props {
  title?: string;
  destinations: List[];
  concact?: boolean;
}
interface List {
  title: string;
  description?: string;
}
const Accordion = ({ destinations, title, concact }: Props) => {
  return (
    <div className="accordion-wrapper inset-blurr">
      <h2 className="accordion-title">{title}</h2>
      <ul className="accordion">
        {destinations.map((destination, index) => {
          return (
            <li key={index}>
              <input type="checkbox" name="accordion" id={destination.title} />
              <label htmlFor={destination.title}>
                {destination.title}{" "}
                {concact ? ` : ${destination.description}` : ""}
              </label>
              {!concact && destination.description && (
                <div className="content">
                  <p>
                    <LineBreak doubleBreak str={destination.description} />
                  </p>
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
