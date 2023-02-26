import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import { CourseContentScreen } from "./screens/CourseContentScreen/index";
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomeScreen/>}></Route>
          <Route path="/fullstack-web-development" element = {<CourseContentScreen/>}></Route>
        </Routes>
    </Router>
  );
}

export default App;
