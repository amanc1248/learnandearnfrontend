import "../../../styles/paymentAndPlan.css";
import { BillingHistoryC } from "./BillingHistory/BillingHistory.c";
import { PurchaseDetailsC } from "./PurchaseDetails/PurchaseDetails.c";
export const PaymentAndPlanP = ({ tabsList, handleChangeTab, activeTab }) => {
  return (
    <div>
      <div className="overviewScreenList__tab__title">Payment And Plan</div>
      <div className="paymentDetails__and__billingHistory__tabs">
        {tabsList.map((tab) => {
          return (
            <div key={tab.id} className={`pDbHT_single ${tab.id===activeTab && "selected__pDbHT_single"}`} onClick={()=>{handleChangeTab(tab.id)}}>
              {tab.name}
            </div>
          );
        })}
      </div>
      <div className="tab__content">
        {activeTab===0 && <PurchaseDetailsC></PurchaseDetailsC>}
        {activeTab===1 && <BillingHistoryC></BillingHistoryC>}
      </div>
    </div>
  );
};
