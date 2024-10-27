import './App.css';
import Card from './components/Card';
import { members } from './assets/data'; //디폴트와 아닌 것이 무슨 차이가 있나

function App() {
  const name = members[0].name
  const englishName = members[0].englishName
  return (
    <>
      <Card name={name} englishName={englishName} />
    </>
  );
}

export default App;
