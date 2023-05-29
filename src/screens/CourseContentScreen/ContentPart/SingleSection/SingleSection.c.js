import { useContext, useEffect, useState } from "react";
import { SingleSectionP } from "./SingleSection.p";
import { CourseContentContext } from "../../CourseContent.c";

export const SingleSectionC = ({ sectionData }) => {
  // use context
  const courseContentContext = useContext(CourseContentContext);
  const { changeContent, content } = courseContentContext;
  // const {module} = content.module

  const singleContentModuleId = content.module._id;
  const sectionModuleId = sectionData._id;
  const moduleIdMatch = singleContentModuleId === sectionModuleId;
  //use states
  const [showSectionTopics, setShowSectionTopics] = useState(false);

  //functions
  const scrollToTop = (ref) => {
    console.log("upper div ref: ", ref);
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleShowSectionTopics = () => {
    setShowSectionTopics(!showSectionTopics);
  };

  useEffect(() => {
    setShowSectionTopics(moduleIdMatch);
  }, [moduleIdMatch]);
  return (
    <SingleSectionP
      sectionData={sectionData}
      showSectionTopics={showSectionTopics}
      toggleShowSectionTopics={toggleShowSectionTopics}
      scrollToTop={scrollToTop}
    ></SingleSectionP>
  );
};
