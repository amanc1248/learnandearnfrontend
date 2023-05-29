import "../../../../styles/CourseContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { SingleTopicC } from "./SingleTopic/SingleTopic.c";
import React, { useEffect } from "react";

export const SingleSectionP = ({
  sectionData,
  showSectionTopics,
  toggleShowSectionTopics,
  scrollToTop,
  upperDivRef
}) => {
  const {
    access,
    description,
    duration,
    instructor,
    month,
    price,
    title,
    _id,
  } = sectionData;
  const module = {
    access,
    description,
    duration,
    instructor,
    month,
    price,
    title,
    _id,
  };


  return (
    <div className="course__section__div">
      <div
        className="course__section__title__div"
        onClick={() => {
          toggleShowSectionTopics();
        }}
      >
        <div>
          {/* Section {sectionData.sectionNumber}: <span> </span> */}
          Section 1: <span> </span>
          {sectionData.title}
        </div>
        {showSectionTopics ? (
          <FontAwesomeIcon icon={faAngleUp} />
        ) : (
          <FontAwesomeIcon icon={faAngleDown} />
        )}
      </div>
      <div className="course__section__total__videos__and__length__div">
        {/* {sectionData.sectionTopics.map} */}
      </div>
      {showSectionTopics && (
        <div className="course__section__topics__div">
          {sectionData.contents.map((content, index) => {
            const moduleContent = { content, module };
            const ref = React.createRef();

            return (
              <div onClick={() => scrollToTop(ref)} ref={ref}>
                <SingleTopicC
                  index={index}
                  key={content._id}
                  singleTopic={moduleContent}
                ></SingleTopicC>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
