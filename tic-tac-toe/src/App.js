import React, { useState } from "react";
import Game from "./components/Game";
import Loader from "./components/Loader";
import "./styles/index.scss";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = () => {
    setIsLoading(false);
  };
  return (
    <div className="App">
      {isLoading === true ? <Loader onClick={handleClick}/> : <Game />}
    </div>
  );
}

export default App;
