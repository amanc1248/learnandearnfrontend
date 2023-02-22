import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { HeaderC } from './components/header/header.c';
import { HomeScreenC } from './screens/CourseScreen/HomeScreen/HomeScreen.c';

function App() {
  return (
    <div className="App">
      <HeaderC></HeaderC>
      {/* <HomeScreenC></HomeScreenC> */}
    </div>
  );
}

export default App;
