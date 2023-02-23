import { useState } from "react";
import { SingleSectionP } from "./SingleSection.p";

export const SingleSectionC = ({ sectionData }) => {

    //use states 
  const [showSectionTopics, setShowSectionTopics] = useState(false);

//functions
const toggleShowSectionTopics = ()=>{
    setShowSectionTopics(!showSectionTopics)
}   
  return (
    <SingleSectionP
      sectionData={sectionData}
      showSectionTopics={showSectionTopics}
      toggleShowSectionTopics={toggleShowSectionTopics}
    ></SingleSectionP>
  );
};
