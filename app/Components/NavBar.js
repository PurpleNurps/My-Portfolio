import { useState } from "react";
import styles from "./NavBar.module.css";
import Image from "next/image";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Image src="/logo.png" width={130} height={40} alt="logo"/>
        </div>
        <div className={styles.burger_container}>
          <div
            className={
              isOpen ? `${styles.nav_icon1} ${styles.open}` : styles.nav_icon1
            }
            onClick={() => toggleOpen()}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      <div
        className={isOpen ? `${styles.menu} ${styles.open}` : styles.closed}
      >
        <div className={styles.burger_container}>
          <div
            className={
              isOpen ? `${styles.nav_icon1} ${styles.open}` : styles.nav_icon1
            }
            onClick={() => toggleOpen()}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
}
