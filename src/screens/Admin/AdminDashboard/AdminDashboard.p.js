import "../../../styles/overviewScreen.css";
import "../../../styles/adminDashboardScreen.css";
import { AdminUsersC } from "./users/AdminUsers.c";
export const AdminDashboardP = ({
    dashboardActiveTab,
  handleDashboardActiveTab,
  dashboardList,
}) => {
  return (
    <div className="overviewScreen__div">
      <h4>Admin Dashboard</h4>
      <div className="overview__screen__content__div row ">
        <div className="overview__screen__sidebar col-lg-2 col-md-3 col-12">
          <ul className="overview__screen__sidebar__list">
            {dashboardList.map((ol, index) => {
              return (
                <li
                  key={ol.id}
                  className={`sidebar__individual ${ol.id+1===dashboardActiveTab && "sidebar__individual__active"} `}
                  onClick={() => {
                    handleDashboardActiveTab(ol.id+1);
                  }}
                >
                  {ol.text}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="overview__screen__sidebar__content col-lg-10 col-md-9 col-12">
          {dashboardActiveTab === 1 && <AdminUsersC></AdminUsersC>}
          {dashboardActiveTab === 2 && <div>2</div>}
          {dashboardActiveTab === 3 && <div>3</div>}
        </div>
      </div>
    </div>
  );
};
