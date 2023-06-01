import React, { createContext, useState } from "react";
import { CourseContentP } from "./CourseContent.p";
export const CourseContentContext = createContext();
export const CourseContentC = () => {
  // use states
  const [content, setContent] = useState();
  const [entireContent, setEntireContent] = useState();
  //functions
  const changeContent = (value) => {
    setContent(value);
  };

  const changeEntireContent = (value)=>{
    setEntireContent(value)
  }

  // use context
  const courseContextData = {changeContent,content, entireContent, changeEntireContent};

  return (
    <CourseContentP
      content={content}
      CourseContentContext={CourseContentContext}
      courseContextData={courseContextData}
      // entireContent={}
    ></CourseContentP>
  );
};
