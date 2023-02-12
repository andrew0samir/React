import React, { Component } from "react";
import style from "./Footer.module.css" ;

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="text-white text-center ">
          <div className={`${style.footer} py-2 `}>
            <div className="container">
              <div className="row">
                <div className="col-md-4 py-2 ">
                  <h4>LOCATION</h4>
                  <p className="f-lato">2215 John Daniel Drive Clark, MO 65243</p>
                </div>
                <div className="col-md-4 py-2 ">
                  <h4>AROUND THE WEB</h4>
                  <div className={` mt-2 ${style.icon}`}>
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                    <i className="fa-brands fa-dribbble"></i>
                  </div>
                </div>
                <div className="col-md-4 py-2 ">
                  <h4>ABOUT FREELANCER</h4>
                  <p className="f-lato">
                    Freelance is a free to use, MIT licensed Bootstrap theme
                    created by Route
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`${style.copyright} py-2 f-lato`}>
            <p>Copyright © Your Website 2021</p>
          </div>
        </footer>
      </>
    );
  }
}
