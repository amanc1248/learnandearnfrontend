import { useContext } from "react";
import { SingleTopicP } from "./SingleTopic.p";
import { CourseContentContext } from "../../../CourseContent.c";

export const SingleTopicC = ({ singleTopic, index}) => {
  // use selectors
  
  // use context
  const courseContentContext = useContext(CourseContentContext);
  const {changeContent, content} = courseContentContext;
  return (
    <SingleTopicP
      singleTopic={singleTopic}
      index={index}
      changeContent={changeContent}
      content={content}
    ></SingleTopicP>
  );
};
