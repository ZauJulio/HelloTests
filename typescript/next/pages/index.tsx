import React from "react";
import Calc from "../components/Calc";
import styles from "../styles/Home.module.scss";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1>Nextjs - Typescript</h1>
      <h2>Hello Jest - Calc</h2>
      <Calc />
    </div>
  );
}

export default Home;
