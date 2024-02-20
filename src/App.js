import './App.css';
import { useState } from "react";

import SecondComponent from './SecondCoponent'

function App() {
  // useState
  const [background, setBackgorund] = useState("Light");

  const backgroundHandle = () => {
    setBackgorund(background === "Light" ? "Dark" : "Light");
  };

  return (
    <div className="App">
      {/* Normal Way */}
      <div className="NormalWay">
        <h2>This is normal way using useState</h2>
        <button onClick={backgroundHandle}>Change background</button>
        <SecondComponent background={background} />
      </div>
    </div>
  );
}

export default App;
