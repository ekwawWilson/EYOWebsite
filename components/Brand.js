import React from "react";
import { Title } from "./common/Title";
import { technologies } from "@/assets/data/dummydata";

const Technologies = () => {
  return (
    <section className="technologies">
      <div className="container">
        <div className="heading-title">
          <Title title="TECHNOLOGIES & PLATFORMS WE USE" />
          <hr />
        </div>
        <div className="technologies-content grid-6 py">
          {technologies.map((item) => (
            <div className="tech-item" key={item.id}>
              <img src={item.icon} alt={item.name} width="60" height="60" />
              <p className="tech-name">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
