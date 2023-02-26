import "../../../styles/CourseContent.css";
import { VideoDescriptionC } from "./VideoDescription/VideoDescription.c";
export const VideoPartP = ({ videoURL }) => {
  return (
    <div className="col-lg-9">
      <iframe
        className="video__div"
        src={videoURL}
        width="640"
        height="564"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        title="lecture"
      ></iframe>
      <VideoDescriptionC></VideoDescriptionC>
    </div>
  );
};
