import axios from 'axios';

function Ex() {
  const btn = async () => {
    const response = await axios.post('http://211.188.53.75:8080/user', {
      username: '이름',
      password: 'wldb',
      hobby: '독서',
    });
    console.log(response);
  };

  const loginBtn = async () => {
    const Response = await axios.post('http://211.188.53.75:8080/login', {
      username: '손지유',
      password: 'wldb',
    });
    console.log(Response);
  };

  const hobbyBtn = async () => {
    const REsponse = await axios.get(
      'http://211.188.53.75:8080/user/my-hobby',
      { headers: { token: '9767c5b1-2ad3-4163-ad5f-341c3373efae' } }
    );
    console.log(REsponse);
  };

  return (
    <>
      <button onClick={btn}>나는 버튼</button>
      <button onClick={loginBtn}>로그인</button>
      <button onClick={hobbyBtn}>취미 훔쳐보기</button>
    </>
  );
}

export default Ex;
