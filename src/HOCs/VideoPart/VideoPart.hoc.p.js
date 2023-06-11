import { VideoLoaderC } from "../../components/loader/videoLoader/videoLoader.c";
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
    return <VideoLoaderC></VideoLoaderC>;
  }
  if ((isUserPro || videoAccessible === "Free") && !checkingUser) {
    return <VideoPartC singleContent={singleContent}></VideoPartC>;
  }
  if ((isUserPro === false || videoAccessible === "Pro") && !checkingUser) {
    return <UpgradeToProC></UpgradeToProC>;
  }
};
