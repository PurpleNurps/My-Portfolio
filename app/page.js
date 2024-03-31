"use client";
// import { useState, useEffect } from "react";
import Header from "./Components/Header.js";
import Bio from "./Components/Bio.js";
import TechStack from "./Components/TechStack.js";
import Footer from "./Components/Footer.js";
import NavBar from "./Components/NavBar.js";
import { useTheme } from "next-themes";
import { useState, useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Home() {
  const prefersDarkMode =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const { theme, setTheme } = useTheme(prefersDarkMode ? "dark" : "light");
  const [isChecked, setIsChecked] = useState(!prefersDarkMode);

  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "attract",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          attract: { distance: 200, duration: 0.4, factor: 10 },
        },
      },
      particles: {
        color: {
          value: theme === "dark" ? "#FF6B35" : "#023047",
        },
        links: {
          color: theme === "dark" ? "#F4A261" : "#264653",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 200,
        },
        opacity: {
          value: 1,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [theme]
  );

  return (
    <>
      <NavBar
        theme={theme}
        setTheme={setTheme}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        className="navBar"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          width: "100%",
          zIndex: 1,
          marginTop: "100px",
        }}
      >
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="particles"
          style={{ position: "absolute", zIndex: 1 }}
        />
        <Header theme={theme} />
      </div>
      <Bio />
      <TechStack />
      <Footer />
    </>
  );
}
