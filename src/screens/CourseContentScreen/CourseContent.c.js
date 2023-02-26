import React, { useState } from "react";
import { CourseContentP } from "./CourseContent.p";

export const CourseContentC = () => {
  // use states
  const [videoURL, setVideoURL] = useState();

  //functions
  const changeVideoURL = (value) => {
    setVideoURL(value);
  };
  return (
    <CourseContentP changeVideoURL={changeVideoURL} videoURL={videoURL}></CourseContentP>
  );
};
