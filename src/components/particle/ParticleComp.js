import React from 'react'
import './particle.css'
import Particles from "react-particles-js";
import particlesConfig from "./particlesConfig";

function ParticleComp() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: `${width}px`,
          height: `${height}px`,
        }}
      >
          <Particles height='100%' params={particlesConfig} style={{
              backgroundColor: 'var(--black)',
          }}/>
      </div>
    );
}

export default ParticleComp
