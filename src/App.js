import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import { CourseContentScreen } from "./screens/CourseContentScreen/index";
import { OverViewScreen } from "./screens/OverviewScreen/OverviewScreen";
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
      </Routes>
    </Router>
  );
}

export default App;
