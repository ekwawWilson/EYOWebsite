import Link from "next/link";
import { TitleSm } from "./Title";
import { HiOutlineArrowRight } from "react-icons/hi";

export const Card = ({ data, caption, show, path }) => {
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={data.cover} alt={data.title} />
        </div>
        <div className="card-details">
          <Link href="#" className="title-link">
            <TitleSm title={data.title} />
          </Link>
          {caption && (
            <Link href={`/${path}`}>
              {caption} <HiOutlineArrowRight className="link-icon" />
            </Link>
          )}
          <hr />
          <div className="flex">
            <span> {data.catgeory} </span>{" "}
            {data.date && <span> / {data.date}</span>}
          </div>

          {show && (
            <div>
              <p>{data.desc1}</p>
              <ul>
                {data.desc.map((text, i) => (
                  <li key={i}>
                    {" "}
                    <p>✅ {text.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
