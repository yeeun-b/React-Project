import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from "react-icons/md";
import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({todo, onRemove, onToggle}) => {
    const {id, text, checked} = todo; // id도 추가함

    return(
        <div className="TodoListItem">
            <div className={cn('checkbox', {checked})} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                {/* 클릭 시 id를 기준으로 항목 삭제하는 함수 호출 */}
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default TodoListItem;