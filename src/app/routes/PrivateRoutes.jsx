import { Route, Routes, BrowserRouter } from "react-router-dom";

import MasterLayout from "../layouts/MasterLayout";
import Linkedin from "../pages/applications/linkedin/Linkedin";

export default function PrivateRoutes() {
  return (
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          <Route path="linkedin-ozanbalci98" element={<Linkedin />} />
        </Route>
      </Routes>
  );
}


