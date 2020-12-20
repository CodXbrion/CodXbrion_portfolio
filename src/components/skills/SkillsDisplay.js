import React from 'react'
import './skills.css'
import {Link} from 'react-router-dom'
import { AiOutlineTeam } from "react-icons/ai";
import { SiJavascript, SiDjango, SiMysql, SiMongodb } from "react-icons/si";
import { FaPython, FaReact } from "react-icons/fa";


function SkillsDisplay() {
    return (
      <>
        <section className="section-skills">
          <div className="section-skills-bg">
            <div className="skillbar">
              <p>Hover </p>
              
              <ul className="menu">
                <li>
                  <Link to="#">
                    <SiJavascript />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FaPython />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <SiDjango />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FaReact />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <SiMysql />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <SiMongodb />
                  </Link>
                  <Link to="#">
                    <AiOutlineTeam />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </>
    );
}

export default SkillsDisplay
