//--로컬 스토리지--

//데이터를 가져와라 일단
//여기서 members는 data js에 있는 웨비들 다 묶은 변수명
//members를 ./data.js에서 꺼내와라
import { members } from './data.js';

//데이터를 JSON으로 변환해서 로컬 스토리지에 저장
const data = JSON.stringify(members);
window.localStorage.setItem('webby', data); //webby는 key값, data가 value

//저장된 데이터 가져온 후, JSON 형식의 데이터를 JavaScript 객체로 변환
const webbyData = window.localStorage.getItem('webby');
const dataList = JSON.parse(webbyData); //여러 변수를 거쳐, 웨비들의 데이터 변수명은 dataList가 됨!! 기억하고 있자

//--데이터를 테이블에 넣기--

//html에서 데이터 넣을 곳을 선택해야함
const tableBody = document.querySelector('#webbyData'); //html에서 tablebody의 아이디를 weebyData라고 설정해둠

//각 멤버를 반복하면서 새로운 행을 추가하고, 각각의 셀에 데이터 넣기
//forEach는 배열 안의 각각의 요소를 순차적으로 하나씩 처리할 때 사용하는 함수
//member는 한 배열에 들어갈 것! 즉, 한 명의 정보 -> 그러니까 이거를 순차적으로 반복하면 각각의 사람들이 이 코드를 실행
dataList.forEach((webMember) => {
  //여기서 webMember는 내가 마음대로 설정한 변수 이름, dataList의 각각의 요소를 가리키는 변수가 webMember가 된거임
  const newRow = tableBody.insertRow();
  //insertRow: html의 table의 끝에 새로운 빈 행을 추가해주는 것 (html의 tr이랑 같은 것
  //그 새로운 행을 나는 일단 newRow라고 변수 이름을 붙여서 저장함

  //반복해서 만든 새 행(newRow라는 변수)에 빈 셀을 만들기! html의 td랑 같은 것
  const checkBoxCell = newRow.insertCell();
  const nameCell = newRow.insertCell();
  const englishNameCell = newRow.insertCell();
  const githubCell = newRow.insertCell();
  const genderCell = newRow.insertCell();
  const roleCell = newRow.insertCell();
  const firstWeekGroupCell = newRow.insertCell();
  const secondWeekGroupCell = newRow.insertCell();

  //이제 만들어진 행 & 셀에 웨비들 데이터 넣기
  //innerHTML: html코드를 직접 넣을 수 있는 것
  //textContent: 셀 안에 텍스트 데이터를 넣는 것
  checkBoxCell.innerHTML = '<input type="checkbox"/>'; //<>를 통해 html코드를 js에서도 사용가능
  nameCell.textContent = webMember.name;
  englishNameCell.textContent = webMember.englishName;
  githubCell.textContent = webMember.github;
  genderCell.textContent = webMember.gender === 'male' ? '남자' : '여자'; //=== ? :는 조건문을 표현하는 방법, 참이면 ? 뒤에 있는 코드 실행, 거짓이면 : 뒤에 있는 코드 실행, if-else문과 같은 역할을 함
  roleCell.textContent = webMember.role;
  firstWeekGroupCell.textContent = webMember.firstWeekGroup;
  secondWeekGroupCell.textContent = webMember.secondWeekGroup;
});

//--초기화 버튼--
const clearBtn = document.querySelector('.btn-clear');

clearBtn.addEventListener('click', () => {
  const inputs = document.querySelectorAll('input'); //여기서 all이 빠지니까 버튼이 동작되지 않았음! 모든 input이 선택되어야 해서 그런듯
  inputs.forEach((input) => (input.value = '')); //input의 value 값을 빈 문자열로 설정 -> 필터링 input 값이 초기화 되어야 하니까!

  const selects = document.querySelectorAll('select');
  selects.forEach((select) => (select.selectedIndex = 0)); //select 값도 초기화 되어야 함. '0'이 select를 초기화 시키는 방법
});

//--검색 버튼--
const searchBtn = document.querySelector('.btn-search');

searchBtn.addEventListener('click', (event) => {
  event.preventDefault(); //기본 동작을 막아야 한다고 함 -> 검색 버튼을 클릭했을 때 페이지 새로고침을 막는 역할을 함

  //입력된 필터 값 인식 뚜루뚜루
  const nameFilter = document.querySelector('#user-name').value;
  const englishnameFilter = document.querySelector('#user-englishName').value;
  const githubFilter = document.querySelector('#user-github').value;
  const genderFilter = document.querySelector('.select-gender').value;
  const roleFilter = document.querySelector('.select-role').value;
  const firstWeekGroupFilter = document.querySelector(
    '#user-firstWeekGroup'
  ).value;
  const secondWeekGroupFilter = document.querySelector(
    '#user-secondWeekGroup'
  ).value;

  //원래 있던 테이블 내용 사라지도록!
  tableBody.innerHTML = '';

  //필터링 된 데이터 배열 생성
  const filteredData = dataList.filter((webMember) => {
    //webMember는 배열의 각 요소를 나타냄
    //dataList의 모든 사람들 데이터
    const filteredName =
      nameFilter === '' || webMember.name.includes(nameFilter); //webMember.name 중 nameFilter에 입력된 값을 포함하는 값을 반환하라!
    const filteredEnglishName =
      englishnameFilter === '' ||
      webMember.englishName.toLowerCase().includes(englishnameFilter);
    const filteredGithub =
      githubFilter === '' ||
      webMember.github.toLowerCase().includes(githubFilter);
    const filteredGender =
      genderFilter === '' ||
      webMember.gender === (genderFilter === '1' ? 'male' : 'female');
    const filteredRole =
      roleFilter === '' ||
      webMember.role === (roleFilter === '3' ? 'OB' : 'YB');
    const filteredFirstWeekGroup =
      firstWeekGroupFilter === '' ||
      webMember.firstWeekGroup.includes(firstWeekGroupFilter);
    const filteredSecondWeekGroup =
      secondWeekGroupFilter === '' ||
      webMember.secondWeekGroup.includes(secondWeekGroupFilter);

    return (
      filteredName &&
      filteredEnglishName &&
      filteredGithub &&
      filteredGender &&
      filteredRole &&
      filteredFirstWeekGroup &&
      filteredSecondWeekGroup //모든 조건을 만족하는 값 반환
    );
  });

  //필터링 된 데이터 테이블에 추가
  filteredData.forEach((webMember) => {
    //여기서 webMember는 배열의 각 항목을 나타내는 변수
    const newRow = tableBody.insertRow();

    const checkBoxCell = newRow.insertCell();
    const nameCell = newRow.insertCell();
    const englishNameCell = newRow.insertCell();
    const githubCell = newRow.insertCell();
    const genderCell = newRow.insertCell();
    const roleCell = newRow.insertCell();
    const firstWeekGroupCell = newRow.insertCell();
    const secondWeekGroupCell = newRow.insertCell();

    checkBoxCell.innerHTML = '<input type="checkbox"/>';
    nameCell.textContent = webMember.name;
    englishNameCell.textContent = webMember.englishName;
    githubCell.textContent = webMember.github;
    genderCell.textContent = webMember.gender === 'male' ? '남자' : '여자';
    roleCell.textContent = webMember.role;
    firstWeekGroupCell.textContent = webMember.firstWeekGroup;
    secondWeekGroupCell.textContent = webMember.secondWeekGroup;
  });
});

//--체크박스 전체 선택 및 해제--
const checkAll = document.querySelector('#check-all');
checkAll.addEventListener('click', function () {
  const isChecked = checkAll.checked;

  if (isChecked) {
    //if...else 문: 조건에 따라 코드 실행 - isChecked가 참일 때 실행
    const checkboxes = document.querySelectorAll(
      '#webbyData input[type="checkbox"]'
    );
    for (const checkbox of checkboxes) {
      //for...of 문: 반복해서 코드 실행 - 정해진 횟수만큼 코드 반복
      checkbox.checked = true;
    }
  } else {
    const checkboxes = document.querySelectorAll(
      '#webbyData input[type="checkbox"]'
    );
    for (const checkbox of checkboxes) {
      checkbox.checked = false;
    }
  }
});

//--하나라도 체크 취소하면 제목 줄 체크박스도 해제, 하나하나 전부 체크 하면 제목 줄 체크 박스도 자동 체크--
const checkboxes = document.querySelectorAll(
  '#webbyData input[type="checkbox"]'
);
for (const checkbox of checkboxes) {
  checkbox.addEventListener('click', function () {
    const totalCnt = checkboxes.length; //length는 배열, 문자열 등의 길이/요소의 개수를 나타내는 속성
    const checkedCnt = document.querySelectorAll(
      '#webbyData input[type="checkbox"]:checked'
    ).length;
    if (totalCnt === checkedCnt) {
      document.querySelector('#check-all').checked = true;
    } else {
      document.querySelector('#check-all').checked = false;
    }
  });
}

//문제: 필터링 해서 검색한 후에는 if문이 안 먹힘..
