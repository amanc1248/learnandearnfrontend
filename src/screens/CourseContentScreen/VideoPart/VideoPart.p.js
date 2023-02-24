import "../../../styles/CourseContent.css";
import { VideoDescriptionC } from "./VideoDescription/VideoDescription.c";
export const VideoPartP = () => {
  return (
    <div>
      <video className="video__div" controls>
        <source
          src="https://www.youtube.com/watch?v=NlfHbwQ8M3o"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <VideoDescriptionC></VideoDescriptionC>
    </div>
  );
};
