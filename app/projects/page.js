"use client";
import NavBar from "../Components/NavBar";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function Projects() {
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
      <div>Projects</div>
    </>
  );
}
