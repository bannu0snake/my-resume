/* eslint-disable jsx-a11y/img-redundant-alt */

import React from "react";
import Trainings from "./trainings";
function Skills(params) {
  return (
    <div class="container">
      <section
        class="col-md-12 content padding tm-equal-col-container"
        id="services"
      >
        <div class="col-lg-6 col-md-6 col-sm-12 content-item tm-black-translucent-bg tm-services-section-padding">
          <h2 class="text-center dark-blue-text">Top SKILLS</h2>
          <ul class="list-group">
            <li class="list-group-item list-group-item-info list-group-item-heading">
              Front End Skills
            </li>
            <ul class="list-group">
              <li class="list-group-item list-group-item-success">Boostrap</li>
              <li class="list-group-item list-group-item-warning">JQuery</li>
              <li class="list-group-item list-group-item-danger">React.js</li>
            </ul>
            <li class="list-group-item list-group-item-info list-group-item-heading">
              Back End Skills
            </li>
            <ul class="list-group">
              <li class="list-group-item list-group-item-success">Node.js</li>
              <li class="list-group-item list-group-item-warning">Mangoose</li>
              <li class="list-group-item list-group-item-danger">Django</li>
            </ul>
            <button
              type="button"
              class="btn btn-info"
              data-toggle="collapse"
              data-target="#demo"
            >
              More
            </button>
            <div id="demo" class="collapse">
              <li class="list-group-item list-group-item-info list-group-item-heading">
                Data Science Skills
              </li>
              <ul class="list-group">
                <li class="list-group-item list-group-item-success">
                  Machine Learning
                </li>
                <li class="list-group-item list-group-item-warning">Python</li>
                <li class="list-group-item list-group-item-danger">DBMS</li>
              </ul>
            </div>
          </ul>
        </div>
        <Trainings />
      </section>
    </div>
  );
}

export default Skills;
