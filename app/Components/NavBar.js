import { useState } from "react";
import styles from "./NavBar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

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
            <input className="noSelect" id={styles.input} type="checkbox" />
            <label
              className="noSelect"
              for={styles.input}
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
        <Link className={styles.menu_link} href="https://drive.google.com/file/d/17qvcNgscGngXS4Jg71yMfq0DRxKXVcnq/view?usp=sharing"><strong>CV</strong></Link><br></br>
        <Link className={styles.menu_link} href="/projects"><strong>Projects</strong></Link>
        </div>
        <div className={styles.bottom_menu_flex}>
          <Link href="https://www.linkedin.com/in/sean-lunt-028484b8/"><Image className={styles.menu_image} src="/orange-linkedin.svg" width={100} height={100} alt="linkedin logo"/></Link>
          <Link href="https://github.com/PurpleNurps"><Image className={styles.menu_image} src="/orange-github.svg" width={100} height={100} alt="github logo"/></Link>
        </div>
      </div>
    </>
  );
}
