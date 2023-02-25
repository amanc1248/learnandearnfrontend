import { courseData } from "../../../datas/CourseData";
import { SingleSectionC } from "./SingleSection/SingleSection.c";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
export const ContentPartP = () => {
  useEffect(() => {
    const courseContentDiv = document.querySelector(".course__content__div");
    const handleScroll = () => {
      if (window.pageYOffset > courseContentDiv.offsetTop) {
        courseContentDiv.style.top = "0";
      }else{
        courseContentDiv.style.top = "";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = (ref) => {
    console.log("scrollToTop", ref)
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="col-lg-3">
      <div className="course__content__div">
        <div className="course__content__title__div">
          <div className="course__content__title">Course Content</div>
          <FontAwesomeIcon icon={faXmark} style={{ fontSize: "20px" }} />
        </div>
        <div className="course__content__list__div">
          {courseData.map((course) => {
              const ref = React.createRef();
            return (
              <div key={course.sectionId} onClick={() => scrollToTop(ref)} ref={ref} >
                <SingleSectionC sectionData={course} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
