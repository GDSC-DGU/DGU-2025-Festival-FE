import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { router } from "./routes";
import GlobalFCMListener from "./components/GlobalFCMListener";
import InAppLanding from "@/components/common/InAppLanding";
import { isInAppBrowser } from "./utils/isInApp";
import dayjs from "dayjs";
import "@/utils/dayjs";
import { Wrapper } from "@googlemaps/react-wrapper";

export default function App() {
  const inApp = isInAppBrowser();

  dayjs.locale("ko-numeric");

  return (
    <Wrapper apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <ThemeProvider theme={theme}>
        {inApp ? (
          <InAppLanding />
        ) : (
          <>
            <GlobalFCMListener />
            <RouterProvider router={router} />
          </>
        )}
      </ThemeProvider>
    </Wrapper>
  );
}
