import React, { Component } from "react";
import avatar from "../imgs/avataaars.svg";
import style from "./Home.module.css";

export default class Home extends Component {
  render() {
    return (
      <>
        <section className={`${style.color}`}>
        <div className={`home vh-100 text-center `}>
          <div className="mt-5 py-5">
            <img className={`${style.imgWidth} `} src={avatar} alt="" />
          </div>
          <div className={`text-white pb-3 pt-2  `}>
            <h1 className={`${style.fonts}`}>start react </h1>
          </div>
          <div className="divider p-2 d-flex justify-content-center align-items-center ">
            <div className={`${style.line}`}></div>
            <div className={`icon ${style.iconWidth}`}>
              <i className="fa-solid fa-star text-white fs-3"></i>
            </div>
            <div className={`${style.line}`}></div>
          </div>
          <div className="text-white fs-4 f-lato pt-2 ">
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
        </section>
      </>
    );
  }
}
