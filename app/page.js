"use client";
// import { useState, useEffect } from "react";
import Header from "./Components/Header.js";
import Bio from "./Components/Bio.js";
import TechStack from "./Components/TechStack.js";
import Footer from "./Components/Footer.js";
import NavBar from "./Components/NavBar.js";

export default function Home() {
  // const [isChecked, setIsChecked] = useState(false);

  // useEffect(() => {
  //   const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  //   setIsChecked(!prefersDarkMode);
  // }, []);



  // const handleCheckboxChange = (event) => {
  //   setIsChecked(event.target.checked);

  //   if (typeof document !== 'undefined') {
  //     const root = document.documentElement;

  //     if (isChecked) {
  //       root.style.setProperty("--foreground", "#FF6B35");
  //       root.style.setProperty("--background", "#264653");
  //       root.style.setProperty("--menu", "#212529");
  //       root.style.setProperty("--darkBackground", "#023047");
  //       // ... set the rest of the dark mode variables ...
  //     } else {
  //       root.style.setProperty("--foreground", "#023047");
  //       root.style.setProperty("--background", "#F4A261");
  //       root.style.setProperty("--menu", "#F8F9FA");
  //       root.style.setProperty("--darkBackground", "#FF6B35");
  //       // ... set the rest of the light mode variables ...
  //     }
  //   }
  // };

  return (
    <>
      <NavBar />
      <Header />
      <Bio />
      <TechStack />
      <Footer />
    </>
  );
}
