import React from "react";
import Headroom from "react-headroom";
import { useHistory } from "react-router-dom";
import "./Header.css";


function Header() {

  const history = useHistory();

  return (
    <Headroom>
      <header className={"header"}>
        <a href="/" className="logo">
          
          <span className="logo-name">Md Tanvir Hasan Tanshen</span>
          
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={"navicon"}></span>
        </label>
        <ul className={"menu"}> 
          
            <li>
              <a  className="header-sub-menu" onClick={()=> history.push('/my-skills')}>Skills</a>
            </li>
         
         
            <li>
              <a  className="header-sub-menu" onClick={()=> history.push('/my-projects')}>Work Experiences</a>
            </li>
         
          
            <li>
              <a  className="header-sub-menu" onClick={()=> history.push('/my-education')}>Education</a>
            </li>
         
          
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
