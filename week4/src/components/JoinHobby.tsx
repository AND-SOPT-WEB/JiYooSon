import { Link } from "react-router-dom";
import {
  ErrorMessage,
  FooterText,
  FormContainer,
  Input,
  JoinBtn,
  Label,
} from "../styles/JoinStyled";
import { useState } from "react";

type JoinHobbyProps = {
  step: number;
  hobby: string;
  setHobby: React.Dispatch<React.SetStateAction<string>>;
  signup: () => void;
};

const JoinHobby = ({ step, hobby, setHobby, signup }: JoinHobbyProps) => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleHobby = (value: string) => {
    setHobby(value);

    if (value.trim() === "") {
      setErrorMessage("취미를 입력해주세요.");
    } else if (value.length > 8) {
      setErrorMessage("취미는 8자 이하로 입력해주세요.");
    } else {
      setErrorMessage(""); 
    }
  };

  return (
    <>
      {step === 3 && (
        <FormContainer>
          <Label htmlFor="hobby">취미</Label>
          <Input
            value={hobby}
            type="text"
            id="hobby"
            placeholder="취미를 입력해주세요."
            onChange={(e) => {
              handleHobby(e.target.value);
            }}
          />
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <JoinBtn onClick={signup} disabled={hobby.trim() === "" || hobby.length > 8}>
            회원가입
          </JoinBtn>
          <FooterText>
            이미 회원이신가요? <Link to="/">로그인</Link>
          </FooterText>
        </FormContainer>
      )}
    </>
  );
};

export default JoinHobby;
