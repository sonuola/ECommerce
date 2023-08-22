import React from "react";
import classNames from "classnames";
import styles from "./Header.module.css";
const Footer = () => {
  return (
    <div className={classNames("bg-dark text-light", styles.footer)}>
      <h4 className="text-center">All Rights Reserved &copy; Sonu Ola</h4>
    </div>
  );
};

export default Footer;
