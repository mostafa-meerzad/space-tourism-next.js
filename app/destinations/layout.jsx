const DestinationLayout = ({ children }) => {
  return (
    <section className="destination-bg-img bg-img-config pt-32">
      <h1 className="title">
        <span className="titleNum">01</span>Pick your destination
      </h1>
      {children}
    </section>
  );
};

export default DestinationLayout;
