import React from "react";
import ReactDOM from "react-dom/client";
import { MainView } from "./main-view/main-view";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>MyFlix Movies</h1>
      <MainView />
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
