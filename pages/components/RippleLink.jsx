import React from "react";
import styles from "../../styles/SideScroll.module.css";
import Link from "next/link";

const RippleLink = () => {
  return (
    <div className={styles.rippleBox}>
        <a target="_blank" href="https://twitter.com/DummiesLab" rel="noopener noreferrer" className={styles.shiny}>
          <span style={{animationDelay: "-.3s"}}></span>
          <span style={{animationDelay: "-.6s"}}></span>
          <span style={{animationDelay: "-.9s"}}></span>
          <span style={{animationDelay: "-1.2s"}}></span>
       </a>
    </div>
  );
};
export default RippleLink;
