import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Section1 from '../sections/Firstsection';
import "./shortcut.scss";
import Section2 from '../sections/Secondsection';
import Section3 from '../sections/Section3';

const Shortcut = () => {
  const [selectedSections, setSelectedSections] = useState([]);

  const handleSectionChange = (section) => {
    setSelectedSections((prevSelectedSections) => {
      if (!prevSelectedSections.includes(section)) {
        return [...prevSelectedSections, section];
      }
      return prevSelectedSections;
    });
  };

  const handleSectionClose = (section) => {
    setSelectedSections((prevSelectedSections) => {
      return prevSelectedSections.filter((s) => s !== section);
    });
  };

  const renderContent = () => {
    return selectedSections.map((section) => {
      switch (section) {
        case 'section1':
          return (
            <div key="section1" className="shortDivs">
              <span className="close-icon" onClick={() => handleSectionClose('section1')}>&times;</span>
              <Section1 />
            </div>
          );
        case 'section2':
          return (
            <div key="section2" className="shortDivs">
              <span className="close-icon" onClick={() => handleSectionClose('section2')}>&times;</span>
              <Section2 />
            </div>
          );
        case 'section3':
          return (
            <div key="section3" className="shortDivs">
              <span className="close-icon" onClick={() => handleSectionClose('section3')}>&times;</span>
              <Section3 />
            </div>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div className="shortcut">
      <Sidebar handleSectionChange={handleSectionChange} />
      <div className="shortContainer">
        <Navbar />
        {renderContent()}
      </div>
    </div>
  );
};

export default Shortcut;
