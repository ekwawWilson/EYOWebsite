import Link from "next/link";
import { TitleLogo } from "./Title";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);

  const router = useRouter();
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <Link href="/">
              <TitleLogo title="EYO SOLUTIONS" caption="" className="logomin" />
            </Link>
          </div>
          <nav
            className={open ? "openMenu" : "closeMenu"}
            onClick={() => setOpen(null)}
          >
            <Link
              href="/"
              className={activeLink == "/" ? "activeLink" : "none"}
            >
              Home
            </Link>
            <Link
              href="/agency"
              className={activeLink == "/agency" ? "activeLink" : "none"}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className={activeLink == "/services" ? "activeLink" : "none"}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={activeLink == "/contact" ? "activeLink" : "none"}
            >
              Contact
            </Link>
            <button className="button-primary">Let’s Build Together</button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
