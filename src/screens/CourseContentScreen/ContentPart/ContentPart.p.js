import { courseData } from "../../../datas/CourseData"
import { SingleSectionC } from "./SingleSection/SingleSection.c"

export const ContentPartP = ()=>{
    return <div>
        <h5>Course Content</h5>
        {courseData.map((course)=>{
            return <SingleSectionC sectionData={course} key={courseData.sectionId}></SingleSectionC>
        })}
    </div>
}