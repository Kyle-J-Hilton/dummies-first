import React from "react";
import styles from "../../styles/SideScroll.module.css";
import Link from "next/link";

const RippleLink = () => {
  return (
    <Link href="https://twitter.com/DummiesLab" className={styles.rippleBox}>
        <a target="_blank" className={styles.shiny}></a>
        <span style={{animationDelay: "-.3s"}}></span>
        <span style={{animationDelay: "-.6s"}}></span>
        <span style={{animationDelay: "-.9s"}}></span>
        <span style={{animationDelay: "-1.2s"}}></span>
   
    </Link>
  );
};
export default RippleLink;
