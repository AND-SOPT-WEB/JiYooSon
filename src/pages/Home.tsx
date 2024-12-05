import { useState } from "react";
import HomeHobby from "../components/HomeHobby";
import HomeInfo from "../components/HomeInfo";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Btn, Header, HeaderBtn, HeaderTitle } from "../styles/HomeStyled";

const Home = () => {
  const [password, setPassword] = useState("");
  const [hobby, setHobby] = useState("");
  const [selectTab, setSelectTab] = useState<"hobby" | "info">("hobby"); //선택된 탭 상태, 초기값은 'hobby'로 설정
  const navigate = useNavigate();

  const change = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }
    if (password.length > 8 || hobby.length > 8) {
      alert("비밀번호와 취미는 각각 8자 이내로 입력해야 합니다.");
      return;
    }
    axios.put(
      "http://223.130.135.50:8085/user",
      {
        password: password,
        hobby: hobby,
      },
      {
        headers: {
          token: token,
        },
      }
    );
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <Header>
        <HeaderTitle>MYPAGE</HeaderTitle>
        <Btn>
          <HeaderBtn onClick={() => setSelectTab("hobby")}>취미</HeaderBtn>
          <HeaderBtn onClick={() => setSelectTab("info")}>내 정보</HeaderBtn>
          <HeaderBtn onClick={logout}>로그아웃</HeaderBtn>
        </Btn>
      </Header>
      {selectTab === "hobby" && <HomeHobby />}
      {selectTab === "info" && (
        <HomeInfo
          password={password}
          setPassword={setPassword}
          hobby={hobby}
          setHobby={setHobby}
          change={change}
        />
      )}
    </>
  );
};

export default Home;
