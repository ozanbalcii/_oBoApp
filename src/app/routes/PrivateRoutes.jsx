import { Route, Routes, BrowserRouter } from "react-router-dom";

import MasterLayout from "../layouts/MasterLayout";
import Desktop from "../components/desktop/Desktop";
export default function PrivateRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MasterLayout />}>
          <Route path="/*" element={<Desktop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
