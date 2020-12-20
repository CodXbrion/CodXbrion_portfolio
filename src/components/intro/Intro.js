import React, { useEffect } from "react";
import "./intro.css";
import profile from "../../assets/images/profile.jpg";
import { Link } from "react-router-dom";
import { Power1, Power2, Power4, Bounce,Expo, TimelineLite } from "gsap";

function Intro() {
  let t1 = new TimelineLite({ delay: 0.01 });
  useEffect(() => {
    t1.from(".name", 1, { opacity: 0, ease: Expo.easeIn, delay: 0.1 })
      .from(
        ".img-profile",
        1.5,

        { opacity: 0, y: -70, ease: Bounce.easeIn, delay: 0.3 },
        "-=0.5"
      )
      .from(
        ".greeting",
        {
          opacity: 0,
          y: -30,
          ease: Power1.easeIn,
          delay: 0.01,
        },
        "Start"
      )
      .from(
        ".text-center",
        2,
        {
          opacity: 0,
          y: -30,
          ease: Power2.easeIn,
          delay: 0.2,
        },
        "-=0.5"
      )
      .from(".ps", { opacity: 0, y: 10, ease: Power4.easeIn, delay: 0.1 })
      .from(".btn-intro-projects", {
        opacity: 0,
        x: -50,
        ease: Power2.easeIn,
        delay: 0.2,
      })
      .from(".btn-intro-blog", {
        opacity: 0,
        x: 50,
        ease: Power2.easeIn,
        delay: 0.2,
      });
  }, []);
  return (
    <>
      <section className="section-intro">
        <div className="section-bg">
          <article className="article-intro-img">
            <div className="img-profile">
              <img src={profile} alt="" />
            </div>
            <h4 className="name">Brion</h4>
          </article>
          <article className="article-intro-text text-center">
            <p className="greeting">Hi there 👋</p>
            <p className="text-center">
              Former CEO of a lemonade stand here. Now I just write stories that
              computers can read. Currently automating stuff because I'm
              efficiently lazy 😒 and Python is great. Two video games a month
              and a few novels a year keeps me sane. Sometimes I write about
              concepts I've read (You can check out my hashnode blog below). I
              promise you the code works on my machine... if there's an error,
              the behavior is by design.
            </p>
            <p className="ps">
              PS: I don't fix printers and I can't hack a Facebook account for
              you
            </p>
          </article>
          <div className="btn-intro">
            <Link to="/projects" className="btn btn-intro-projects">
              Projects
            </Link>
            <a
              href="https://hashnode.com/@CodXbrion"
              className="btn btn-intro-blog"
            >
              Blog
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Intro;
