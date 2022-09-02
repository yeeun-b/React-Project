import './TodoListList.css';
import TodoListItem from './TodoListItem';

const TodoListList = ({todos}) => {
    // ↑ TodoList에서 받아온 todos
    return(
        <div className="TodoListList">
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id}/>
            ))}
        </div>
    );
};

export default TodoListList;