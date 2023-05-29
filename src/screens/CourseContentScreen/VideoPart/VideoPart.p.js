import { useState } from "react";
import "../../../styles/CourseContent.css";
import { VideoDescriptionC } from "./VideoDescription.c";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";

export const VideoPartP = ({ videoUrl, handlePrevious, handleNext }) => {
  // const handlePrevious = () => {
  //   setCurrentVideoIndex(prevIndex => (prevIndex - 1 >= 0 ? prevIndex - 1 : videoUrls.length - 1));
  // };

  // const handleNext = () => {
  //   setCurrentVideoIndex(prevIndex => (prevIndex + 1 < videoUrls.length ? prevIndex + 1 : 0));
  // };
  const playerConfig = {
    file: {
      attributes: {
        controlsList: "nodownload",
      },
    },
  };
  return (
    <div className="col-lg-9">
      <ReactPlayer
        url={videoUrl}
        controls
        config={playerConfig}
        width={"100%"}
      />
      <div className="previous__next__button__div">
        {/* <button>Previous</button>
        <button>Next</button> */}
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
    </div>
  );
};
