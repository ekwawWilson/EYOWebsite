import { home } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import ShowCase from "@/components/ShowCase";
import Testimonial from "@/components/Testimonial";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import { BlogCard, Brand } from "@/components/router";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <TitleLogo title="EYO Solutions" caption="" className="logobg" />
          <h1 className="hero-title">Powering Innovation</h1>

          <div className="sub-heading">
            <TitleSm title="Software Development" /> <span>.</span>
            <TitleSm title="IT Consultancy" /> <span>.</span>
            <TitleSm title="Supply of IT Systems" />
          </div>
        </div>
      </section>
      <section className="hero-sec">
        <hr />
        <div className="container">
          <div className="heading-title">
            <Title title="We Build Scalable Tech for Real-World Impact" />
            <p>
              Your trusted partner in developing cutting-edge software,
              data-driven platforms, and digital solutions that deliver
              measurable results and Delivering high-performance, secure, and
              future-ready technology for organizations that dare to lead.
            </p>
          </div>
          <div className="hero-content grid-4 align-center">
            {home.map((item, i) => (
              <div className="box" key={item.id}>
                <span className="green">{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      <BlogCard />
      <Brand />
    </>
  );
};

export default Hero;
