import {useReducer} from 'react';
//외부에서 함수 내부에 만들어진 변수를 수정할 수 있습니다.
//이 함수가 다른 파일에 있어도 가능
function reducer(state, action){
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
    }
}

const Counter = (props) => {
    //num은 하나의 state 처럼 동작하고 dispatch는 reducer 함수의 역할을 수행
    const [num, dispatch] = useReducer(reducer, 0);

    const onIncrement = (e) => {
        dispatch({type:'INCREMENT'});
    }

    return(
        <div>
            <div>{num}</div>
            <p>
                <button onClick = {onIncrement}>1 증가</button>
                <button onClick = {
                    (e) => {
                        dispatch({type:'DECREMENT'});;
                    }
                }>1 감소</button>
            </p>
        </div>
    );
}

export default Counter;