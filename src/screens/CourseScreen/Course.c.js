import { courseData } from "../../datas/CourseData";

export const CourseC = () => {
  return (
    <div>
      {courseData.map((section, index) => {
        return (
          <div key={section.sectionId}>

            <h2>Section {index+1}: {section.sectionTitle}</h2>
            <h6>{section.sectionDescription}</h6>
            <ul>
                {section.sectionTopics.map((subTopic, index)=>{
                    return <li key={subTopic.section_topic_id}> 
                        {subTopic.section_topic_title}
                    </li>
                })}
            </ul>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
