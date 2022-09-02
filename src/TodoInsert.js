import './TodoInsert.css';
import {MdAdd} from 'react-icons/md'; // icon

// 할 일 추가하는 페이지 & 버튼
const TodoInsert =()=>{
    return(
        <form className='TodoInsert'>
            <input placeholder='할 일 추가하기' />
            <button type='submit' className='ButtonTodoInsert'>
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;