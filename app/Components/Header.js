"use client";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {

    return (
      <header>
        <Image src="/face.jpg" width={210} height={300} alt="profile image" className={styles.image} />
      </header>
    );
  }