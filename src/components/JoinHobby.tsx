import { Link } from 'react-router-dom';
import { FormContainer } from '../styles/Styled';

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
          <label htmlFor="hobby">취미</label>
          <input
            value={hobby}
            type="text"
            id="hobby"
            placeholder="취미를 입력해주세요."
            onChange={(e) => {
              setHobby(e.target.value);
            }}
          />
          <button onClick={signup} disabled={hobby.trim() === ''}>
            회원가입
          </button>
          <p>
            이미 회원이신가요? <Link to="/">로그인</Link>
          </p>
        </FormContainer>
      )}
    </>
  );
};

export default JoinHobby;
