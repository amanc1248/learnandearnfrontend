import { ContentPartC } from "./ContentPart/ContentPart.c";
import { CourseContentHeaderC } from "./CourseContentHeader/CourseContentHeader.c";
import { VideoPartC } from "./VideoPart/VideoPart.c";

export const CourseContentP = ({
  CourseContentContext,
  content,
  courseContextData,
}) => {
  return (
    <CourseContentContext.Provider value={courseContextData}>
      <div>
        <CourseContentHeaderC></CourseContentHeaderC>
        <div className="row g-0">
          <VideoPartC singleContent={content}></VideoPartC>
          <ContentPartC></ContentPartC>
        </div>
      </div>
    </CourseContentContext.Provider>
  );
};
