import "../../styles/homeScreen.css";
import "../../styles/buttons.css";
export const HomeScreenP = ({
  showRegistrationModal,
  showHideRegistrationModal,
}) => {
  return (
    <div className="row home_screen_firstPart">
      <div className="col-lg-6 col-12">
        <div className="home__screen__firstPart__text">
          Be a professional, job ready{" "}
          <span className="full__stack__developer__text">
            Full Stack Developer.
          </span>
        </div>
        <div className="homeScreen__courseOverview__list">
          <ul>
            <li>
              1-on-1 coding classes tailored to your kid's skill-level and
              interests.
            </li>
            <li>Expert teachers that kids love.</li>
            <li>
              Learn to code real-world projects like games, apps and animations.
            </li>
          </ul>
        </div>
        <div className="enroll__for__free__button button__width" onClick={()=>{showHideRegistrationModal(true)}}>
          Start Your Coding Journey
        </div>
      </div>
      <div className="col-lg-6 col-12">
        <img
          className="coding__kid__image"
          src="https://www.strivemath.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-image.caf37ccf.png&w=1920&q=75"
          alt="coding__kid"
        />
      </div>

    </div>
  );
};
