import { ContentPartC } from "./ContentPart/ContentPart.c";
import { CourseContentHeaderC } from "./CourseContentHeader/CourseContentHeader.c";
import { VideoPartC } from "./VideoPart/VideoPart.c";

export const CourseContentP = ({ changeVideoURL, videoURL }) => {
  return (
    <div>
      <CourseContentHeaderC></CourseContentHeaderC>
      <div className="row g-0">
        <VideoPartC videoURL={videoURL}></VideoPartC>
        <ContentPartC changeVideoURL={changeVideoURL} videoURL={videoURL}></ContentPartC>
      </div>
    </div>
  );
};