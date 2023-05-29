import { SingleSectionC } from "./SingleSection/SingleSection.c";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
export const ContentPartP = ({
  changeVideoURL,
  videoURL,
  loading,
  courseData,
}) => {
  useEffect(() => {
    const courseContentDiv = document.querySelector(".course__content__div");
    const handleScroll = () => {
      if (window.pageYOffset > courseContentDiv.offsetTop) {
        courseContentDiv.style.top = "0";
      } else {
        courseContentDiv.style.top = "";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="col-lg-1">
      <div className="course__content__div">
        <div className="course__content__title__div">
          <div className="course__content__title">Course Content</div>
          <FontAwesomeIcon icon={faXmark} style={{ fontSize: "20px" }} />
        </div>
        <div className="course__content__list__div">
          {courseData &&
            courseData.map((module) => {
              return (
                <div key={module.modules._id}>
                  <SingleSectionC
                    sectionData={module.modules}
                    changeVideoURL={changeVideoURL}
                    videoURL={videoURL}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
