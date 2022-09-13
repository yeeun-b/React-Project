import './TodoEdit.scss';
import {useCallback, useState} from "react";

const TodoEdit = ({selectedTodo, onUpdated}) => {
    const [value, setValue] = useState('');

    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback((e) => {
        setValue(''); // value 초기화
        // 새로고침 방지
        e.preventDefault();
    },[value],);

    return(
        <div className="EditBacktround">
            <form onSubmit={onSubmit} className="todoEditInsert">
                <h2>수정하기</h2>
                <input
                    onChange={onChange}
                    value={value}
                    placeholder="할 일 수정하기"
                ></input>
                <button type="submit">수정하기</button>
            </form>
        </div>
    );
};

export default TodoEdit;