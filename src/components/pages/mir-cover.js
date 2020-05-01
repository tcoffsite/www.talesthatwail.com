import React, { Component } from "react";
import tnMakeItRealCover from "./../../assets/images/tn-make-it-real-cover.jpg";
import fullMakeItRealCover from "./../../assets/images/full-make-it-real-cover.png";

export class MakeItRealCover extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-12 text-center">
            <a href={fullMakeItRealCover} target="_blank">
                <img src={tnMakeItRealCover} alt="Click to see the full-sized version of Make It Real's cover." title="Click to see the full-sized version of Make It Real's cover." class="img-fluid" />
            </a>
            <div className="text-center mt-3">
            <a href={fullMakeItRealCover} className="btn btn-primary" target="_blank" title="Click to see the full-sized version of Make It Real's cover.">
                View Full Size
            </a>
            </div>
            
        </div>
      </div>
    );
  }
}
