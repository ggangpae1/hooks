
//하나의 데이터를 출력할 컴포넌트
const User = ({user, onRemove}) => {
    return (
        <div onDoubleClick={(e) => onRemove(user.id)}>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}

const UserList = ({users, onRemove}) => {
    return(
        <div>
            {users.map(user => (
                <User user={user} key={user.id} onRemove={onRemove} />
            ))}
        </div>
    )
}

export default UserList;
