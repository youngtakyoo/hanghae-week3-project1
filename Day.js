import React  from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Days = (props) => {
    const history = useHistory();
    const [point,setPoint] = useState(0);
    const day = useParams().day;
    const yoil = day + "요일";
    let positive = Array.from({length:point});
    let negative = Array.from({length:5-point});

    window.addEventListener("keydown",e =>{
        let arr = ["1","2","3","4","5"]
        if (arr.includes(e.key)){
            setPoint(e.key)
        }
    })

    return (
    <>
    <Rtitle><Daylight>{yoil}</Daylight> 평점 남기기</Rtitle>
    <Rcontainer>
        {positive.map((x,y)=>{

            return <Point key={y} onClick={()=>{
                setPoint(y + 1)
            }}/>
        })}
        {negative.map((x,y)=>{

            return <AntiPoint key={y} onClick={()=>{
                setPoint(positive.length + y + 1)
            }}/>
        })}
    </Rcontainer>
    <Save onClick={()=>{
        history.push("/")
    }}>평점 남기기</Save>
    </>    
    )
}

const Rtitle = styled.h3`
    margin: 3rem auto 0;
`;

const Daylight = styled.span`
    color: #fff;
    background-color: #81c147;
    border-radius: 3px;
`

const Rcontainer = styled.div`
    margin: 18px auto;
    display: flex;
`;

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

const Save = styled.div`
    text-align: center;
    line-height: 50px;
    width:120px;
    height: 50px;
    color: #fff;
    margin: 0 auto;
    background-color: #2ce8d9;
    border-radius: 5px;
    cursor: pointer;
`

export default Days