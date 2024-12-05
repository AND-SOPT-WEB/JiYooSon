import './CSS/Login&Sign.css';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    const login = true;
    if (login) {
      navigate('/mypage/hobby');
    }
    else {
      alert('로그인에 실패하셨습니다.')
    }
  }
  return (
    <>
      <div className="loginPage">
        <h1 className="loginTitle">로그인</h1>
        <input className="loginId" type="text" placeholder="아이디" />
        <input className="loginPw" type="text" placeholder="비밀번호" />
        <button onClick={handleLogin} className="loginBtn">로그인</button>
        <Link to="/signup" className='signupLink'>회원가입</Link>
      </div>
    </>
  );
};

export default LoginPage;
