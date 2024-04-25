
import {useState} from 'react';

//컴포넌트 이름은 반드시 대문자로 시작해야 합니다.
const FunctionStateComponent = (props) => {
    //함수 내에서 변경 가능한 데이터 만들기
    const [count, setCount] = useState(0);

    return (
        <>
            <p>데이터: {count}</p>

            <button onClick={(e)=>{
                //react에서 만들어지는 state는 불변 객체
                //count = count + 1;

                setCount(count + 1);
            }}>버튼</button>
        </>
    );
}

export default FunctionStateComponent;