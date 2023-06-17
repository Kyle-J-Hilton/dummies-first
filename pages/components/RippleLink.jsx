import React from "react";
import styles from "../../styles/SideScroll.module.css";

const RippleLink = () => {
  return (
    <div className={styles.rippleBox}>
        <a href="https://twitter.com/DummiesLab" className={styles.shiny}></a>
        <span style={{animationDelay: "-.3s"}}></span>
        <span style={{animationDelay: "-.6s"}}></span>
        <span style={{animationDelay: "-.9s"}}></span>
        <span style={{animationDelay: "-1.2s"}}></span>
   
    </div>
  );
};
export default RippleLink;
