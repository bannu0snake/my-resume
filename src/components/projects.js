
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
var massage1 = "In this task I have used linear regression method to predict the score of a student based on his working hours";
var massage2 = "This is very cool website made by using javascript and JQuery. By using this web application you can play music "
function Projects(params) {
  return (
    <div class="col-lg-6 col-md-6 content-item tm-content-box tm-white-translucent-bg"  >
      <h2 class="contact-title">Projects</h2>
      <table class="table table-dark table-hover projects">
        <thead>
          <tr>
            <th>PROJECT NAME</th>
            <th>DISCRIPTION</th>
            
          </tr>
        </thead>
        <tbody class="bg-danger font-weight-bolder">
          <tr>
            <td><a href="https://bannu0snake.github.io/mucical/">Musical App</a></td>
           
            <td><p  >{massage2}</p></td>
          </tr>
          <tr>
            
            <td><a href="https://colab.research.google.com/drive/1HKV-ZwsH5PnlsFi0zg9oPazNZo83vlI2?usp=sharing">Regression Analysis</a></td>
            <td><p >{massage1}</p></td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
}

export default Projects;
