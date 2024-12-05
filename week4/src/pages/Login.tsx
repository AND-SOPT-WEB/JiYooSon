import {
  FormContainer,
  Input,
  LoginBtn,
  LoginSection,
  LoginTitle,
} from "../styles/LoginStyled";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    const response = await axios.post("http://223.130.135.50:8085/login", {
      username: username,
      password: password,
    });
    if (response.status === 200) {
      localStorage.setItem("token", response.data.result.token);
    }
    navigate("/home");
  };

  return (
    <LoginSection>
      <LoginTitle>로그인</LoginTitle>
      <FormContainer>
        <Input
          type="text"
          id="username"
          placeholder="아이디"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Input
          type="password"
          id="password"
          placeholder="비밀번호"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <LoginBtn onClick={login}>로그인</LoginBtn>
        <Link to="/join">회원가입</Link>
      </FormContainer>
    </LoginSection>
  );
};

export default Login;
