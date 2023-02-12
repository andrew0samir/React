import React, { Component } from "react";
import style from "./Portfolio.module.css";
import cabin from "../imgs/cabin.png";
import cake from "../imgs/cake.png";
import circus from "../imgs/circus.png";
import game from "../imgs/game.png";
import safe from "../imgs/safe.png";
import submarine from "../imgs/submarine.png";



export default class Portfolio extends Component {
  render() {
    return (
      <>
        <section className="py-5 mt-5">
          <div className="container text-center">
            <div>
              <h2 className={`${style.header} pt-5 text-uppercase `}>
                portfolio
              </h2>
            </div>
            <div className="divider p-2 d-flex justify-content-center align-items-center ">
              <div className={`${style.line}`}></div>
              <div className={`icon ${style.iconWidth}`}>
                <i className="fa-solid fa-star  fs-3"></i>
              </div>
              <div className={`${style.line}`}></div>
            </div>
            <div className="row gy-5 py-4">
              <div className={`col-md-4 `}>
                <div className={`${style.layer}`}>
                  <div className={`${style.overlay} d-flex justify-content-center align-items-center text-white fs-1`}>
                    <div className={`${style.innerlayer}`}>
                      <i class="fa-solid fa-plus"></i>
                    </div>
                  </div>
                  <img className={`${style.imgWidth} ${style.item}`} src={cabin} alt="" />
                </div>
              </div>
              <div className={`col-md-4 `}>
                <div className={`${style.layer}`}>
                  <div className={`${style.overlay} d-flex justify-content-center align-items-center text-white fs-1`}>
                    <div className={`${style.innerlayer}`}>
                      <i class="fa-solid fa-plus"></i>
                    </div>
                  </div>
                  <img className={`${style.imgWidth} ${style.item}`} src={cake} alt="" />
                </div>
              </div>
              <div className={`col-md-4 `}>
                <div className={`${style.layer}`}>
                  <div className={`${style.overlay} d-flex justify-content-center align-items-center text-white fs-1`}>
                    <div className={`${style.innerlayer}`}>
                      <i class="fa-solid fa-plus"></i>
                    </div>
                  </div>
                  <img className={`${style.imgWidth} ${style.item}`} src={circus} alt="" />
                </div>
              </div>
              <div className={`col-md-4 `}>
                <div className={`${style.layer}`}>
                  <div className={`${style.overlay} d-flex justify-content-center align-items-center text-white fs-1`}>
                    <div className={`${style.innerlayer}`}>
                      <i class="fa-solid fa-plus"></i>
                    </div>
                  </div>
                  <img className={`${style.imgWidth} ${style.item}`} src={game} alt="" />
                </div>
              </div>
              <div className={`col-md-4 `}>
                <div className={`${style.layer}`}>
                  <div className={`${style.overlay} d-flex justify-content-center align-items-center text-white fs-1`}>
                    <div className={`${style.innerlayer}`}>
                      <i class="fa-solid fa-plus"></i>
                    </div>
                  </div>
                  <img className={`${style.imgWidth} ${style.item}`} src={safe} alt="" />
                </div>
              </div>
              <div className={`col-md-4 `}>
                <div className={`${style.layer}`}>
                  <div className={`${style.overlay} d-flex justify-content-center align-items-center text-white fs-1`}>
                    <div className={`${style.innerlayer}`}>
                      <i class="fa-solid fa-plus"></i>
                    </div>
                  </div>
                  <img className={`${style.imgWidth} ${style.item}`} src={submarine} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
