import "../../../../../styles/CourseContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
export const SingleTopicP = ({
  singleTopic,
  index,
  changeContent,
  content,
}) => {
  const { module, content: singleContent } = singleTopic;
  
  return (
    // <div className={`course__section__single__topic__div ${videoURL===singleTopic.videoId && 'course__section__single__topic__div__active'}`} onClick={()=>{changeVideoURL(singleTopic.videoId)}}>
    <div
      className={`course__section__single__topic__div ${
        content.content._id + content.module._id ===
          singleContent._id + module._id &&
        "course__section__single__topic__div__active"
      }`}
      onClick={() => {
        changeContent(singleTopic);
      }}
    >
      <div className="course__section__single__topic__title__div">
        {index + 1}: {singleTopic.content.title}
      </div>
      <div className="video__icon__and__length__div">
        <FontAwesomeIcon icon={faCirclePlay} className="video__play__icon" />
        <div className="video__length__div">{singleTopic.content.duration} min</div>
      </div>
    </div>
  );
};
