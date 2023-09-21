import logo from "./logo.svg";
import "./App.css";
import Posts from "./Posts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ComponentA } from "./ComponentA";
import { ComponentB } from "./ComponentB";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/a" element={<ComponentA />} />
          <Route path="/b" element={<ComponentB />} />  
        </Routes> */}
        <ComponentA/>
        <ComponentB/>
      </div>
    </BrowserRouter>
  );
}

export default App;
