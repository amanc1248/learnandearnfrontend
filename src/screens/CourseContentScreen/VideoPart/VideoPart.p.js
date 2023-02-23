import "../../../styles/CourseContent.css"
export const VideoPartP = () => {
  return (
      <video className="video__div" controls>
        <source
          src="https://www.youtube.com/watch?v=NlfHbwQ8M3o"
          type="video/mp4"
        />
         Your browser does not support the video tag.
      </video>
  );
};
