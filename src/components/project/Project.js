import React from "react";
import "./project.css";

import projects from "../../data";
import { Tooltip } from "bootstrap";

function Project({ id, title, desc, img, url, tools }) {

  return (
    <>
      <a href={url}>
        <article className="article-projects-display">
          <div className="heading text-center">
            <h4>{title}</h4>
          </div>
          <div className="main">
            <div className="img-project">
              <img src={img} alt="" />
            </div>
            <div className="desc">
              <p>{desc}</p>
            </div>
          </div>
          <section className="tools">
            {tools.map((tool, index) => {
              return (
                <p key={index} className="tools-items">
                  {tool}
                </p>
              );
            })}
          </section>
        </article>
      </a>
    </>
  );
}

export default Project;
