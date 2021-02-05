/* eslint-disable jsx-a11y/img-redundant-alt */

import React from "react";
import Top from "./top"
import Rest from "./rest";
import Footer from "./footer";
import Skills from "./skils";

import ContactInfo from "./contact_info";
function App(params) {
    return (
        <div>
            <Top/>
            <Skills/>
            <Rest/>
            <ContactInfo/>
            
            <Footer/>
            
        </div>
       
    );
}

export default App;