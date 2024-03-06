import React, { useState } from 'react';
import styles from "./NavBar.module.css";
import Image from "next/image";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState({
    nav_icon1: false,
    nav_icon2: false,
    nav_icon3: false,
    nav_icon4: false,
  });

  const toggleOpen = (id) => {
    setIsOpen(prevState => ({ ...prevState, [id]: !prevState[id] }));
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/logo.png" width={130} height={40} />
      </div>
      <div className={styles.burger_container}>
        <div className={isOpen.nav_icon1 ? `${styles.nav_icon1} ${styles.open}` : styles.nav_icon1} onClick={() => toggleOpen('nav_icon1')}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={isOpen.nav_icon2 ? `${styles.nav_icon2} ${styles.open}` : styles.nav_icon2} onClick={() => toggleOpen('nav_icon2')}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={isOpen.nav_icon3 ? `${styles.nav_icon3} ${styles.open}` : styles.nav_icon3} onClick={() => toggleOpen('nav_icon3')}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={isOpen.nav_icon4 ? `${styles.nav_icon4} ${styles.open}` : styles.nav_icon4} onClick={() => toggleOpen('nav_icon4')}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
