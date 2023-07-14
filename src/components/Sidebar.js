import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faFlask,faChalkboard,faSheetPlastic,faWaveSquare,faBook} from '@fortawesome/free-solid-svg-icons'

import "./Sidebar.css";

const Sidebar = () => {

  return (
    <div className="sidebar-container">
      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" className="sidebar-icon"/>
          <span>Explore</span>
        </li>
        <li className="sidebar-item">
          <FontAwesomeIcon icon={faChalkboard} size="2xl"  className="sidebar-icon"/>
          <span>My Learning</span>
        </li>
        <li className="sidebar-item">
          <FontAwesomeIcon icon={faFlask} size="2xl" className="sidebar-icon" />
          <span>cloudLabs</span>
        </li>
        <li className="sidebar-item">
          <FontAwesomeIcon icon={faSheetPlastic} size="2xl" className="sidebar-icon"/>
          <span>Projects</span>
        </li>
        <li className="sidebar-item">
          <FontAwesomeIcon icon={faWaveSquare} size="2xl" className="sidebar-icon" />
          <span>Skill Paths</span>
        </li>
        <li className="sidebar-item">
          <FontAwesomeIcon icon={faBook} size="2xl" className="sidebar-icon" />
          <span>Assessment</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
