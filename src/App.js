import "./App.css";
import "./bootstrap.min.css";
import Navbar from "./Components/Navbar";
import OverView from "./Components/OverView";

import IconCard from "./Components/IconCard";

import Courses from "./Components/Courses";
import TestiMonial from "./Components/TestiMonial";
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <OverView />
      <IconCard />
      <Courses />
      <TestiMonial />
      <Footer />
    </div>
  );
}

export default App;
