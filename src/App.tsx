import React from "react";
import data from "./data";
import Listing from "./components/Listing";

const App: React.FC = () => {
  return (
    <div>
      <h1>Список предложений</h1>
      <Listing items={data} />
    </div>
  );
};

export default App;
