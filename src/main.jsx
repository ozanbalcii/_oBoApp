import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DesktopProvider } from "./app/contexts/DesktopProvider.jsx";
import { SubmenuProvider } from "./app/contexts/SubmenuProvider.jsx";
import { HeaderButtonsProvider } from "./app/contexts/HeaderButtonsProvider.jsx";
import { LinkedinPageProvider } from "./app/contexts/LinkedinPageProvider";
import { LinkedinCustomProvider } from "./app/contexts/trashContexts/LinkedinCustomProvider.jsx";
import { AppOpenCloseProvider } from "./app/contexts/trashContexts/AppOpenClose.jsx";
import { PdfCvProvider } from "./app/contexts/PdfCvProvider.jsx";
import { SideModalProvider } from "./app/contexts/vsCode/SideModalProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DesktopProvider>
    <SubmenuProvider>
      <HeaderButtonsProvider>
        <LinkedinPageProvider>
          <LinkedinCustomProvider>
            <AppOpenCloseProvider>
              <PdfCvProvider>
                <SideModalProvider>
                  <App />
                </SideModalProvider>
              </PdfCvProvider>
            </AppOpenCloseProvider>
          </LinkedinCustomProvider>
        </LinkedinPageProvider>
      </HeaderButtonsProvider>
    </SubmenuProvider>
  </DesktopProvider>
);
