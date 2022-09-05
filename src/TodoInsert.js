import './TodoInsert.css';
import {MdAdd} from 'react-icons/md'; // icon
import {useCallback, useState} from "react";

// 할 일 추가하는 페이지 & 버튼
const TodoInsert =()=>{
    const [value, setValue] = useState(''); // 입력하는 값 관리

    const onChange = useCallback(e => { // input에 넣을 onChange
        // 함수 재사용하기 위해 useCallback 사용함
        setValue(e.target.value);
    }, []);

    return(
        <form className='TodoInsert'>
            <input placeholder='할 일 추가하기' 
                value={value}
                onChange={onChange}/>
            <button type='submit' className='ButtonTodoInsert'>
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;