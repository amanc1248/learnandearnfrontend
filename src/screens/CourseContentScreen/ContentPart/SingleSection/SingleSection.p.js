import "../../../../styles/CourseContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { SingleTopicC } from "./SingleTopic/SingleTopic.c";

export const SingleSectionP = ({
  sectionData,
  showSectionTopics,
  toggleShowSectionTopics,
  changeVideoURL,
  videoURL
}) => {
  return (
    <div className="course__section__div">
      <div
        className="course__section__title__div"
        onClick={toggleShowSectionTopics}
      >
        <div>
          Section {sectionData.sectionNumber}: <span> </span>
          {sectionData.sectionTitle}
        </div>
        {showSectionTopics ? (
          <FontAwesomeIcon icon={faAngleUp} />
        ) : (
          <FontAwesomeIcon icon={faAngleDown} />
        )}
      </div>
      <div className="course__section__total__videos__and__length__div">
        {sectionData.sectionTopics.map}
      </div>
      {showSectionTopics && (
        <div className="course__section__topics__div">
          {sectionData.sectionTopics.map((sectionTopic, index) => {
            return (
              <SingleTopicC
                index={index}
                key={sectionTopic.section_topic_id}
                singleTopic={sectionTopic}
                changeVideoURL={changeVideoURL}
                videoURL={videoURL}
              ></SingleTopicC>
            );
          })}
        </div>
      )}
    </div>
  );
};
