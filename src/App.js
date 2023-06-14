// import logo from "./logo.svg";
import "./App.css";
// import { Navlink } from "react-router-dom";
import Homepage from "./components/Homepage";
import Homepage1 from "./components/Homepage1";
import Homepage3 from "./components/Homepage3";
import { Route, Routes } from "react-router-dom";
import Boys2 from "./components/Boys2";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/1" element={<Homepage1 />} />
        <Route path="/3" element={<Homepage3 />} />
        <Route path="/boys" element={<Boys2 />} />
      </Routes>
    </div>
  );
}

export default App;
