
import {useState} from "react";

const Info = (props) => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    //이벤트 처리 함수
    const onChangeName = (e) => {
        //이벤트가 발생한 객체의 값을 name에 설정
        setName(e.target.value);
    }

    const onChangeNickname = (e) => {
        setNickname(e.target.value);
    }

    return(
        <>
            <div>
                <input name="name" type="text" value={name}
                onChange={onChangeName}/>
                <input name="nickname" type="text" value={nickname}
                onChange={onChangeNickname}/>
            </div>
            <div>
                <p>이름:{name.length>1 ? name : "이름이 너무 짧음"}</p>
                <p>닉네임:{nickname}</p>
            </div>
        </>
    );
}

export default Info;