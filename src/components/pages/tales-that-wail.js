import React, { Component } from "react";
import aboutTheSeriesHeading from "../../assets/images/about-the-series-heading.png";
import Title from "../title.js";

export class TalesThatWail extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div class="row">
            <div className="col-12 p-0">
              <img
                src={aboutTheSeriesHeading}
                alt="Make It Real Filmstrip"
                title="Make It Real Filmstrip"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <Title text="Tales That Wail" />
          <div className="row">
            <div className="col-12">
              <blockquote>
                <p>
                  Tales That Wail is an honest look at what life was like in the
                  80s. The decade &mdash; glorious as it was &mdash; is not
                  glamorized here. Indeed, you'll find some very dark and mature
                  themes, even when the story's protaganists are in their later
                  teens. In short, the look and writing is no holds barred.
                </p>
                <p>
                  While Fiction, many of the events are based on fact. Some
                  places are real, others have been modified and provided new
                  names to protect the innocent and not-so-innocent. All
                  characters appearing in this work are fictitious. Any
                  resemblances to real persons, living or dead, is purely
                  coincidental.
                </p>
                <p>
                  As of February 17<sup>th</sup>, 2020, there are four novels
                  planned for Tales That Wail. It is quite possible this number
                  will grow. Make It Real, the first novel, is written and ready
                  for editing
                </p>
                <p>
                  Mr. Bender is currently at work on the second novel. Its title
                  is forthcoming.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
