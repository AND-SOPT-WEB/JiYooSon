//데이터를 가져와라 일단//
import { members } from './data.js';

//데이터를 JSON으로 변환해서 로컬 스토리지에 저장//
const data = JSON.stringify(members);
window.localStorage.setItem('webby', data);

//저장된 데이터 가져온 후, JSON 형식의 데이터를 JavaScript 객체로 변환//
const webbyData = window.localStorage.getItem('webby');
const dataList = JSON.parse(webbyData);

//html에서 데이터 넣을 곳을 선택해야함//
const tableBody = document.querySelector('#webbyData');

//각 멤버를 반복하면서 새로운 행을 추가하고, 각각의 셀에 데이터 넣기//
//forEach는 배열 안의 각각의 요소를 순차적으로 하나씩 처리할 때 사용하는 함수//
//member는 한 배열에 들어갈 것! 즉, 한 명의 정보 -> 그러니까 이거를 순차적으로 반복하면 각각의 사람들이 이 코드를 실행//
dataList.forEach((member) => {
  const newRow = tableBody.insertRow();

  //insertRow: html의 table의 끝에 새로운 빈 행을 추가해주는 것 (html의 tr이랑 같은 것//
  //그 새로운 행을 나는 일단 newRow라고 변수 이름을 붙여서 저장함//

  //반복해서 만든 새 행(newRow라는 변수)에 빈 셀을 만들기 html의 td랑 같은 것//
  const checkBoxCell = newRow.insertCell();
  const nameCell = newRow.insertCell();
  const englishNameCell = newRow.insertCell();
  const githubCell = newRow.insertCell();
  const genderCell = newRow.insertCell();
  const roleCell = newRow.insertCell();
  const firstWeekGroupCell = newRow.insertCell();
  const secondWeekGroupCell = newRow.insertCell();

  //이제 만들어진 행 -> 셀에 웨비들 데이터 넣기//
  //innerHTML: html코드를 직접 넣을 수 있는 것//
  //textContent: 셀 안에 텍스트 데이터를 넣는 것//
  checkBoxCell.innerHTML = '<input type="checkbox"/>';
  nameCell.textContent = member.name;
  englishNameCell.textContent = member.englishName;
  githubCell.textContent = member.github;
  genderCell.textContent = member.gender === 'male' ? '남자' : '여자'; //=== ? :는 조건문을 표현하는 방법, 참이면 ? 뒤에 있는 코드 실행, 거짓이면 : 뒤에 있는 코드 실행, if-else문과 같은 역할을 함//
  roleCell.textContent = member.role;
  firstWeekGroupCell.textContent = member.firstWeekGroup;
  secondWeekGroupCell.textContent = member.secondWeekGroup;
});
