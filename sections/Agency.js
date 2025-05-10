import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Testimonial from "@/components/Testimonial";
import { Title, TitleSm } from "@/components/common/Title";

const Agency = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="ABOUT EYO Solutions" /> <br />
            <br />
            <Title
              title="We’re a full-stack technology company solving complex challenges through software innovation and data-driven solutions"
              className="title-bg"
            />
          </div>

          <div className="content flex1">
            <div className="left w-60 py">
              <TitleSm title="Who We Are" />
              <p className="misson-p">
                We are a leading technology company dedicated to transforming
                industries through cutting-edge software solutions, data-driven
                insights, and expert IT services. From government agencies to
                fast-growing startups, we help organizations harness the power
                of technology to improve lives, drive efficiency, and unlock new
                opportunities.
              </p>
              <div className="grid-3">
                <div className="box">
                  <h1 className="indigo">14+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">50+</h1>
                  <h3>Clients</h3>
                </div>
                <div className="box"></div>
              </div>
            </div>
            <div className="right w-40 ml">
              <img
                src="/images/eyo final-04.png"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <div className="content flex">
            <div className="left w-40 py">
              <img
                src="/images/db.png"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
            <div className="right w-60 ml">
              <TitleSm title="Our mission" />
              <br />
              <p className="misson-p">
                To build intelligent, scalable, and secure digital solutions
                that empower organizations to achieve their goals and positively
                impact the communities they serve.
              </p>
              <br />
              <TitleSm title="Our Story" />
              <br />
              <p className="misson-p">
                Founded 1over a decade on the belief that technology can be a
                force for good, we have grown from a small team of passionate
                developers into a trusted partner for businesses, governments,
                and NGOs across Africa and beyond. With years of experience in
                software development, system integration, FinTech solutions, and
                IT consultancy, we are proud to deliver projects that make a
                measurable difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Agency;
