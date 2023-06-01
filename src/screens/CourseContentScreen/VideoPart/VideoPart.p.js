import "../../../styles/CourseContent.css";
import { VideoDescriptionC } from "./VideoDescription.c";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import { UpgradeToProC } from "./UpgradeToPro.c";

export const VideoPartP = ({
  videoUrl,
  handlePrevious,
  handleNext,
  playerConfig,
  videoAccessible,
}) => {
  return (
    <div className="col-lg-9">
      {videoAccessible==="access" && <div>
        <ReactPlayer
          url={videoUrl}
          controls
          config={playerConfig}
          width={"100%"}
        />
        <div className="previous__next__button__div">
          <div className="previous__next__button">
            <FontAwesomeIcon
              icon={faBackward}
              onClick={() => {
                handlePrevious();
              }}
            />
            <div>Previous</div>
          </div>
          <div className="previous__next__button">
            <FontAwesomeIcon
              icon={faForward}
              onClick={() => {
                handleNext();
              }}
            />
            <div>Next</div>
          </div>
        </div>
        <VideoDescriptionC></VideoDescriptionC>
      </div>}
      {videoAccessible==="denied" && <UpgradeToProC></UpgradeToProC>   }
    </div>
  );
};
