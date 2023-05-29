import { useContext, useEffect, useState } from "react";
import { ContentPartP } from "./ContentPart.p";
import { getFromLocalStorage } from "../../../utils/localStorage.utils";
import { USER_TOKEN_CONSTANT } from "../../../constants/localstorage.constants";
import { getCourse } from "../../../actions/course.actions";
import { CourseContentContext } from "../CourseContent.c";
import { useSelector, useDispatch } from "react-redux";
import { setEntireContent } from "../../../reducers/courseReducer";

export const ContentPartC = ({ changeVideoURL, videoURL }) => {
  // use selector
  const course = useSelector((state) => state.course);

  // use states
  const [courseData, setCourseData] = useState();
  const [loading, setLoading] = useState(false);

  // use dispatch
  const dispatch = useDispatch();

  // use context
  const courseContentContext = useContext(CourseContentContext);
  const { changeContent, changeEntireContent } = courseContentContext;

  // use effects
  useEffect(() => {
    setLoading(true);
    const userToken = getFromLocalStorage(USER_TOKEN_CONSTANT);
    getCourse({ token: userToken, courseId: "646cd0cdf88e60b04c53dc28" })
      .then((response) => {
        dispatch(setEntireContent(response));
        setCourseData(response);
        changeEntireContent(response);
        setLoading(false);
        const { access, description, duration, title, _id } =
          response[0].modules;
        const module = { access, description, duration, title, _id };
        const content = response[0].modules.contents[0];
        changeContent({ module, content });
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  return (
    <ContentPartP
      changeVideoURL={changeVideoURL}
      videoURL={videoURL}
      loading={loading}
      courseData={courseData}
    ></ContentPartP>
  );
};
