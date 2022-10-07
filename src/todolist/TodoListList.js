import './TodoListList.css';
import TodoListItem from './TodoListItem';

const TodoListList = ({todos, onRemove, onToggle, handleSingleCheck, onInsertToggle, onChangeSelectedTodo, checkItems}) => {
    // ↑ TodoList에서 받아온 todos와 onRemove
    return(
        <div className="TodoListList">
            {todos.map(todo => (
                <TodoListItem 
                todo={todo} 
                key={todo.id} 
                onRemove={onRemove} 
                onToggle={onToggle}
                onInsertToggle={onInsertToggle}
                onChangeSelectedTodo={onChangeSelectedTodo}
                handleSingleCheck={handleSingleCheck}
                checkItems={checkItems}/>
            ))}
        </div>
    );
};

export default TodoListList;