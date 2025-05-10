import React from "react";
import { Title } from "./common/Title";
import { expertise } from "@/assets/data/dummydata";
import { Card } from "./common/Card";

const Expertise = () => {
  return (
    <>
      <section className="expertise">
        <div className="container">
          <div className="heading-title">
            <Title title="Our Expertise" />
            <p>
              We combine deep technical knowledge with industry experience to
              deliver innovative, reliable, and scalable solutions. From
              software development and FinTech platforms to data analytics,
              system integration, and IT strategy, we help organizations
              transform challenges into opportunities and achieve measurable
              impact.
            </p>
          </div>
          <div className="hero-content grid-4">
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption="" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Expertise;
