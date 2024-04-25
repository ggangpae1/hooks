import {useState, useEffect } from "react";


const FunctionEffect = (props) => {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);

    //의존성 배열을 설정하지 않음: state가 변경될 때 마다 무조건 호출
    useEffect(()=>{
        console.log("state가 변경되면 무조건 호출");
    })

    useEffect(()=>{
        console.log("처음 한 번 만 호출");
        return (() => {
            console.log("이 컴포넌트가 제거될 때 호출");
        })
    }, [])

    useEffect(()=>{
        console.log("n1이 변경된 경우에 만 호출");
    }, [n1])

    return (
        <>
            <button onClick={(e) => {
                setN1(n1 + 1);
            }}>버튼1</button>
            <button onClick={(e) => {
                setN2(n2 + 1);
            }}>버튼2</button>
        </>
    );
}

export default FunctionEffect;