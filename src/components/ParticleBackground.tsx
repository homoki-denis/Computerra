import React from "react";
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = (props) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            image: "linear-gradient(-45deg, #222324 0%, #000000 100%",
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            lineLinked: {
              enable: false,
            },
            move: {
              bounce: false,
              direction: "none",
              enable: true,
              outMode: "out",
              random: true,
              speed: 0.3,
              straight: false,
            },
            opacity: {
              anim: {
                enable: true,
                minimumValue: 0,
                speed: 1,
                sync: false,
              },
              random: true,
              value: 1,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 3,
            },
          },
        }}
      />

      {props.children}
    </>
  );
};

export default ParticleBackground;
