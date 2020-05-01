import React, { Component } from "react";
import makeItRealCover from "../../assets/images/gangster.png";
import tnMakeItRealCover from "./../../assets/images/tn-make-it-real-cover.jpg";
import fullMakeItRealCover from "./../../assets/images/full-make-it-real-cover.png";
import makeItRealHeading from "./../../assets/images/preview-make-it-real-heading.png";
import Title from "../title.js";

export class PreviewMakeItReal extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div class="row">
            <div className="col-12 p-0">
              <img
                src={makeItRealHeading}
                alt="Make It Real Filmstrip"
                title="Make It Real Filmstrip"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <Title text="Preview Make It Real" />
          <div className="row">
            <div className="col-12">
              <blockquote>
                <p>
                  To the unknowing eye, Oak Valley is a typical country town.
                  It’s quiet and sleepy and everyone knows each other’s secrets.
                </p>
                <p>Looks, however, deceive.</p>
                <p>
                  Cody Larsson, recently arrived from L.A., doesn’t know the men
                  his father conned are part of the criminal underworld that
                  runs Oak Valley. Neither is he aware the crime ring is coming
                  after Cody and his family. No, all Cody knows is he must
                  adjust to a new life while coming to terms with the violence
                  of his old one.{" "}
                </p>
                <p>
                  Determined to become a better person is challenging enough.
                  It’s harder when you’re constantly set upon. Perhaps it’s
                  nearly impossible if you fall for someone like Leah Amuso, a
                  raven-haired beauty who suffers from rage because she's been
                  emotionally abused for years. Then again, it could be
                  completely impossible when the woman you love is ex to Paul
                  Masser, son of the man behind the invisible crime ring.
                </p>
                <p>
                  For better and worse, willingly and unwillingly, Cody, Leah,
                  and Paul will become intertwined.
                </p>
                <p className="small-font mb-5">
                  *Make It Real is intended for New Adult and Adult audiences.
                </p>
              </blockquote>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <hr />
              <p>A six-chapter, free preview coming soon!</p>
              {/* <p>
              A six-chapter, free preview is available in the following formats!
            </p>
            <div className="text-center mt-5 mb-5">
              <a href="#" className="btn btn-primary mr-3">
                EPUB
              </a>
              <a href="#" className="btn btn-primary mr-3">
                Kindle
              </a>
              <a href="#" className="btn btn-primary">
                PDF
              </a>
              Good morning, love.

              I slept like I haven't in ages. Just got to the computer and am trying to wake up.
            </div> */}
              <hr />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
