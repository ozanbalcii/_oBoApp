import React from "react";
import { BrowserRouter } from "react-router-dom";
import PrivateRoutes from "./app/routes/PrivateRoutes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="antialiased">
        <PrivateRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;