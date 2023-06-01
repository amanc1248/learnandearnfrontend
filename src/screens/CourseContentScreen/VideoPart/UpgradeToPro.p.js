import "../../../styles/upgradeToPro.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../styles/component/paymentComponent.css";
import { PaymentDetailsC } from "../../OverviewScreen/PaymentAndPlan/PurchaseDetails/PaymentDetails.c";
export const UpgradeToProP = ({
  stepsGuidesList,
}) => {
  return (
    <div className="video-container">
      <div style={{ height: "95vh" }}></div>
      <div className="overlay">
        <div className="row">
          {stepsGuidesList.map((step) => {
            return (
              <div className="col-lg-6 col-md-6 col-12">
                <div className="single_overlay_single" key={step.title}>
                  <div className="icon__titles">
                    <div>
                      <FontAwesomeIcon
                        className="payment__steps__guide__list__icon"
                        icon={step?.icon}
                        style={{ fontSize: "35px" }}
                      />
                    </div>
                    <div>
                      <div className="payment__steps__guide__list__title">
                        {step?.title}
                      </div>
                      <div className="payment__steps__guide__list__description">
                        {step?.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <PaymentDetailsC></PaymentDetailsC>
      </div>
    </div>
  );
};
