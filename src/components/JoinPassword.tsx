/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import {
  FooterText,
  FormContainer,
  Input,
  JoinBtn,
  Label,
} from "../styles/JoinStyled";

type JoinPasswordProps = {
  step: number;
  password: string;
  setPassword: any;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const JoinPassword = ({
  step,
  password,
  setPassword,
  setStep,
}: JoinPasswordProps) => {
  return (
    <>
      {step === 2 && (
        <FormContainer>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            value={password}
            type="password"
            id="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <JoinBtn
            onClick={() => {
              setStep(3);
            }}
            disabled={password.trim() === ""}
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
