import { useContext, useEffect, useState } from "react";
import { VideoPartHocP } from "./VideoPart.hoc.p";
import { checkIsUserPro } from "../../actions/users.actions";
import { getFromLocalStorage } from "../../utils/localStorage.utils";
import { USER_TOKEN_CONSTANT } from "../../constants/localstorage.constants";
import { CourseContentContext } from "../../screens/CourseContentScreen/CourseContent.c";

export const VideoPartHOC = ({ singleContent }) => {
  const { module, content } = singleContent;

//   use context
const courseContentContext = useContext(CourseContentContext);
const {content:courseSingleVideo} = courseContentContext;
  // USE STATES
  const [videoAccessible, setVideoAccessible] = useState();
  const [isUserPro, setIsUserPro] = useState();
  const [checkingUser, setCheckingUser] = useState(false);

  // USE EFFECT
  // 1. check if user is pro or not
  useEffect(() => {
    setCheckingUser(true)
    const token = getFromLocalStorage(USER_TOKEN_CONSTANT);
    checkIsUserPro({ token })
      .then((response) => {
        setIsUserPro(response);
        setCheckingUser(false)
      })
      .catch((error) => {
        setCheckingUser(false)
      });
  }, [courseSingleVideo]);

  useEffect(() => {
    if (singleContent) {
      const value =
        module?.access === "Free" && content?.access === "Free"
          ? "Free"
          : "Pro";
      setVideoAccessible(value);
    }
  });

  return (
    <VideoPartHocP
      isUserPro={isUserPro}
      videoAccessible={videoAccessible}
      singleContent={singleContent}
      checkingUser={checkingUser}
    ></VideoPartHocP>
  );
};
