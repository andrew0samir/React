import React, { Component } from "react";
import style from "./Contact.module.css";

export default class Contact extends Component {
  render() {
    return (
      <>
        <section className="py-5 mt-5 ">
          <div className="container text-center ">
            <div>
              <h2 className={`${style.header} pt-5 text-uppercase `}>
                contact me
              </h2>
            </div>
            <div className="divider p-2 d-flex justify-content-center align-items-center ">
              <div className={`${style.line}`}></div>
              <div className={`icon ${style.iconWidth}`}>
                <i className="fa-solid fa-star  fs-3"></i>
              </div>
              <div className={`${style.line}`}></div>
            </div>
            <div className="text-start w-75 m-auto">
              <form id="contactForm">
                <div >
                  <div className={`${style.formGroup} form-group mb-2 pb-2`}>
                    <input className="form-control" id="name" type="text" placeholder="Name" required />
                  </div>
                </div>
                <div >
                  <div className={`${style.formGroup} form-group mb-2 pb-2`}>
                    <input
                      className="form-control" id="email" type="email" required placeholder="Email Address"  />
                  </div>
                </div>
                <div >
                  <div className={` ${style.formGroup} form-group mb-2 pb-2`}>
                    <input
                      className="form-control" id="phone" type="phone" required placeholder="Phone Number" />
                  </div>
                </div>
                <div >
                  <div className={`${style.formGroup} form-group mb-2 pb-2`}>
                    <textarea
                      className="form-control" id="message" rows={5} placeholder="Message" required defaultValue={""}/>
                  </div>
                </div>
                <div className="pt-3">
                  <button className={` btn  ${style.btnColor} `} type="submit" >Send</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }
}
