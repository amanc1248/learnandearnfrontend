import { ContentPartC } from "./ContentPart/ContentPart.c";
import { CourseContentHeaderC } from "./CourseContentHeader/CourseContentHeader.c";
import { VideoPartC } from "./VideoPart/VideoPart.c";

export const CourseContentP = () => {
  return (
    <div>
      <CourseContentHeaderC></CourseContentHeaderC>
      <div className="row g-0">
        <VideoPartC></VideoPartC>
        <ContentPartC></ContentPartC>
      </div>
    </div>
  );
};
