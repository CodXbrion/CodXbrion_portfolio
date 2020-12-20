import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/images/codx-w-logo.png";
import {
  AiFillHome,
  AiFillGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineClose,
  AiFillProject,
} from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import { SiHashnode } from "react-icons/si";
import { MdContacts } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { TimelineLite, Bounce, Sine, Power2 } from "gsap";

function Navbar() {
  let tl = new TimelineLite({ delay: 0.3 });

  useEffect(() => {
    tl.from(".menu", {
      opacity: 0,
      y: -50,
      delay: 0.3,
      ease: Sine.easeIn,
    })
      .from(".nav-main", 1, {
        opacity: 0,
        y: 10,
        ease: Sine.easeInOut,
        delay: 0.1,
      })
      .from(".page-links", 1, {
        opacity: 0,
        x: -50,
        ease: Power2.easeIn,
        delay: 0.2,
      })
      .from(".social-links", 1, {
        opacity: 0,
        x: 50,
        ease: Power2.easeIn,
        delay: 0.2,
      })
      .from(".nav-footer", 1, {
        opacity: 0,
        y: 50,
        ease: Bounce.easeIn,
        delay: 0.2,
      });
  }, []);

  // grabbing the navbar container node
  const refNavbar = useRef(null);
  // opens navigation
  function openNav() {
    refNavbar.current.style.transform = "rotateX(0deg)";
  }
  // close navigation
  function closeNav() {
    refNavbar.current.style.transform = "rotateX(-90deg)";
  }
  // current year for footer copyright
  let currentYear = new Date().getFullYear();

  return (
    <>
    {/* menu button */}
      <button className="btn-ham" onClick={openNav}>
        <BiMenuAltLeft />
      </button>
      {/* nav close button */}
      <nav id="nav" ref={refNavbar} onClick={closeNav}>
        <div className="icon-close">
          <AiOutlineClose onClick={closeNav} />
        </div>

        <ul className="menu">
          <main className="nav-main">
            <div className="page-links">
              <li onClick={closeNav}>
                <Link to="/">
                  <AiFillHome /> Home
                </Link>
              </li>
              <li onClick={closeNav}>
                <a href="https://hashnode.com/@CodXbrion">
                  <SiHashnode /> Blog
                </a>
              </li>
              <li onClick={closeNav}>
                <Link to="/skills">
                  <GiSkills /> Skills
                </Link>
              </li>

              <li onClick={closeNav}>
                <Link to="/projects">
                  <AiFillProject /> Projects
                </Link>
              </li>

              <li onClick={closeNav}>
                <Link to="/contact">
                  <MdContacts /> Contacts
                </Link>
              </li>
            </div>
            <div className="social-links">
              <li onClick={closeNav}>
                <a href="https://github.com/CodXbrion">
                  <AiFillGithub /> Github
                </a>
              </li>
              <li onClick={closeNav}>
                <a href="https://twitter.com/CodXbrion">
                  <AiOutlineTwitter /> Twitter
                </a>
              </li>
              <li onClick={closeNav}>
                <a href="https://www.linkedin.com/in/brian-george-411b49184/">
                  <AiFillLinkedin /> LinkedIn
                </a>
              </li>
              <li onClick={closeNav}>
                <a href="https://hashnode.com/@CodXbrion">
                  <SiHashnode /> Blog
                </a>
              </li>
            </div>
          </main>
          <footer className="nav-footer">
            <p>made with ❤ by CodXbrion | &copy; {currentYear}</p>
          </footer>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
