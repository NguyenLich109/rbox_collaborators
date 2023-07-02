"use client";
import React from "react";
import styles from "./style.module.css";
import DataNavbar from "../modal/modalNav/DataNavbar";

const Navbar = () => {
  return (
    <div className={`${styles.navbar} border-r xl:-translate-x-full`}>
      <DataNavbar />
    </div>
  );
};

export default Navbar;
