/* eslint-disable jsx-a11y/img-redundant-alt */

import React from "react";
var year = new Date().getFullYear();
function Footer(params) {
  return (
    <div class="text-center footer">
      <div class="container" >
        Copyright &copy; <span class="tm-current-year">{year}</span> belongs to MAHABOOB SHAIK
        
        
      </div>
    </div>
  );
}

export default Footer;
