import styled from "@emotion/styled";

const Home = () => {
  return (
    <UserInfoContainer>
      <input type="text" placeholder="사용자 번호를 입력해주세요." />
      <button>찾기</button>
      <div>
        <h3>사용자 취미</h3>
        <p>취미</p>
      </div>
    </UserInfoContainer>
  );
};

export default Home;

const UserInfoContainer = styled.div`
  width: 40rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.color.lightgray1};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
