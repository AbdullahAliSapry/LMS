import { createRoot } from "react-dom/client";
import AppRouter from "./routes/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"

createRoot(document.getElementById("root")!).render(
    <AppRouter />
);
