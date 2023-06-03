import { UpgradeToProC } from "../../screens/CourseContentScreen/VideoPart/UpgradeToPro.c";
import { VideoPartC } from "../../screens/CourseContentScreen/VideoPart/VideoPart.c";

export const VideoPartHocP = ({
  isUserPro,
  videoAccessible,
  singleContent,
  checkingUser,
}) => {
  console.log("isUserPro: ", isUserPro)
  console.log("videoAccessible: ", videoAccessible)
  console.log("checkingUser: ", checkingUser)
  if (checkingUser) {
    console.log("1")

    return <div className="col-lg-9">Checking...</div>;
  }
  if ((isUserPro || videoAccessible === "Free") && !checkingUser) {
    console.log("2")

    return <VideoPartC singleContent={singleContent}></VideoPartC>;
  }
  if ((isUserPro === false || videoAccessible === "Pro") && !checkingUser) {
    console.log("3")
    return <UpgradeToProC></UpgradeToProC>;
  }
};
