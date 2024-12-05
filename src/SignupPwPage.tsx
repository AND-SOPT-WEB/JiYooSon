import './CSS/Login&Sign.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface SignupPwPageProps {
  onNext: () => void; // onNext는 인자 없는 함수
}

const SignupPwPage = ({ onNext }: SignupPwPageProps) => {
  const [pw, setPw] = useState<string>('');
  const [pwCheck, setPwCheck] = useState<string>('');

  const isValid = pw.trim() && pwCheck.trim() && pw === pwCheck;

  return (
    <>
      <div className="signupPagePw">
        <div className="inputGroup">
          <h3 className="signupPwTitle">비밀번호</h3>
          <input
            className="signupPw"
            type="text"
            placeholder="비밀번호를 입력해주세요"
            onChange={(e) => setPw(e.target.value)}
          />
        </div>
        <input
          className="signupPwCheck"
          type="text"
          placeholder="비밀번호 확인"
          onChange={(e) => setPwCheck(e.target.value)}
        />
        <button onClick={onNext} className="nextBtn" disabled={!isValid}>
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

export default SignupPwPage;
