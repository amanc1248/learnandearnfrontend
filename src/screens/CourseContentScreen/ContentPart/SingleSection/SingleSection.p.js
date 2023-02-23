import "../../../../styles/CourseContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";

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
        {showSectionTopics ? <FontAwesomeIcon icon={solid("angle-up")} style={{fontSize:"15px"}} /> :<FontAwesomeIcon icon={solid("angle-down")} style={{fontSize:"15px"}} /> }
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
