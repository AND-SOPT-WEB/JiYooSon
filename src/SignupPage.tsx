import { useState } from 'react';
import SignupNamePage from './SignupNamePage';
import SignupPwPage from './SignupPwPage';
import SignupHobbyPage from './SignupHobbyPage';

const SignupPage = () => {
  const [step, setStep] = useState(1); //상태를 선언한 것
  //step은 현재 단계를 저장하는 '상태 변수', setStep은 step 상태를 변경하는 함수. 이걸로 현재 단계를 변경할 수 있음

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1); //상태를 업데이트 한 것
  };
  //step이 1이면 prevStep은 1이고 그 이후에 +1씩 증가하는 것임
  //이 방식은 상태가 비동기적으로 업데이트 되기 떄문에 이전 상태를 바탕으로 새로운 상태를 계산하는 함수형 업데이트 방식임

  return (
    <div>
      <h1 className="signupTitle">회원가입</h1>
      {step === 1 && <SignupNamePage onNext={handleNext} />} 
      {step === 2 && <SignupPwPage onNext={handleNext} />}
      {step === 3 && <SignupHobbyPage />}
    </div>
  ); //조건부 랜더링, 2일 때 SignupPwPage 컴포넌트가 랜더링,,
  //onNext는 다음단계로 넘어가는 함수인 handleNext를 자식 컴포넌트에 전달하는 역할을 함
};

export default SignupPage;
