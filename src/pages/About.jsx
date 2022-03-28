import React from "react";
import banner from "../assets/img/b4.png";
import "../styles/About.css";
import js from "../assets/img/icons/java-script.png";
import react from "../assets/img/icons/react.png";
import php from "../assets/img/icons/php.png";
import mysql from "../assets/img/icons/mysql.png";
import css from "../assets/img/icons/css.png";
import html from "../assets/img/icons/html.png";
import java from "../assets/img/icons/java.png";
import Carousel from "../components/Carousel";


export default function About() {
  return (
    <>
      <div className="container__banner">
        <img src={banner} className="baner" />
      </div>

      <div className="container__about">
        <div className="tittle">
          <h1>TECNOLOGIAS USADAS</h1>
        </div>

        <div className="container__icons">
          <img src={js} />
          <img src={react} />
          <img src={php} />
          <img src={mysql} />
        </div>

        <br />
        <br />

        <div className="container__icons">
          <img src={css} />
          <img src={html} />
          <img src={java} />
        </div>

      </div>

      <Carousel />
    </>
  );
}
