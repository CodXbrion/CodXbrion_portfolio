import React, { useState, useEffect } from "react";
import ParticleComp from "../particle/ParticleComp";
import "./projectsDisplay.css";
import Project from "../project/Project";
import projects from "../../data";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";

function ProjectsDisplay() {
  const [project, setProject] = useState(projects);
  const [value, setValue] = useState(0);

  // checks if the value used to select a project to display is not out of range
  // of the project list
  function checkValue(value) {
    let len = projects.length - 1;
    if (value > len) {
      return 0;
    }
    if (value < 0) {
      return len;
    }
    return value;
  }
  //  displays the previous project
  function next() {
    setValue(() => {
      return checkValue(value + 1);
    });
  }
  //  displays the next project
  function prev() {
    setValue(() => {
      return checkValue(value - 1);
    });
  }
  const singleProject = project[value];
  // automatically transitions the project display to the next
  useEffect(() => {
    let interval = setInterval(() => {
      setValue(() => {
        return checkValue(value + 1);
      });
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [value]);

  return (
    <>
      <section className="section-display">
        <ParticleComp />
        <div className="display">
          <div className="display-scroll">
            <AiOutlineLeftCircle onClick={prev} />
            <Project {...singleProject} />
            <AiOutlineRightCircle onClick={next} />
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectsDisplay;
