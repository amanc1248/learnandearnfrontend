import "../../../styles/CourseContent.css";
import { VideoDescriptionC } from "./VideoDescription/VideoDescription.c";
export const VideoPartP = () => {
  return (
    <div className="col-lg-9">
      {/* <video className="video__div" controls>
        <source
          src="https://player.vimeo.com/video/802170404?h=c4ac34b4b3"
          type="video/mp4"
        />
        
        Your browser does not support the video tag.
      </video> */}
      <iframe className="video__div" src="https://player.vimeo.com/video/802170404?h=c4ac34b4b3" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      <VideoDescriptionC></VideoDescriptionC>
    </div>
  );
};
