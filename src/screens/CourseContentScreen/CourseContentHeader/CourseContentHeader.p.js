import "../../../styles/courseContentHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare, faAngleDown } from "@fortawesome/free-solid-svg-icons";
export const CourseContentHeaderP = () => {
  return (
    <div className="course__content__header__div row g-0">
      <div className="course__content__header__first__part col-lg-9 col-12">
        <div className="course__logo__div">
          <img
            className="course__logo"
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
            alt="course__logo"
          />
        </div>
        <div className="course__name__div">
          The Complete Full Stack Web Development Course
        </div>
      </div>
      <div className="course__content__header__second__part col-lg-3 col-12">
        <div className="get__certificate__div">Get Certificate</div>
        <div className="share__course__div">
          <div className="share__course__text">Share</div>
          <FontAwesomeIcon icon={faShare} style={{ fontSize: "15px" }} />
        </div>
        <div className="share__course__more__div">
          <FontAwesomeIcon icon={faAngleDown} style={{ fontSize: "15px" }} />
        </div>
      </div>
    </div>
  );
};
