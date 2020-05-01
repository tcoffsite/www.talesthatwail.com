import React, { Component } from "react";
import tageLineImage from "../../assets/images/make-it-real-full-page.png";

export class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
              <img
                src={tageLineImage}
                alt="Make It Real"
                title="Make It Real"
                className="img-fluid w-100"
              />
          </div>
        </div>
      </div>
    );
  }
}
