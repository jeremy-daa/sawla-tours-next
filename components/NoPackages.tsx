const NoPackages = () => {
  return (
    <div className="nopackages">
      <h1 className="nopackages-title">
        Hmm, we couldn&apos;t find any destination that match your search.
      </h1>
      <h2 className="nopackages-subtitle">
        No worries, we can still help you plan your trip. Just click the button
        below to get started.
      </h2>
      <a href="/contact" className="nopackages-button offset">
        Start Planning
      </a>
    </div>
  );
};

export default NoPackages;
