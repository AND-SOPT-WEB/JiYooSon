import styled from "@emotion/styled";
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
        <input
          type="text"
          id="username"
          placeholder="아이디"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          id="password"
          placeholder="비밀번호"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login}>로그인</button>
        <Link to="/join">회원가입</Link>
      </FormContainer>
    </LoginSection>
  );
};

export default Login;

const LoginSection = styled.section`
  width: 40rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.color.lightgray1};
`;

const LoginTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
