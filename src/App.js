import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import { CourseContentScreen } from "./screens/CourseContentScreen/index";
import { OverViewScreen } from "./screens/OverviewScreen/OverviewScreen";
import { AdminLoginScreenC } from "./screens/Admin/AdminLoginScreen/AdminLoginScreen.c";
import { AdminDashboardScreen } from "./screens/Admin/AdminDashboard/AdminDashboard";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/overview/:id?" element={<OverViewScreen />}></Route>
        <Route
          path="/fullstack-web-development"
          element={<CourseContentScreen />}
        ></Route>

        {/* admin routes */}
        <Route
          path="/admin/login"
          element={<AdminLoginScreenC></AdminLoginScreenC>}
        ></Route>
        <Route
          path="/admin/dashboard"
          element={<AdminDashboardScreen></AdminDashboardScreen>}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
