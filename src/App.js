import React, {useState, useRef} from 'react';

import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";

function App() {
  /*
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  */

  //state를 여러 개 생성하고 구조 분해 할당을 이용해서 하나씩 분할
  const [inputs, setInputs] = useState({
    username:'',
    email:''
  });

  const {username, email} = inputs;

  const onChange = (e) => {
    //name에는 e.target.name이 대입되고 value에는 e.target.value가 대입됨
    const {name, value} = e.target;
    //이름에 해당하는 속성에 값을 대입
    setInputs({
      ...inputs,
      [name]:value
    });
  }


  const [users, setUsers] = useState([
    {id:1, username:"시모나", email:"simona@kakao.com"},
    {id:2, username:"카푸치노", email:"cappuccino@kakao.com"},
    {id:3, username:"핑크루비", email:"pinkruby@kakao.com"},
  ]);

  //id를 설정하기 위한 변수
  const nextId = useRef(4);

  //데이터를 추가해주는 함수
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    }
    //데이터를 추가할 때 기본 배열을 복사하고 새로운 데이터 와 결합
    //react에서는 배열에 직접 데이터를 추가하거나 배열에서 삭제하는 것은 안됨
    //react의 모든 데이터는 불변 객체이므로 복사해서 작업한 후 그 복사본을 다시
    //대입해서 이용
    setUsers([...users, user]);

    //id는 1 증가
    nextId.current += 1;
    //입력 란을 초기화
    setInputs({
      username:'',
      email:''
    })

  }


  //데이터 삭제를 위한 함수
  const onRemove = (id) => {
    //넘겨받은 id 와 id가 일치하지 않은 데이터만 추출
    //filter 함수는 복제를 한 후 생성해서 리턴하기 때문에 기존 데이터를
    //수정하지 않음
    setUsers(users.filter(user => user.id != id));
  }


  return (
    <>
     <CreateUser username={username} email={email} onChange={onChange}
     onCreate={onCreate} />
     <UserList users={users} onRemove={onRemove}/>
    </>
  );
}

export default App;
