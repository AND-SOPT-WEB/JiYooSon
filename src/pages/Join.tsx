import styled from "@emotion/styled";

const Join = () => {
  return (
    <JoinSection>
      <JoinTitle>회원가입</JoinTitle>

      <FormContainer>
        <label htmlFor="username">사용자 이름</label>
        <input
          type="text"
          id="username"
          placeholder="사용자 이름을 입력해주세요."
        />
        <button>다음</button>
      </FormContainer>

      <FormContainer>
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          placeholder="비밀번호를 입력해주세요."
        />
        <button>이전</button>
        <button>다음</button>
      </FormContainer>

      <FormContainer>
        <label htmlFor="hobby">취미</label>
        <input type="text" id="hobby" placeholder="취미를 입력해주세요." />
        <button>이전</button>
      </FormContainer>
    </JoinSection>
  );
};

export default Join;

const JoinSection = styled.section`
  width: 40rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.color.lightgray1};
`;

const JoinTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

const FormContainer = styled.section`
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
