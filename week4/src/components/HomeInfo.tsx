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
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  hobby: string;
  setHobby: React.Dispatch<React.SetStateAction<string>>;
  change: () => void;
};

const HomeInfo = ({
  password,
  hobby,
  setPassword,
  setHobby,
  change,
}: HomeInfoProps) => {
  const handleSubmit = () => {
    if (password.trim() === "" && hobby.trim() === "") {
      alert("비밀번호 또는 취미를 입력해주세요");
      return;
    }
    change();
  };
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
        <SearchChoreBtn onClick={handleSubmit}>수정하기</SearchChoreBtn>
      </HomeBox>
    </HomeContainer>
  );
};

export default HomeInfo;
