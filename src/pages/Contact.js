import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import Particlecomp from "../components/particle/ParticleComp";

function Contact() {
  return (
    <>
      <section className="section-contact">
        <Particlecomp />
        <div className="contact-display">
          <div>
            <a href="https://github.com/CodXbrion" target="blank">
              <AiFillGithub /> github
            </a>
            <a href="https://twitter.com/CodXbrion" target="blank">
              <AiOutlineTwitter />
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/brian-george-411b49184/"
              target="blank"
            >
              <AiFillLinkedin />
              linkedIn
            </a>
            <a href="mailto:codxbrion@gmail.com">
              <AiOutlineMail />
               Send Email
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
