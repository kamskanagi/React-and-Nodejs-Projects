
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Section1 from '../sections/Firstsection'
import "./shortcut.scss"
import Section2 from '../sections/Secondsection';
import Section3 from '../sections/Section3';




const Shortcut = () => {

  // const [selectedSection, setSelectedSection] = useState('section1');
  // const [previousSection, setPreviousSection] = useState(null);

  // Use a Set to store the sidebar link names
  const [selectedSections, setSelectedSections] = useState(new Set(['']));
  const [previousSection, setPreviousSection] = useState(null);


  // useEffect(() => {
  //   setSelectedSections('section1');
  // }, []);
  // const deleteDiv= () =>{
  //   const closeDiv = document.querySelector('.close-icon');
  //   const shortDivs = document.querySelector('.shortDivs');

  //   closeDiv.addEventListener('click', () => {
  //     shortDivs.style.display = 'none';
  //   });
  // }

  // JavaScript code
const deleteIcons = document.querySelectorAll('.close-icon');

deleteIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    const item = icon.parentElement;
    item.remove();
  });
});

  
  const renderContent = () => {
    // Create an array of the selected section names in the order they appear in the Set
    const sections = Array.from(selectedSections);

    //const sectionHeight = ``;

    return sections.map((section, index) => {
      switch (section) {
        case 'section1':
          return (
            <div
              key={index}
              className="shortDivs"
            ><span className="close-icon themes--light" >&times;</span>

              <Section1 />
            </div>
          );
        case 'section2':
          return (
            <div
              key={index}
              className="shortDivs"
            ><span className="close-icon" >&times;</span>
              <Section2 />
            </div>
          );
        case 'section3':
          return (
            <div
              key={index}
              className="shortDivs"
            ><span className="close-icon">&times;</span>
              <Section3 />
            </div>
          );
        default:
          return null;
      }
    });
  };








    // Render each section in the order they appear in the Set
  //   return sections.map((section, index) => {
  //     switch (section) {
  //       case 'section1':
  //         return (
  //           <React.Fragment key={index}>
  //             <Section1 />
  //             {previousSection === 'section2' && <Section2 />}
  //             {previousSection === 'section3' && <Section3 />}
  //           </React.Fragment>
  //         );
  //       case 'section2':
  //         return (
  //           <React.Fragment key={index}>
  //             {previousSection === 'section1' && <Section1 />}
  //             <Section2 />
  //             {previousSection === 'section3' && <Section3 />}
  //           </React.Fragment>
  //         );
  //       case 'section3':
  //         return (
  //           <React.Fragment key={index}>
  //             {previousSection === 'section1' && <Section1 />}
  //             {previousSection === 'section2' && <Section2 />}
  //             <Section3 />
  //           </React.Fragment>
  //         );
  //       default:
  //         return "";
  //     }
  //   });
  // };

  // const handleSectionChange = (section) => {
  //   // setPreviousSection(selectedSection);
  //   // setSelectedSection(section);
  //   console.log(section)
  //   if (!selectedSections.has(section)) {
  //     setPreviousSection(Array.from(selectedSections).pop());
  //     setSelectedSections(new Set([...selectedSections, section]));
  //   }
  // };

  const handleSectionChange = (section) => {
    if (!selectedSections.has(section)) {
      setSelectedSections(new Set([...selectedSections, section]));
    }
  };


  return (

    
    <div className='shortcut'>
        <Sidebar handleSectionChange={handleSectionChange} />
      <div className="shortContainer"> 
          <Navbar />
          {/* <div className="sport"> 
              hi
              <iframe     <Sidebar setSelectedSection={setSelectedSection} />
              title="Sport"
              src="https://118.99.175.234/sportgear/"
              width="100%"
              height="600"
              frameborder="0"
              />
          </div> */}
      
          {renderContent()}
       </div>
     </div>
  )
}




export default Shortcut
