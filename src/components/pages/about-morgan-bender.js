import React, { Component } from "react";
import aboutTheAuthorHeading from "../../assets/images/about-the-author-heading.png";
import Title from "../title.js";

export class AboutMorganBender extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div class="row">
            <div className="col-12 p-0">
              <img
                src={aboutTheAuthorHeading}
                alt="Make It Real Filmstrip"
                title="Make It Real Filmstrip"
              />
            </div>
          </div>
        </div>
        <div className="container">
        <Title text="Morgan Bender" />
          <div className="row">
            <div className="col-12">
              <blockquote>
                <p>
                  Morgan Bender came of age in the 1980s. His teen years were
                  split between Colorado and an unnnamed small town in another
                  state. Where is less important than experiences. There, he was
                  known as a hellion with more balls than brains, but that's a
                  tale for another time and for a select few.
                </p>
                <p>
                  After graduating high school, he played billiards for a
                  living, then taught himself software engineering. Not that the
                  money wasn't good playing pool. It was. But gambling for a
                  living also led to problems.
                </p>
                <p>
                  He was never and hasn't ever been far away from a notepad,
                  typewriter, or computer. In his heart, Mr. Bender has always
                  been a writer, and treats the craft as a religion.
                </p>
                <p>Yes, he takes it that seriously.</p>
                <p>
                  In the Tales That Wail series, Mr. Bender takes an
                  unapologetic look at one of the most fascinating and
                  tumultuous decades in history. It would not be a stretch to
                  say that Mr. Bender is exorcising some of his own demons.
                </p>
                <p>
                  He currently resides on Costa del Sol with his wife,
                  translator extraordinaire. When not writing and sipping
                  whiskey, he's usually walking along the beach.
                </p>
                <p>
                  The walks don't happen as often as he wishes (writing tends to
                  consume him).
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
