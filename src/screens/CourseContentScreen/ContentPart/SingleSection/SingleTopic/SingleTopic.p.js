import "../../../../../styles/CourseContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
export const SingleTopicP = ({ singleTopic, index }) => {
  return (
    <div className="course__section__single__topic__div">
      <div className="course__section__single__topic__title__div">
        {index + 1}: {singleTopic.section_topic_title}
      </div>
      <div className="video__icon__and__length__div">
        <FontAwesomeIcon icon={faCirclePlay} className="video__play__icon"/>
        <div className="video__length__div">
          {singleTopic.videoLength} min
        </div>
      </div>
    </div>
  );
};
