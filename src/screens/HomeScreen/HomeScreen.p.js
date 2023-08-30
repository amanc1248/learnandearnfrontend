import "../../styles/homeScreen.css";
import "../../styles/buttons.css";
import {
  
} from "@fortawesome/free-solid-svg-icons";
export const HomeScreenP = ({
  showRegistrationModal,
  showHideRegistrationModal,
}) => {
  const openNewTab = () => {
    const url = "https://web.whatsapp.com/send?phone=9804355969"; // Replace with your desired URL
    window.open(url, '_blank');
  };
  return (
    <div className="row home_screen_firstPart g-0">
      <div className="col-lg-6 col-12">
        <div className="home__screen__firstPart__text">
          Be a professional, job ready{" "}
          <span className="full__stack__developer__text">
            Full Stack Engineer.
          </span>
          <div className="100%_job_text">
            100%{" "}
            <span className="job_guranteed_course_span">
              Job/internship money back guranteed course
            </span>
          </div>
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
            <li>
              From crafting engaging user interfaces using HTML, CSS, and
              JavaScript, to building robust server-side applications with
              databases and frameworks, students will master the entire spectrum
              of tools needed to thrive as a professional full-stack web
              developer.
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
          src="https://res.cloudinary.com/proudposhak-com/image/upload/v1693318189/home_page_banner_rkoseq.png"
          alt="coding__kid"
        />
      </div>

      <div className="course__content_topics row">
        <div className="course__content__single__topic col-lg-6 col-md-6 col-12">
          <div className="single__topic__div">
            <div className="top__border__single__topic"></div>
            <div className="topic__and__number__div">
              <div className="topic__text">Industry Ready Coding</div>
              <div className="topic__text__number">1.</div>
            </div>
          </div>
        </div>
        <div className="course__content__single__topic col-lg-6 col-md-6 col-12">
          <div className="single__topic__div">
            <div className="top__border__single__topic"></div>
            <div className="topic__and__number__div">
              <div className="topic__text">MERN stack</div>
              <div className="topic__text__number">2.</div>
            </div>
          </div>
        </div>
        <div className="course__content__single__topic col-lg-6 col-md-6 col-12">
          <div className="single__topic__div">
            <div className="top__border__single__topic"></div>
            <div className="topic__and__number__div">
              <div className="topic__text">Learn job approach techniques</div>
              <div className="topic__text__number">3.</div>
            </div>
          </div>
        </div>

        <div className="course__content__single__topic col-lg-6 col-md-6 col-12">
          <div className="single__topic__div">
            <div className="top__border__single__topic"></div>
            <div className="topic__and__number__div">
              <div className="topic__text">Work on real world projects</div>
              <div className="topic__text__number">4.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="lets__chat__div" onClick={openNewTab}>
        <img className="lets__chat__image" src="https://ca.slack-edge.com/T01FR3059H9-U03SF8DAALQ-728e06104ac4-512" height={50}></img>
        Let's chat...
      </div>
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <img height={70} src="https://res.cloudinary.com/proudposhak-com/image/upload/v1693410639/CODE_PRO_NEPAL_gzuri4.png"></img>
      </a>
      <span class="mb-3 mb-md-0 text-muted"> Company, Inc</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-muted" href="https://www.facebook.com/profile.php?id=61550555022404">FACEBOOK</a></li>
      <li class="ms-3"><a class="text-muted" href="#">amanc1248@gmail.com</a></li>
      <li class="ms-3"><a class="text-muted" href="#">Whatsapp: 9804355969</a></li>
    </ul>
  </footer>
    </div>
  );
};
