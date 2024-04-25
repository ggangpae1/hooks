//이름 과 이메일 저장할 state 와 input의 내용이 변경될 때 호출될 함수
//그리고 버튼을 눌렀을 때 호출될 함수를 매개변수로 전달받습니다.
const CreateUser = ({username, email, onChange, onCreate}) => {
    return (
        <div>
            <input type="text" name="username" placeholder="이름"
            onChange={onChange} value={username}/>
            <input type="text" name="email" placeholder="이메일"
            onChange={onChange} value={email}/>
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default CreateUser;