import React  from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Weeks = (props) => {
    const day = props.day
    const history = useHistory();
    const ranNum = Math.floor(Math.random()*5+1)

    let point = Array.from({length:ranNum})
    let antipoint = Array.from({length:5 - ranNum})


    return (
        <div> <WeekBox>
            <Dchar>{day}</Dchar>
            {point.map((x,y)=>{

                return <Point key={y}/>
            })}
            {antipoint.map((x,y)=>{

                return <AntiPoint key={y}/>
            })}
            <Triangle onClick={()=>{
                history.push(`/days${day}`)
            }}/>
        </WeekBox>
        </div>
    )
}

const WeekBox = styled.div`
max-width: 350px;
width: 80vw;
height: 30px;
font-weight: bold;
margin: 0 auto 25px;
display: flex;
justify-content: center;
`

const Dchar = styled.div`
width: 30px;
height: 30px;
text-align: center;
padding-top: 9px;
`

const Point = styled.div`
width: 30px;
height: 30px;
background-color: coral;
border-radius: 15px;
margin: 5px;
`

const AntiPoint = styled.div`
width: 30px;
height: 30px;
background-color: #ddd;
border-radius: 15px;
margin: 5px;
`

const Triangle = styled.div`
appearance: none;
background-color: transparent;
border-color: transparent skyblue;
width: 0px;
height: 0px;
border-top-width: 1rem;
border-top-style: solid;
border-bottom-width: 1rem;
border-bottom-style: solid;
border-left-width: 1.6rem;
border-left-style: solid;
color: rgb(255, 255, 255);
cursor: pointer;
margin-top: 5px;
`

export default Weeks