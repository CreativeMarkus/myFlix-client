import { createRoot } from "react-dom/client";
import { MainView } from "./components/MainView/main-view";
import { BookCard } from "./components/book-card/book-card";
import { BookView } from "./components/book-view/book-view";


import "./index.scss";

const App = () => {
    return <MainView />;
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
