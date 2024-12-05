import './CSS/Login&Sign.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignupHobbyPage = () => {
  const navigate = useNavigate();
  const [hobby, setHobby] = useState<string>('');

  const handleSignup = () => {
    const hobbyNext = true;
    if (hobbyNext) {
      navigate('/login');
    } else {
      alert('어쩌구');
    }
  };

  return (
    <>
      <div className="signupPageHobby">
        <div className="inputGroup">
          <h3 className="signupHobbyTitle">취미</h3>
          <input
            className="signupHobby"
            type="text"
            placeholder="취미를 입력해주세요"
            onChange={(e) => setHobby(e.target.value)} //입력 값 변경 시 상태 업데이트
          />
        </div>
        <button
          onClick={handleSignup}
          className="signupBtn"
          disabled={!hobby.trim()}
        >
          회원가입
        </button>
        <div className="signupPageFooter">
          <p className="signupText">이미 회원이신가요?</p>
          <Link to="/login" className="loginLink">
            로그인
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignupHobbyPage;
