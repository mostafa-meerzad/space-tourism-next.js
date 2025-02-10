import React from "react";


const CrewLayout = ({ children }) => {
  return (
    <section className="crew-bg-img bg-img-config pt-32">
      <h1 className="title">
        <span className="titleNum">02</span>Meet your crew
      </h1>
      
      {children}
    </section>
  );
};

export default CrewLayout;
