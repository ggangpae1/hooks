
import {useEffect} from 'react';

//하나의 데이터를 출력할 컴포넌트
const User = ({user, onRemove, onToggle}) => {
    useEffect(() =>{
        console.log("화면에 보여질 때 한번 만 호출");
        return(() => {
            console.log("소멸될 때 호출되는 코드");
        })
    }, []);

    useEffect(() => {
        console.log("user 데이터가 변경될 때 호출");
        return(() => {
            console.log("user 데이터가 소멸될 때 호출되는 코드");
        })
    }, [user])

    return (
        <div onDoubleClick={(e) => onRemove(user.id)}>
            <b style={{
                cursor: 'pointer',
                color: user.active ? 'green' : 'black'
            }}
            onClick = {(e) => onToggle(user.id)}
            >{user.username}</b> <span>({user.email})</span>
        </div>
    )
}

const UserList = ({users, onRemove, onToggle}) => {
    return(
        <div>
            {users.map(user => (
                <User user={user} key={user.id} onRemove={onRemove} 
                onToggle={onToggle}/>
            ))}
        </div>
    )
}

export default UserList;
