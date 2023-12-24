import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DesktopProvider } from "./app/contexts/DesktopProvider.jsx";
import { SubmenuProvider } from "./app/contexts/SubmenuProvider.jsx";
import { HeaderButtonsProvider } from "./app/contexts/HeaderButtonsProvider.jsx";
import { BodyIntroProvider } from "./app/contexts/LinkedinPage/BodyIntroProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DesktopProvider>
    <SubmenuProvider>
      <HeaderButtonsProvider>
        <BodyIntroProvider>
          <App />
        </BodyIntroProvider>
      </HeaderButtonsProvider>
    </SubmenuProvider>
  </DesktopProvider>
);
