import './TodoInsert.css';
import {MdAdd} from 'react-icons/md'; // icon

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