import "../../../styles/videoPart.css"
export const VideoDescriptionP = ({content}) => {
  const {module, content: courseContent} = content;
  return (
    <div className="video__description__div">
      <div className="video__description__types__div">
        <div className="video__overview__div video__description__type">{courseContent.description}</div>
      </div>
    </div>
  );
};
