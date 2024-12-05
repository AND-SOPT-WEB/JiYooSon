import { Link } from "react-router-dom";
import {
  ErrorMessage,
  FooterText,
  FormContainer,
  Input,
  JoinBtn,
  Label,
  TogglePasswordButton,
} from "../styles/JoinStyled";
import { useEffect, useState } from "react";

type JoinPasswordProps = {
  step: number;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const JoinPassword = ({
  step,
  password,
  setPassword,
  setStep,
}: JoinPasswordProps) => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (password.length > 8) {
      setErrorMessage("비밀번호는 8자 이하로 입력해주세요.");
    } else if (password !== confirmPassword) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
    } else {
      setErrorMessage("");
    }
  }, [password, confirmPassword]); // password와 confirmPassword가 변경될 때마다 실행

  const handleNextStep = () => {
    if (!errorMessage) {
      setStep(3);
    }
  };

  return (
    <>
      {step === 2 && (
        <FormContainer>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            value={password}
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <TogglePasswordButton
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <span className="material-symbols-outlined">visibility</span>
            ) : (
              <span className="material-symbols-outlined">visibility_off</span>
            )}
          </TogglePasswordButton>
          <Input
            value={confirmPassword}
            type="password"
            id="confirmPassword"
            placeholder="비밀번호 확인"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <JoinBtn
            onClick={handleNextStep}
            disabled={
              password.trim() === "" ||
              confirmPassword.trim() === "" ||
              errorMessage !== ""
            }
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

export default JoinPassword;
