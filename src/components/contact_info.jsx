/* eslint-disable jsx-a11y/img-redundant-alt */

import React from "react";
import Projects from "./projects";
function ContactInfo(params) {
  return (
    <div class="container">
      <section class="col-md-12 content" id="contact">
        <div class="col-lg-6 col-md-6 content-item tm-content-box tm-black-translucent-bg">
          <h2 class="contact-title">Contact Info</h2>
          <p>
            Currently I am pursuing my B Tech. in CSE at IIIT, Sci City so,I
            will be staying at collage residence Sri City, Chittoor, Andhra
            Pradesh, India.
          </p>
          <p>
//             Telephone No. : +91 6301418535
//             <br />
            pincode       : 524004
            <br />
            Org. Email  : mahaboob.s19@iiits.in
            <br/>
            Personal Email : mahaboob.developer@gmail.com
          </p>
          <div class="row">
            <div class="col-sm-4">
              <a href="https://www.linkedin.com/in/mahaboobshaik-developer/">
                <button
                  type="button"
                  class="btn btn-danger footer-btn "
                >
                  <i class="fa fa-linkedin"></i>
                </button>
              </a>
            </div>
            <div class="col-sm-4">
              <a href="https://www.instagram.com/shaik_bannu147/">
                <button type="button" class="btn btn-danger footer-btn ">
                  <i class="fa fa-instagram"></i>
                </button>
              </a>
            </div>
            <div class="col-sm-4">
              <a href="https://www.facebook.com/bannu16072002/">
                <button
                  type="button"
                  class="btn btn-danger footer-btn "
                >
                  <i class="fa fa-facebook"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
        <Projects />
      </section>
    </div>
  );
}

export default ContactInfo;
