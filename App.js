import React, {useState, useRef} from "react";
import styled from "styled-components";
import {Route} from "react-router-dom";
import Weeks from "./Weeks";
import Days from "./Day";

function App() {
  const wbox = ["월","화","수","목","금","토","일"]
  let Nowdate = new Date().getDay();
  const [week,setWeek] = useState([...wbox.slice(Nowdate - 1, 7),...wbox.slice(0, Nowdate - 1)])


  return (
    <div className="App">
      <Container>
        <Route path="/" exact>
          <Title>내 일주일은?</Title>
          {week.map((x,y)=>{

            return <Weeks key={y} day={x}/>
          })}
        </Route>
        <Route path="/days:day">
          <Days/>
        </Route>
      </Container>
    </div>
  );
}

const Container = styled.div`
  max-width: 350px;
  width: 80vw;
  height: 90vh;
  border: solid 1px #ddd;
  border-radius: 5px;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  margin: 3rem auto 1rem;
`
export default App;
