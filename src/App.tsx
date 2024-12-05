import { ThemeProvider, Global } from "@emotion/react";
import theme from "./styles/theme";
import GlobalStyle from "./styles/global";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login"; // 로그인 페이지
import Join from "./pages/Join"; // 회원가입 페이지
import Home from "./pages/Home"; // 메인 홈 페이지

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
