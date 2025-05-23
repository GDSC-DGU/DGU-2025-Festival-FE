import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { router } from "./routes";
import GlobalFCMListener from "./components/GlobalFCMListener";
import InAppLanding from "@/components/common/InAppLanding";
import { isInAppBrowser } from "./utils/isInApp";

export default function App() {
  const inApp = isInAppBrowser();

  return (
    <ThemeProvider theme={theme}>
      <GlobalFCMListener />
      {inApp ? <InAppLanding /> : <RouterProvider router={router} />}
    </ThemeProvider>
  );
}
