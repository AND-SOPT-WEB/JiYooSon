import { useState } from "react";
import HomeHobby from "../components/HomeHobby";
import HomeInfo from "../components/HomeInfo";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [password, setPassword] = useState("");
  const [hobby, setHobby] = useState("");
  const [selectTab, setSelectTab] = useState<"hobby" | "info">("hobby"); //선택된 탭 상태, 초기값은 'hobby'로 설정
  const navigate = useNavigate();

  const change = () => {
    axios.post("http://223.130.135.50:8085/user", {
      password: password,
      hobby: hobby,
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <header>
        <h2>마이페이지</h2>
        <button onClick={() => setSelectTab("hobby")}>취미</button>
        <button onClick={() => setSelectTab("info")}>내 정보</button>
        <button onClick={logout}>로그아웃</button>
      </header>
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
