import React from "react";
import "./App.scss";
import data from "./data/data";
import Slider from "./component/Slider/Slider";
function App() {
    return (
        <div className="App">
            <Slider persons={data} />
        </div>
    );
}

export default App;
