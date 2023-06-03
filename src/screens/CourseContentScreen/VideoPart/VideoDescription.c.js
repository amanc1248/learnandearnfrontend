import { useContext } from "react";
import { VideoDescriptionP } from "./VideoDescription.p";
import { CourseContentContext } from "../CourseContent.c";

export const VideoDescriptionC = () => {
  const courseContentContext = useContext(CourseContentContext);
  const { content } = courseContentContext;
  return <VideoDescriptionP content={content}></VideoDescriptionP>;
};
