"use client";
// import { useState, useEffect } from "react";
import Header from "./Components/Header.js";
import Bio from "./Components/Bio.js";
import TechStack from "./Components/TechStack.js";
import Footer from "./Components/Footer.js";
import NavBar from "./Components/NavBar.js";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function Home() {
  const prefersDarkMode =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const { theme, setTheme } = useTheme(prefersDarkMode ? "dark" : "light");
  const [isChecked, setIsChecked] = useState(!prefersDarkMode);

  return (
    <>
      <NavBar
        theme={theme}
        setTheme={setTheme}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
      <Header theme={theme} />
      <Bio />
      <TechStack />
      <Footer />
    </>
  );
}
