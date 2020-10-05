import React, { Component } from 'react';


let Email ="ojha96p@gmail.com";
let linkedln ="https://www.linkedin.com/in/parmanand-ojha-81900a167/";

class About extends Component {
    
    
    render() {
        return (
            <div className="about ">
                <h3 className="aboutHeading wow fadeInUp">About.</h3>
                 <p className="aboutText wow fadeInUp">I’m a developer based in Delhi,India. Currently Working on Language React-JS project to polish it .Previous Btech Computer Science student at Inderprastha engineering college. 
                 </p>      
                 <br/><br/><br/>
                 <h6 className=" ques wow fadeInUp" >What I Usually Do.</h6>
                 <h6 className="ques ans  wow fadeInUp">Frontend Website Development And UI Design</h6>
                 <br/><br/><br/>
                 <h6 className=" ques wow fadeInUp" >Contact</h6>
                 <h6 className=" ques link wow fadeInUp"><a href={Email}>Email</a>, <a href={linkedln}>Linkedln</a>, <a>Behance</a>, <a>Github</a></h6>
                 <br/><br/><br/>
                 <h3 className="aboutHeading wow fadeInUp">Achievements.</h3>
                 <p className="aboutText wow fadeInUp"> <span className="wow fadeInUp">-Secured 1st rank in Innovazia 2k17 event organised by Computer Society of India-Ghaziabad 
  Chapter. Aim of team was to make valid user entry in IPEC College .Team had made PHP 
  site and a Barcode Scanner for scanning of i-card.<br/></span>
  <span className="wow fadeInUp">-Secured 1st position in predefined technical problem event organised by IPEC College on 
  Engineer's Day 2k17.<br/></span>
  <span className="wow fadeInUp">
-Secured 1st position in ADMAD Show in GYAN MANTHAN 2K17 in college IIMT & SCHOOL OF 
  LAW DELHI.<br/></span><span className="wow fadeInUp">
-Securing 2nd position in project presentation event of the inter-college IPEC Techathlon. Our 
  Team has prepared an RFID Scanner module for our entry and exit in college in 2018 </span></p>      
                 <br/><br/><br/>
            </div>
        );
    }
}

export default About;
