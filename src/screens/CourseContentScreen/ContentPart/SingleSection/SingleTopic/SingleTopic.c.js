import { SingleTopicP } from "./SingleTopic.p";

export const SingleTopicC = ({ singleTopic, index, changeVideoURL, videoURL }) => {

  return (
    <SingleTopicP
      singleTopic={singleTopic}
      index={index}
      changeVideoURL={changeVideoURL}
      videoURL={videoURL}
    ></SingleTopicP>
  );
};
