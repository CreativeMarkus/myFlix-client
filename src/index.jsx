// src/index.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { MainView } from "./components/MainView/main-view";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<MainView />);
