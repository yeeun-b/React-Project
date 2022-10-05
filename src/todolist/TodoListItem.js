import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline, MdModeEditOutline } from "react-icons/md";
import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({todo, onRemove, onToggle, onInsertToggle, onChangeSelectedTodo}) => {
    const {id, text, checked} = todo; // id도 추가함

    return(
        <div className="TodoListItem">
            {/* checked가 true일 때 checked라는 클래스 추가 */}
            <div className={cn('checkbox', {checked})} onClick={() => onToggle(id)}>
                {/* checked가 true면 체크된 아이콘이 / false면 체크되지 않은 아이콘 출력 */}
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            {/* 수정 버튼 */}
            <div className="edit" onClick={() => {
                onChangeSelectedTodo(todo)
                onInsertToggle();
            }}>
                {/* 클릭 시 id를 기준으로 항목 삭제하는 함수 호출 */}
                <MdModeEditOutline />
            </div>
            {/* 삭제 버튼 */}
            <div className="remove" onClick={() => onRemove(id)}>
                {/* 클릭 시 id를 기준으로 항목 삭제하는 함수 호출 */}
                <MdRemoveCircleOutline />
            </div>
            {/* 선택 삭제하는 체크박스 */}
            {/* checked가 true일 때 checked라는 클래스 추가 */}
            <div className={cn('deletbox', {checked})} onClick={() => onToggle(id)}>
                {/* checked가 true면 체크된 아이콘이 / false면 체크되지 않은 아이콘 출력 */}
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            </div>
        </div>
    );
};

export default TodoListItem;