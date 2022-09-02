import './TodoListList.css';
import TodoListItem from './TodoListItem';

const TodoListList = () => {
    return(
        <div className="TodoListList">
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
        </div>
    );
};

export default TodoListList;