import './TodoInsert.css';
import {MdAdd} from 'react-icons/md'; // icon
import {useCallback, useState} from "react";

// 할 일 추가하는 페이지 & 버튼
const TodoInsert =({onInsert})=>{ // TodoList에서 TodoInsert에 넣어준 onInsert
    const [value, setValue] = useState(''); // 입력하는 값 관리

    const onChange = useCallback(e => { // input에 넣을 onChange
        // 함수 재사용하기 위해 useCallback 사용함
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(e => { // 폼 제출 시 실행됨
        // 호출 시 props로 받아온 onInsert에 현재 value값을 넣어 넘기고,
        // 현재 value값을 초기화 함
        // onClick 대신 onSubmit 사용하는 이유는 onSubmit은 Enter를 눌러도 실행되기 때문
        onInsert(value);
        setValue(''); // 값 초기화
        e.preventDefault(); // submit 이벤트 발생 시 새로고침 방지
     },
     [onInsert, value],
    );

    return(
        <form className='TodoInsert' onSubmit={onSubmit}>
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