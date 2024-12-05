import './CSS/Mypage.css';
import { Link } from 'react-router-dom';

function MypageHobby() {
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

      <div className="myPageHobby">
        <h2 className="hobbyTitle">취미</h2>
        <div className="myHobby">
          <h3 className="myHobbyTitle">나의 취미</h3>
          <p className="myHobbyName">독서</p>
        </div>
        <div className="otherHobby">
          <h3 className="otherHobbyTitle">다른 사람들의 취미</h3>
          <input
            className="inputOtherHobby"
            type="text"
            placeholder="사용자 번호"
          />
        </div>
        <button className="searchBtn">검색</button>
      </div>
    </>
  );
}

export default MypageHobby;
