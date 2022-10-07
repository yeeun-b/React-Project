import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline, MdModeEditOutline } from "react-icons/md";
import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({todo, onRemove, onToggle, handleSingleCheck, checkItems, onInsertToggle, onChangeSelectedTodo}) => {
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
            <input type='checkbox' name={'select-${id}'}
                onChange={(e) => handleSingleCheck(e.target.checked, id)}
                // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                // checked={checkItems.includes(id) ? true : false}
                />
        </div>
    );
};

export default TodoListItem;