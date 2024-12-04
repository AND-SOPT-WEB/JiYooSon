/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  HomeBox,
  HomeContainer,
  Input,
  Ladel,
  MainTitle,
  NewInfo,
  SearchChoreBtn,
} from "../styles/HomeStyled";

type HomeInfoProps = {
  password: string;
  setPassword: any;
  hobby: string;
  setHobby: any;
  change: any;
};

const HomeInfo = ({ setPassword, setHobby, change }: HomeInfoProps) => {
  return (
    <HomeContainer>
      <MainTitle>내 정보 수정하기</MainTitle>
      <HomeBox>
        <NewInfo>
          <Ladel>새 비밀번호</Ladel>
          <Input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </NewInfo>
        <NewInfo>
          <Ladel>새 취미</Ladel>
          <Input
            type="text"
            onChange={(e) => {
              setHobby(e.target.value);
            }}
          />
        </NewInfo>
        <SearchChoreBtn onClick={change}>수정하기</SearchChoreBtn>
      </HomeBox>
    </HomeContainer>
  );
};

export default HomeInfo;
