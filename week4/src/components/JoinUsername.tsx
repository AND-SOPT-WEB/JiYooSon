import { Link } from "react-router-dom";
import {
  ErrorMessage,
  FooterText,
  FormContainer,
  Input,
  JoinBtn,
  Label,
} from "../styles/JoinStyled";
import { useEffect, useState } from "react";

type JoinUsernameProps = {
  step: number;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const JoinUsername = ({
  step,
  username,
  setUsername,
  setStep,
}: JoinUsernameProps) => {
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (username.length > 8) {
      setErrorMessage("사용자 이름은 8자 이하로 입력해주세요.");
    } else {
      setErrorMessage(""); 
    }
  }, [username]);

  const handleNextStep = () => {
    if (username.length > 8) {
      setErrorMessage("사용자 이름은 8자 이하로 입력해주세요.");
      return;
    }

    setErrorMessage("");
    setStep(2);
  };

  return (
    <>
      {step === 1 && (
        <FormContainer>
          <Label htmlFor="username">사용자 이름</Label>
          <Input
            value={username}
            type="text"
            id="username"
            placeholder="사용자 이름을 입력해주세요."
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          {errorMessage && (
            <ErrorMessage>
              {errorMessage}
            </ErrorMessage>
          )}
          <JoinBtn
            onClick={handleNextStep}
            disabled={username.trim() === "" || username.length > 8} //username이 비어있을 때 비활성화
          >
            다음
          </JoinBtn>
          <FooterText>
            이미 회원이신가요? <Link to="/">로그인</Link>
          </FooterText>
        </FormContainer>
      )}
    </>
  );
};

export default JoinUsername;
