import React from "react";
import Link from "next/link";
import { testimonial } from "@/assets/data/dummydata";
import { HiOutlineArrowRight } from "react-icons/hi";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { TitleSm } from "./common/Title";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrow next-arrow" onClick={onClick}>
      <RiArrowRightSLine size={25} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrow prev-arrow" onClick={onClick}>
      <RiArrowLeftSLine size={25} />
    </div>
  );
}

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="testimonial">
      <div className="testimonial-container">
        <h1 className="testimonial-title">WHY CHOOSE US</h1>

        <Slider {...settings}>
          {testimonial.map((user, index) => (
            <div key={index} className="testimonial-card-wrapper">
              <div className="testimonial-card">
                <div className="testimonial-header">
                  <img
                    src={user.cover}
                    alt={user.name}
                    className="testimonial-image"
                  />
                  <div>
                    <h1 className="testimonial-name">{user.name}</h1>
                    <span className="testimonial-post">{user.post}</span>
                  </div>
                </div>
                <p className="testimonial-desc">{user.desc}</p>
                <Link href="/#" className="testimonial-link"></Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
