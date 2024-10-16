const todolist = document.querySelector('.todo-list');

//------

const btn = document.querySelector('.add-button');
const buttonClick = () => {
  const span = document.createElement('span');
  const dbtn = document.createElement('button');
  const li = document.createElement('li');
  const inputvalue = document.querySelector('#todo').value;
  todolist.appendChild(li);
  li.appendChild(span);
  li.appendChild(dbtn);
  span.innerText = inputvalue;
  dbtn.innerText = '삭제';
  dbtn.addEventListener('click', () => {
    todolist.removeChild(li);
  });
};

btn.addEventListener('click', buttonClick);