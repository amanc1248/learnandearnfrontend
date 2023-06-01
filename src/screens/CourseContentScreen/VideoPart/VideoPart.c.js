import { useContext, useEffect, useState } from "react";
import { CourseContentContext } from "../CourseContent.c";
import { VideoPartP } from "./VideoPart.p";
import videoUtils from "../../../utils/video.utils";

export const VideoPartC = ({ singleContent }) => {
  // data
  const playerConfig = {
    file: {
      attributes: {
        controlsList: "nodownload",
      },
    },
  };

  const { module, content } = singleContent;
  const courseContentContext = useContext(CourseContentContext);
  const { entireContent, changeContent } = courseContentContext;
  console.log("Single content: ", singleContent);

  // USE STATES
  const [videoAccessible, setVideoAccessible] = useState();

  // FUNCTIONS
  // 1. handle when clicked on previous
  const handlePrevious = () => {
    const currentModuleIndex = entireContent.findIndex(
      (singleModule) => singleModule.modules._id === module._id
    );
    console.log(currentModuleIndex);
    const currentModule = entireContent[currentModuleIndex];

    // find selected content index
    const selectedContentIndex = currentModule.modules.contents.findIndex(
      (obj) => obj._id === singleContent.content._id
    );
    console.log(
      "The selected content index: ::::::::::::",
      selectedContentIndex
    );
    const response = videoUtils.handlePrevious({
      currentlySelected: singleContent,
      currentModuleWithIndex: { currentModule, currentModuleIndex },
      type: "next",
      selectedContentIndex,
      entireContent: entireContent,
    });

    changeContent(response);
  };

  // 2. handle when clicked on next
  const handleNext = () => {
    const currentModuleIndex = entireContent.findIndex(
      (singleModule) => singleModule.modules._id === module._id
    );
    console.log(currentModuleIndex);
    const currentModule = entireContent[currentModuleIndex];

    // find selected content index
    const selectedContentIndex = currentModule.modules.contents.findIndex(
      (obj) => obj._id === singleContent.content._id
    );
    console.log(
      "The selected content index: ::::::::::::",
      selectedContentIndex
    );
    const response = videoUtils.handleNext({
      currentlySelected: singleContent,
      currentModuleWithIndex: { currentModule, currentModuleIndex },
      type: "next",
      selectedContentIndex,
      entireContent: entireContent,
    });

    changeContent(response);
  };

  // USE EFFECT
  useEffect(() => {
    if (singleContent) {
      console.log("ghjklhjk: ", singleContent)
      const value =
        module?.access === "Free" && content?.access === "Free" ? "access" : "denied";
      setVideoAccessible(value);
    }
  });
  return (
    <VideoPartP
      videoUrl={content?.videoUrl}
      handlePrevious={handlePrevious}
      handleNext={handleNext}
      entireContent={entireContent}
      playerConfig={playerConfig}
      videoAccessible={videoAccessible}
    ></VideoPartP>
  );
};
