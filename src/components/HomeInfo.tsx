import styled from '@emotion/styled';

type HomeInfoProps = {
  password: string;
  setPassword: any;
  hobby: string;
  setHobby: any;
  change: any;
};

const HomeInfo = ({ setPassword, setHobby, change }: HomeInfoProps) => {
  return (
    <UserInfoContainer>
      <h2>내 정보 수정하기</h2>
      <h3>새 비밀번호</h3>
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <div>
        <h3>새 취미</h3>
        <input
          type="text"
          onChange={(e) => {
            setHobby(e.target.value);
          }}
        />
      </div>
      <button onClick={change}>수정하기</button>
    </UserInfoContainer>
  );
};

export default HomeInfo;

const UserInfoContainer = styled.div`
  width: 40rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.color.lightgray1};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
