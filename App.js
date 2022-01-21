import logo from './logo.svg';
import './App.css';

function App() {
  let tae = {
    margin:"2rem auto",
    maxWidth:"350px",
    width:"80vw",
    height:"90vh",
    border:"solid 1px #ddd",
    borderRadius:"5px",
    padding:"2rem 10px"
  }
  let balls = {
    width:"30px",
    height:"30px",
    borderRadius:"20px",
    backgroundColor:"yellow",
    margin:"5px"
  }
  let weekBox = {
    maxWidth:"250px",
    width:"70vw",
    height:"5vh",
    display:"flex",
    margin:"30px auto"
  }

  return (
    <div className="App">
      <div style={tae}>
        <div>
          <h3>내 일주일은?</h3>
          <div style={weekBox}>
            <div>금</div>
            <div style={balls}></div>
            <div style={balls}></div>
            <div style={balls}></div>
            <div style={balls}></div>
            <div style={balls}></div>
            <div>버</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
