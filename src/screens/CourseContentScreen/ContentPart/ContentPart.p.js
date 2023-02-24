import { courseData } from "../../../datas/CourseData";
import { SingleSectionC } from "./SingleSection/SingleSection.c";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
export const ContentPartP = () => {
  return (
    <div className="course__content__div">
      <div className="course__content__title__div">
        <div className="course__content__title">Course Content</div>
        <FontAwesomeIcon icon={faXmark} style={{fontSize:"20px"}} />
      </div>
      <div className="course__content__list__div">
      {courseData.map((course) => {
        return (
          <SingleSectionC
            sectionData={course}
            key={courseData.sectionId}
          ></SingleSectionC>
        );
      })}
      </div>
    </div>
  );
};
