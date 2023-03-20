import { Link } from "react-router-dom";
import "../../../styles/overviewScreen.css";
export const LearningP = () => {
  return (
    <div>
      <div className="overviewScreenList__tab__title">Your Learnings</div>
      <div>Full Stack Engineer</div>
      <Link to="/fullstack-web-development">
        <button>Resume Your Learning</button>
      </Link>
    </div>
  );
};
