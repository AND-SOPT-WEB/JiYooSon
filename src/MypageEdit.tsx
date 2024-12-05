import './CSS/Mypage.css';
import { Link } from 'react-router-dom';

function MypageEdit() {
  return (
    <>
      <header className="myPageHeader">
        <h2 className="myPageTitle">마이페이지</h2>
        <Link to="/mypage/hobby" className="myPageNavHobby">
          취미
        </Link>
        <Link to="/mypage/edit" className="myPageNavInform">
          내 정보
        </Link>
        <Link to='/' className="myPageNavLogout">로그아웃</Link>
      </header>

      <div className="myPageChange">
        <h2 className="changeTitle">내 정보 수정하기</h2>
        <div className="newPw">
          <h3 className="newPwTitle">새 비밀번호</h3>
          <input className="inputNewPw" type="text" />
        </div>
        <div className="newHobby">
          <h3 className="newHobbyTitle">새 취미</h3>
          <input className="inputNewHobby" type="text" />
        </div>
        <button className="changeBtn">수정하기</button>
      </div>
    </>
  );
}

export default MypageEdit;
