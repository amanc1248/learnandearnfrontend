import "../../../../styles/CourseContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

export const SingleSectionP = ({
  sectionData,
  showSectionTopics,
  toggleShowSectionTopics,
}) => {
  return (
    <div className="course__section__div">
      <div
        className="course__section__title__div"
        onClick={toggleShowSectionTopics}
      >
        <div>{sectionData.sectionTitle}</div>
        {showSectionTopics ? (
          <FontAwesomeIcon icon={faAngleUp} />
        ) : (
          <FontAwesomeIcon icon={faAngleDown} />
        )}
      </div>
      {showSectionTopics && (
        <div className="course__section__topics__div">
          {sectionData.sectionTopics.map((sectionTopic) => {
            return (
              <div className="course__section__topic__div">
                {sectionTopic.section_topic_title}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
