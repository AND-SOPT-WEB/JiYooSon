import { Link } from 'react-router-dom';
import { FormContainer } from '../styles/Styled';

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
          <label htmlFor="password">비밀번호</label>
          <input
            value={password}
            type="password"
            id="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setStep(3);
            }}
            disabled={password.trim() === ''}
          >
            다음
          </button>
          <p>
            이미 회원이신가요? <Link to="/">로그인</Link>
          </p>
        </FormContainer>
      )}
    </>
  );
};

export default JoinPassword;
