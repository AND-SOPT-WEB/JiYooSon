/* eslint-disable no-empty-pattern */
import axios from "axios";
import { useEffect, useState } from "react";
import {
  HomeBox,
  HomeContainer,
  Input,
  Ladel,
  MainTitle,
  MyHobby,
  MyHobbyText,
  OtherHobby,
  SearchChoreBtn,
  SearchHobby,
} from "../styles/HomeStyled";

type HomeHobbyProps = object;

const HomeHobby = ({}: HomeHobbyProps) => {
  const [usernum, setUsernum] = useState("");
  const [hobby, setHobby] = useState("");
  const [myHobby, setMyHobby] = useState("");

  useEffect(() => {
    const findMyHobby = async () => {
      const myHobbyResponse = await axios.get(
        "http://223.130.135.50:8085/user/my-hobby",
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      setMyHobby(myHobbyResponse.data.result.hobby);
    };

    findMyHobby();
  }, []); //지금 useEffect의 두 번째 인수인 '[]'는 '의존성 배열'! 이 배열에 비어 있으면, 컴포넌트가 처음 나타날 때 한 번만 실행된다

  const search = async () => {
    try {
      const response = await axios.get(
        `http://223.130.135.50:8085/user/${usernum}/hobby`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      setHobby(response.data.result.hobby);
    } catch (error) {
      console.error("해당 번호에 데이터가 존재하지 않습니다", error);
      alert("해당 번호에 데이터가 존재하지 않습니다");
    }
  };

  return (
    <HomeContainer>
      <MainTitle>취미</MainTitle>
      <HomeBox>
        <MyHobby>
          <Ladel>나의 취미</Ladel>
          <MyHobbyText>{myHobby}</MyHobbyText>
        </MyHobby>
        <OtherHobby>
          <Ladel>다른 사람들의 취미</Ladel>
          <Input
            type="text"
            placeholder="사용자 번호"
            onChange={(e) => {
              setUsernum(e.target.value);
            }}
          />
          {usernum &&
            hobby && ( //usernum과 hobby가 있을 때만 p 태그가 뜨도록!!
              <SearchHobby>
                {usernum}번 사용자의 취미 {hobby}
              </SearchHobby>
            )}
        </OtherHobby>
        <SearchChoreBtn
          onClick={() => {
            search();
          }}
        >
          검색
        </SearchChoreBtn>
      </HomeBox>
    </HomeContainer>
  );
};

export default HomeHobby;
