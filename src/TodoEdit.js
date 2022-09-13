import './TodoEdit.scss';
import {useCallback, useEffect, useState} from "react";
import { MdModeEditOutline } from "react-icons/md";

const TodoEdit = ({selectedTodo, onUpdate, insertToggle, onChangeSelectedTodo}) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(e => {
        onUpdate(selectedTodo.id, value);
        setValue(''); // value 초기화
        e.preventDefault(); // submit 이벤트 발생 시 새로고침 방지
    },
    [onUpdate, value],
    );

    // todoListItem 클릭했을 때 해당 todo객체의 text 내용이 input에 뜨게 하기 위해
    // useEffect 사용
    useEffect(() => {
        if (selectedTodo) {
            setValue(selectedTodo.text);
        }
    }, [selectedTodo]);

    return(
        <div className="background">
            <form onSubmit={onSubmit} className="todoEditInsert">
                <input
                    onChange={onChange}
                    value={value}
                    placeholder="할 일 수정하기"
                ></input>
                <button type="submit"><MdModeEditOutline /></button>
            </form>
        </div>
    );
};

export default TodoEdit;