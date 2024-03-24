'use client'
import { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const prefersDarkMode = typeof window !== 'undefined' && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const { theme, setTheme } = useTheme(prefersDarkMode ? 'dark' : 'light')
  const [isChecked, setIsChecked] = useState(theme === 'light')

  // useEffect(() => {
  //   const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  //   if (!theme) {
  //     if (prefersDarkMode) {
  //       setTheme('dark');
  //     } else {
  //       setTheme('light');
  //     }
  //   }
  // }, []);

  useEffect(() => {
    if (theme) {
      setIsChecked(theme === 'light');
    }
  }, [theme]);

  const onCheckboxChange = (event) => {
    setIsChecked(event.target.checked)
    setTheme(event.target.checked ? 'light' : 'dark')
  }

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  //   useEffect(() => {
  //   const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  //     if (!theme) {
  //       if (prefersDarkMode) {
  //         setTheme('dark');
  //         setIsChecked(false);
  //       } else {
  //         setTheme('light');
  //         setIsChecked(true);
  //       }
  //     } else if (theme === 'light') {
  //       setIsChecked(true)
  //     } else {
  //       setIsChecked(false)
  //     }
  // }, []);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Image src="/logo.png" width={130} height={40} alt="logo" />
        </div>
        <div
          className={
            isOpen
              ? `${styles.nav_icon1} ${styles.open} noSelect`
              : `${styles.nav_icon1} noSelect`
          }
          onClick={() => toggleOpen()}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <div className={isOpen ? `${styles.menu} ${styles.open}` : styles.closed}>
        <div className={styles.top_menu_flex}>
          <div className={styles.input_wrap}>
            <input className="noSelect" id={styles.input} type="checkbox" onChange={onCheckboxChange} defaultChecked={isChecked} />
            <label
              className="noSelect"
              htmlFor={styles.input}
              id={styles.input_label}
            >
              Select
            </label>
          </div>
          <div
            className={
              isOpen
                ? `${styles.nav_icon1} ${styles.open} noSelect`
                : `${styles.nav_icon1} noSelect`
            }
            onClick={() => toggleOpen()}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div>
          <Link
            className={`${styles.menu_link} noSelect`}
            href="https://drive.google.com/file/d/17qvcNgscGngXS4Jg71yMfq0DRxKXVcnq/view?usp=sharing"
          >
            <strong>CV</strong>
          </Link>
          <br></br>
          <Link className={`${styles.menu_link} noSelect`} href="/projects">
            <strong>Projects</strong>
          </Link>
        </div>
        <div className={styles.bottom_menu_flex}>
          <Link className="noSelect" href="https://www.linkedin.com/in/sean-lunt-028484b8/">
            <Image
              className={styles.menu_image}
              src={isChecked ?  "/blue-linkedin.svg" : "/orange-linkedin.svg"}
              width={100}
              height={100}
              alt="linkedin logo"
            />
          </Link>
          <Link className="noSelect" href="https://github.com/PurpleNurps">
            <Image
              className={styles.menu_image}
              src={isChecked ? "/blue-github.svg" : "/orange-github.svg"}
              width={100}
              height={100}
              alt="github logo"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
