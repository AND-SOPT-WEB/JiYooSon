/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import {
  FooterText,
  FormContainer,
  Input,
  JoinBtn,
  Label,
} from "../styles/JoinStyled";

type JoinHobbyProps = {
  step: number;
  hobby: string;
  setHobby: any;
  signup: () => void;
};

const JoinHobby = ({ step, hobby, setHobby, signup }: JoinHobbyProps) => {
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
              setHobby(e.target.value);
            }}
          />
          <JoinBtn onClick={signup} disabled={hobby.trim() === ""}>
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
