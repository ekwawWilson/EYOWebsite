import Link from "next/link";
import { TitleLogo } from "./Title";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="grid-4">
            <div className="logo">
              <TitleLogo title="EYOSOlutions" caption="" className="logobg" />
              <br />
              <span>
                Reach us <br /> Monday – Friday from 9 am to 6 pm
              </span>
              <br />
              <br />
              <h3>+233 246 462 398</h3>
              <br />
              <button className="button-primary">Request for quote</button>
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href="/">About us</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href="/">Software & Web Development</Link>
              </li>
              <li>
                <Link href="/">Branding & Creative Services</Link>
              </li>
              <li>
                <Link href="/"> IT Consultancy & Strategy</Link>
              </li>
              <li>
                <Link href="/">System Integration & Hardware Supply</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className="connect">
                <li>
                  <Link href="/">
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/"></Link>
                </li>
                <li>
                  <Link href="/"></Link>
                </li>
              </div>
            </ul>
          </div>
          <div className="legal connect py">
            <div className="text">
              <span>© 2025 EYO Solutions | ALL RIGHTS RESERVED.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
