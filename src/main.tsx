import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, HashRouter } from "react-router";
import { App } from "./pages/App/";
import { TicketsPage } from "./pages/TicketsPage";
import { pageLinks } from "./shared/lib/helpers/links.ts";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter basename={"/"}>
      <Routes>
        <Route path={pageLinks.home} element={<App />} />
        <Route path={pageLinks.tickets} element={<TicketsPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
