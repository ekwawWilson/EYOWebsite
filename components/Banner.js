import React from "react";
import { Title, TitleLogo } from "./common/Title";
import Link from "next/link";
import { useEffect, useState } from "react";

const Banner = () => {
  const [activeLink, setActiveLink] = useState("");
  return (
    <>
      <section className="banner">
        <div className="container">
          <div>
            <Title title="We hold ourselves to the highest standards, delivering quality work that exceeds expectations." />{" "}
            <br />
            <TitleLogo title="Lets take your business to the next level!" />
          </div>
          <div>
            <a
              href="https://wa.me/233246462398?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button-primary">Contact Our Team</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
