import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Child from "./components/child";

function App() {
  const [data, setData] = useState(null);
  let listOThings = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiHL6yeLk_5A-Bg6e3VT13iV-pu2q2FNFfMg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI9OSnajRbit_IH4MgGbekLuLo9WosDf1qdA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY9E_Znn0e-lmRhLDIJIGd5OBJPoO4j4O4Gg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScSBHmVfixUedFLAWqqyRCVDQxyCjdLGRscg&usqp=CAU",
  ];

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from Techtonica (React-side)</h1>
        <Child props={listOThings} />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
