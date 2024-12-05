import { useState } from "react";
import { JoinSection, JoinTitle } from "../styles/JoinStyled";
import JoinUsername from "../components/JoinUsername";
import JoinPassword from "../components/JoinPassword";
import JoinHobby from "../components/JoinHobby";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hobby, setHobby] = useState("");
  const [step, setStep] = useState(1);

  const signup = () => {
    axios
      .post("http://223.130.135.50:8085/user", {
        username: username,
        password: password,
        hobby: hobby,
      })
      .then((response) => {
        const userNumber = response.data.result.no;
        alert(`회원번호: ${userNumber}`);
        navigate("/");
      })
      .catch((error) => {
        console.error("회원가입 오류:", error);
        alert("회원가입에 실패했습니다");
      });
  };
  const navigate = useNavigate();

  return (
    <JoinSection>
      <JoinTitle>회원가입</JoinTitle>
      <JoinUsername
        step={step}
        username={username}
        setUsername={setUsername}
        setStep={setStep}
      />
      <JoinPassword
        step={step}
        password={password}
        setPassword={setPassword}
        setStep={setStep}
      />
      <JoinHobby
        step={step}
        hobby={hobby}
        setHobby={setHobby}
        signup={signup}
      />
    </JoinSection>
  );
};

export default Join;
