import { Link } from 'react-router-dom';
import { FormContainer } from '../styles/Styled';

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
  return (
    <>
      {step === 1 && (
        <FormContainer>
          <label htmlFor="username">사용자 이름</label>
          <input
            value={username}
            type="text"
            id="username"
            placeholder="사용자 이름을 입력해주세요."
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setStep(2);
            }}
            disabled={username.trim() === ''} //username이 비어있을 때 비활성화
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

export default JoinUsername;
