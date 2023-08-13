interface Props {
  title?: string;
  description?: {
    title: string;
    description: string[];
  }[];
}

const SimpleDescription = ({ title, description }: Props) => {
  return (
    <div className="ethiopia-guide-wrapper">
      <div className="ethiopia-guide">
        <h2>{title}</h2>
        <ul>
          {description &&
            description.map((reason, index) => (
              <li key={index}>
                <span>{reason.title}</span>
                {reason.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SimpleDescription;
