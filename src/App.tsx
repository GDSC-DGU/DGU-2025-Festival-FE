import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { router } from "./routes";
import GlobalFCMListener from "./components/GlobalFCMListener";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalFCMListener />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
