import { ContentPartC } from "./ContentPart/ContentPart.c";
import { VideoPartC } from "./VideoPart/VideoPart.c";

export const CourseContentP = () => {
  return (
    <div className="row no-gutters">
      <div className="col-lg-9">
        <VideoPartC></VideoPartC>
      </div>
      <div className="col-lg-3">
        <ContentPartC></ContentPartC>
      </div>
    </div>
  );
};
