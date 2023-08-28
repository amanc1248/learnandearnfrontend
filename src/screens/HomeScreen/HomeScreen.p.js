import "../../styles/homeScreen.css";
import "../../styles/buttons.css";
export const HomeScreenP = ({
  showRegistrationModal,
  showHideRegistrationModal,
}) => {
  return (
    <div className="row home_screen_firstPart g-0">
      <div className="col-lg-6 col-12">
        <div className="home__screen__firstPart__text">
          Be a professional, job ready{" "}
          <span className="full__stack__developer__text">
            Full Stack Engineer.
          </span>
          <div className="100%_job_text">100% <span className="job_guranteed_course_span">Job/internship money back guranteed course</span></div>
        </div>
        <div className="homeScreen__courseOverview__list">
          <ul>
            <li>
              Coding classes which prepares for the demands of the industry by
              learning the latest technologies and adhering to industry best
              practices.
            </li>
            <li>
              Get hands-on experience by working on real-world projects that
              simulate industry challenges.{" "}
            </li>
            <li>From crafting engaging
              user interfaces using HTML, CSS, and JavaScript, to building
              robust server-side applications with databases and frameworks,
              students will master the entire spectrum of tools needed to thrive
              as a professional full-stack web developer.
            </li>
          </ul>
        </div>
        <div
          className="enroll__for__free__button button__width"
          onClick={() => {
            showHideRegistrationModal(true);
          }}
        >
          Start Your Coding Journey
        </div>
      </div>
      <div className="col-lg-6 col-12">
        <img
          className="coding__kid__image"
          src="https://res.cloudinary.com/proudposhak-com/image/upload/v1693242126/banner_p8t0lu.png"
          alt="coding__kid"
        />
      </div>
    </div>
  );
};
