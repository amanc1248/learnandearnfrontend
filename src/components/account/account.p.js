import "../../styles/account.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faGear,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
export const AccountP = () => {
  return (
    <div className="account__p__div">
      <Link className="account__p__individual" to="/overview/1" style={{textDecoration:"none"}}>
        <FontAwesomeIcon
          className="account__login__icon"
          icon={faBook}
          style={{ fontSize: "20px"}}
        />
        <div>Learnings</div>
      </Link>
      <Link className="account__p__individual" to="/overview/2" style={{textDecoration:"none"}}>
        <FontAwesomeIcon
          className="account__login__icon"
          icon={faCircleUser}
          style={{ fontSize: "20px" }}
        />
        <div>Account</div>
      </Link>
      <Link className="account__p__individual" to="/overview/3" style={{textDecoration:"none"}}>
        <FontAwesomeIcon
          className="account__login__icon"
          icon={faGear}
          style={{ fontSize: "20px" }}
        />
        <div>Payment And Plan</div>
      </Link>
    </div>
  );
};
