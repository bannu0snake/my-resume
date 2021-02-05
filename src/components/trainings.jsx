/* eslint-disable jsx-a11y/img-redundant-alt */

import React from "react";

function Trainings(params) {
  return (
    <div class="col-lg-6 col-md-6 col-sm-12 tm-content-box tm-white-translucent-bg ">
      
      <h2 class="text-center dark-blue-text">Top SKILLS</h2>
      <table class="table table-dark table-hover projects">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Organization</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody class="bg-info font-weight-bolder">
          <tr>
            <td>Full Stack Web </td>

            <td>Udemy</td>
            <td>Completed</td>
          </tr>
          <tr>
            <td>Machine Learning</td>

            <td>Internshala Trainings</td>
            <td>Completed</td>
          </tr>
          <tr>
            <td>Python Bootcamp</td>

            <td>Udemy</td>
            <td>Completed</td>
          </tr>
          <tr>
            <td>Data Science</td>

            <td>Udemy</td>
            <td>Not Completed Yet</td>
          </tr>
          <tr>
            <td>Deep Learning and AI</td>

            <td>Udemy</td>
            <td>Not Completed Yet</td>
          </tr>
        </tbody>
      </table>

      <h2 class="contact-title">My Important Years</h2>
      <button
        type="button"
        class="btn btn-info"
        data-toggle="collapse"
        data-target="#demo1"
      >
        Click Me to View
      </button>
      <div id="demo1" class="collapse">
        <table class="table table-dark table-hover projects">
          <thead class="font-weight-bolder">
            <tr>
              <th>DATE</th>
              <th>EDUCATION</th>
            </tr>
          </thead>
          <tbody class="bg-warning font-weight-bolder">
            <tr>
              <td>2017</td>
              <td>SSC from kkr's Gowtham school.</td>
            </tr>
            <tr>
              <td>2019</td>
              <td>Intermidiate from sri Chaitanya Jr. collage . </td>
            </tr>
            <tr>
              <td>2019-2023</td>
              <td>Currently pursuing my B tech. from IIIT sri city.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Trainings;
