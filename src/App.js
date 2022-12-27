import React from "react";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Topic from "./components/Topic";

function App() {
  return (
    <div className="User">
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/addTopic" element={<Topic/>}/>
          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;




