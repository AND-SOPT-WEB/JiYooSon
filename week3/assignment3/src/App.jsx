import './App.css';

function App() {
  return (
    <>
      <div className="header">
        <h1 className="title">1 to 50</h1>
        <button className="gameButton">게임</button>
        <button className="rankingButton">랭킹</button>
        <select className="levelSelect">
          <option value="Level1">Level1</option>
          <option value="Level2">Level2</option>
          <option value="Level3">Level3</option>
        </select>
      </div>
    </>
  );
}

export default App;
