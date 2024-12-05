const todolist = document.querySelector('.todo-list');
const btn = document.querySelector('.add-button');

const buttonClick = () => {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const deleteBtn = document.createElement('button');

  const inputvalue = document.querySelector('#todo').value;
  todolist.appendChild(li);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  span.innerText = inputvalue; /*사용자가 입력한 내용을 span에 넣는 것*/
  deleteBtn.innerText = '삭제';
  deleteBtn.addEventListener('click', () => {
    todolist.removeChild(li);
  });
};

btn.addEventListener('click', buttonClick);