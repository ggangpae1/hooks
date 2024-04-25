
import {useRef} from 'react';

const FunctionRef = (props) => {
    //일반 변수 생성
    //이 변수는 컴포넌트의 ref 속성에 할당하면 컴포넌트를 가리키게 됨
    const txt1 = useRef();    

    const onInit = (e) => {
        txt1.current.focus();
    }

    return (
        <>
            <input type="text" id="txt1" ref={txt1}/>
            <input type="text" id="txt2"/>
            <button id="btn" onClick={onInit}>버튼</button>
        </>
    );
}

export default FunctionRef;