import React, { Component } from "react";
import style from "./About.module.css";

export default class About extends Component {
  render() {
    return (
      <>
      <section className="bg-color vh-100 d-flex justify-content-center align-items-center">
        <div className="container text-center ">
          <div>
            <h2 className={`${style.header} text-white text-uppercase`}>about</h2>
          </div>
          <div className="divider p-2 d-flex justify-content-center align-items-center ">
            <div className={`${style.line}`}></div>
            <div className={`icon ${style.iconWidth}`}>
              <i className="fa-solid fa-star text-white fs-3"></i>
            </div>
            <div className={`${style.line}`}></div>
          </div>
          <div className={`${style.about} pt-5 text-white`}>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <p className={`${style.pFlex} f-lato `}>
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
                <div className="col-md-6">
                  <p className={`${style.pFlex} f-lato `}>
                    You can create your own custom avatar for the masthead,
                    change the icon in the dividers, and add your email address
                    to the contact form to make it fully functional!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    );
  }
}
