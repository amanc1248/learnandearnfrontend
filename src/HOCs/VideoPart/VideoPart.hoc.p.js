import { UpgradeToProC } from "../../screens/CourseContentScreen/VideoPart/UpgradeToPro.c";
import { VideoPartC } from "../../screens/CourseContentScreen/VideoPart/VideoPart.c";

export const VideoPartHocP = ({
  isUserPro,
  videoAccessible,
  singleContent,
  checkingUser,
}) => {
  if (checkingUser) {
    return <div className="col-lg-9">Checking...</div>;
  }
  if ((isUserPro || videoAccessible === "Free") && !checkingUser) {
    return <VideoPartC singleContent={singleContent}></VideoPartC>;
  }
  if ((isUserPro === false || videoAccessible === "Pro") && !checkingUser) {
    return <UpgradeToProC></UpgradeToProC>;
  }
};
