import { Route, Routes, BrowserRouter } from "react-router-dom";

import MasterLayout from "../layouts/MasterLayout";
import Linkedin from "../pages/applications/linkedin/Linkedin";
import Desktop from "../components/desktop/Desktop";

export default function PrivateRoutes() {
  return (
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          <Route path="/linkedin" element={<Linkedin />} />
        </Route>
      </Routes>
  );
}