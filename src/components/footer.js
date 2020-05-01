import React, { Component } from "react";
import Heading from "../components/heading.js";
import Input from "../components/forms/input.js"

export class Footer extends Component {    
  render() {    
    return (
      <React.Fragment>
        <footer className="footer">
          {/* <Heading title="Get Updates" fa="fa-envelope-open" /> */}
          <div className="container">
            {/* <div className="row">
              <div className="col-4 offset-2">
                <Input type="text" placeholder="First Name" id="first_name" onchange="" />
              </div>
              <div className="col-4">
                <Input type="text" placeholder="Last Name" id="last_name" onchange="" />
              </div>
            </div>
            <div className="row">
              <div className="col-8 offset-2">
                <Input type="text" placeholder="Email Address" id="email_address" onchange="" />
              </div>
            </div>
            <div className="row">
              <div className="col-8 offset-2 text-center">
                <button className="btn btn-primary caps"><i className="fa fa-pencil mr-2"></i>Subscribe</button>
              </div>
            </div> */}
            {/* <hr /> */}
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 offset-lg-3 offset-md-3 offset-sm-0 text-center mt-1 mb-5 small-font">
                <i className="fa fa-copyright"></i> Copyright 2020, All Rights
                Reserved
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
