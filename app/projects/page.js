"use client";
import data from "./data.json";
import NavBar from "../Components/NavBar";
import styles from "./projects.module.css";
import { useTheme } from "next-themes";
import { useState } from "react";

// const cards = [
//   {
//       title: "Menstruation Cycle Tracker",
//       desc: "A charity project I am volunteering on in collaboration with a team a fellow bootcambers. Designing and building an app for tracking period cycles with some added features which are missing from the existing cycle trackers.",
//       techOne: "React Native",
//       techTwo: "Expo",
//       techThree: "Supabase"
//   },
//   {
//       title: "Robo Chef",
//       desc: "A React component that takes in ingredients and generates a recipe using AI.",
//       techOne: "React",
//       techTwo: "Chakra UI",
//       techThree: "OpenAI",
//       gitHubLink: "www.google.com",
//       siteLink: "www.notgoogle.com"
//   }
// ]

const WorkCards = () => {
  return data.cards.map(
    (
      e,
      index // Removed the extra curly braces and added index as a second argument to map
    ) => (
      <div key={index} className={styles.card_container}>
        {" "}
        {/* Added a key prop */}
        <article className={styles.single_card}>
          <div className={styles.card_background}>
            <h1>{e.title}</h1>
          </div>
        </article>
      </div>
    )
  );
};

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
      <header className={styles.header}>
        <h1>My Work</h1>
      </header>
      <WorkCards />
    </>
  );
}
