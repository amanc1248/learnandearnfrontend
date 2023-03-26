import "../../styles/overviewScreen.css";
import { AccountC } from "./Account/Account.c";
import { LearningC } from "./Learning/Learning.c";
import { PaymentAndPlanC } from "./PaymentAndPlan/PaymentAndPlan.c";
export const OverviewScreenP = ({
  overviewActiveTab,
  handleOverviewActiveTab,
  overviewList,
}) => {
  return (
    <div className="overviewScreen__div">
      <h4>Code Valley</h4>
      <div className="overview__screen__content__div row ">
        <div className="overview__screen__sidebar col-lg-3 col-md-4 col-12">
          <ul className="overview__screen__sidebar__list">
            {overviewList.map((ol, index) => {
              return (
                <li
                  key={ol.id}
                  className={`sidebar__individual ${ol.id+1===overviewActiveTab && "sidebar__individual__active"} `}
                  onClick={() => {
                    handleOverviewActiveTab(ol.id+1);
                  }}
                >
                  {ol.text}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="overview__screen__sidebar__content col-lg-9 col-md-8 col-12">
          {overviewActiveTab === 1 && <LearningC></LearningC>}
          {overviewActiveTab === 2 && <AccountC></AccountC>}
          {overviewActiveTab === 3 && <PaymentAndPlanC></PaymentAndPlanC>}
        </div>
      </div>
    </div>
  );
};
