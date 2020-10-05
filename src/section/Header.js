import React, { Component } from 'react';


class Header extends Component{
    render(){
        return(
            <div>
            <div className="nav">
               <h2 className="logo wow fadeInUp">PARMANAND OJHA</h2>
               <h2 className="portfolio wow fadeInUp">Portfolio</h2>
               <h2 className="work_header wow fadeInUp">Work</h2>
            </div>
            <hr className="hr wow fadeInUp"/>
            </div>
        );
    }
}

export default Header;