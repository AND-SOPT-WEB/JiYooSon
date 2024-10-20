import { members } from './data.js';

const data = JSON.stringify(members);
window.localStorage.setItem('webby', data);

const webbyData = window.localStorage.getItem('webby');
const dataList = JSON.parse(webbyData);
