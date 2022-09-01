import React from "react";
// import useState from "react";
import './Todolist.css';
import TodoInsert from './TodoInsert';

const TodoList = ({todos}) => {
    return (
        <div className="TodoTemplate">
            <div className="Todo-title">TodoList</div>
            <div className="content">{todos}</div>
            <TodoInsert />
        </div>
    );
};

export default TodoList;