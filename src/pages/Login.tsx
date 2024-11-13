import styled from "@emotion/styled";

const Login = () => {
  return (
    <LoginSection>
      <LoginTitle>로그인</LoginTitle>
      <FormContainer>
        <label htmlFor="username">사용자 이름</label>
        <input type="text" id="username" />
        <label htmlFor="password">비밀번호</label>
        <input type="password" id="password" />
        <button>로그인</button>
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

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
