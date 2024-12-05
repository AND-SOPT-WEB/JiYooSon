import './App.css';
import './CSS/reset.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import LoginPage from './Login';
import SignupPage from './SignupPage';
import MypageHobby from './MypageHobby';
import MypageEdit from './MypageEdit';
import axios from 'axios';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/mypage/hobby" element={<MypageHobby />} />
          <Route path="/mypage/edit" element={<MypageEdit />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
