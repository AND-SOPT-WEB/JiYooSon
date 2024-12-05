import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Global, ThemeProvider } from "@emotion/react";
import GlobalStyle from "./styles/global.ts";
import theme from "./styles/theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <App />
    </ThemeProvider>
  </StrictMode>
);
