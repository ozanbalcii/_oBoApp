import { Route, Routes, BrowserRouter } from "react-router-dom";
import Desktop from "../pages/desktop/Desktop";
import MasterLayout from "../layouts/MasterLayout";
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
