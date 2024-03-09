"use client";
import { useState } from "react";
import Header from "./Components/Header.js";
import Bio from "./Components/Bio.js";
import TechStack from "./Components/TechStack.js";
import Footer from "./Components/Footer.js";
import NavBar from "./Components/NavBar.js";

export default function Home() {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsChecked(prefersDarkMode);
    }
  }, []);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    const root = document.documentElement;

    if (isChecked) {
      root.style.setProperty("--foreground", "#023047");
      root.style.setProperty("--background", "#F4A261");
      root.style.setProperty("--menu", "#F8F9FA");
      root.style.setProperty("--darkBackground", "#FF6B35");
      // ... set the rest of the light mode variables ...
    } else {
      root.style.setProperty("--foreground", "#FF6B35");
      root.style.setProperty("--background", "#264653");
      root.style.setProperty("--menu", "#212529");
      root.style.setProperty("--darkBackground", "#023047");
      // ... set the rest of the dark mode variables ...
    }
  };

  return (
    <>
      <NavBar onCheckboxChange={handleCheckboxChange} isChecked={isChecked} />
      <Header isChecked={isChecked} />
      <Bio isChecked={isChecked} />
      <TechStack isChecked={isChecked} />
      <Footer isChecked={isChecked} />
    </>
  );
}
