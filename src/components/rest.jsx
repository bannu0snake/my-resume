/* eslint-disable jsx-a11y/img-redundant-alt */

import React from "react";
function Rest(params) {
  return (
    <div class="container">
      <section class="col-md-12 content padding tm-float-section tm-section-3">
        <div class="col-lg-6 col-md-6 content-item tm-black-translucent-bg"></div>
        <div class="col-lg-6 col-md-6 content-item tm-white-translucent-bg"></div>

        <div class="tm-float-section-header">
          <h2 class="text-center tm-white-text tm-section-3-header">
            Internships
          </h2>
        </div>

        <div class="tm-float-section-body tm-white-bg">
          <div class="col-lg-12">
            <div class="col-md-6 col-lg-6">
              <h3 class="h2 text-center bg-danger ">
                Internshala Student Partner
              </h3>
              <p class="pt-10">
                In this Internship, I have learned a lot about Business intelligence
                and also strategies to increase the market through <strong>Internshala</strong>. It also helps me to
                build up my communication skills. All the tasks we made are very
                exiciting and full of fun.
              </p>
            </div>
            <div class="col-md-6 col-lg-6">
              <h3 class="h3 text-center bg-danger">
                Data Science and Business Analytics intern
              </h3>
              <p>
                In this Internship I have completed a task, Where I need to
                predict the future outcomes or unknown outcomes by using
                regression analysis in supervised machine learning. It was a
                very great learning experiance with <strong>The Spark Foundation</strong> .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Rest;
