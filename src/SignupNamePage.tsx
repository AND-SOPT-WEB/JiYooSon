import './CSS/Login&Sign.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface SignupNamePageProps {
  onNext: () => void; // onNext는 유효성 여부를 전달
}

const SignupNamePage = ({ onNext }: SignupNamePageProps) => {
  const [name, setName] = useState<string>('');

  return (
    <>
      <div className="signupPageName">
        <div className="inputGroup">
          <h3 className="signupNameTitle">이름</h3>
          <input
            className="signupName"
            type="text"
            placeholder="사용자 이름을 입력해주세요"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button onClick={onNext} className="nextBtn" disabled={!name.trim()}>
          다음
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

export default SignupNamePage;
