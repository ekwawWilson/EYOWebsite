import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import { HiOutlineArrowRight } from "react-icons/hi";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { blogdata } from "@/assets/data/dummydata";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TitleSm } from "./common/Title";
import {
  FaStethoscope,
  FaUniversity,
  FaBuilding,
  FaShoppingCart,
  FaBook,
  FaTruck,
  FaPlane,
  FaBolt,
} from "react-icons/fa";

const iconMap = {
  FaStethoscope: FaStethoscope,
  FaUniversity: FaUniversity,
  FaBuilding: FaBuilding,
  FaShoppingCart: FaShoppingCart,
  FaBook: FaBook,
  FaTruck: FaTruck,
  FaPlane: FaPlane,
  FaBolt: FaBolt,
};

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="industriescard-arrow next-arrow" onClick={onClick}>
      <RiArrowRightSLine size={25} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="industriescard-arrow prev-arrow" onClick={onClick}>
      <RiArrowLeftSLine size={25} />
    </div>
  );
}

const BlogCard = () => {
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
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1, dots: true },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1, dots: true },
      },
    ],
  };

  return (
    <section className="industriescard-section">
      <div className="industriescard-container">
        <h1 className="industriescard-title">Industries We Transform</h1>

        <Slider {...settings}>
          {blogdata.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div key={index} className="industriescard-item">
                <div className={`industriescard industriescard-${index % 4}`}>
                  <div className="industriescard-icon-wrapper">
                    <div className="industriescard-icon">
                      {IconComponent && <IconComponent size={24} />}
                    </div>
                  </div>
                  <h2 className="industriescard-name">{item.industry}</h2>
                  <p className="industriescard-desc">{item.description}</p>
                  <div className="industriescard-date">{item.path}</div>
                  <Link href="/#" className="industriescard-link">
                    Learn more{" "}
                    <HiOutlineArrowRight className="industriescard-link-icon" />
                  </Link>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default BlogCard;
