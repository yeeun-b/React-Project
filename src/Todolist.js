import React from "react";
import {useState} from "react";
import './Todolist.css';
import TodoInsert from './TodoInsert'; // 할 일 추가하는 페이지
import TodoListList from "./TodoListList"; // 할 일 목록

const TodoList = () => {
    const [todos, seTodos] = useState([
        // 할 일 목록
        // 배열이 props로 전달됨
        {
            id: 1,
            text: '할일 1',
            checked: true,
        },
        {
            id: 2,
            text: '할일 2',
            checked: true,
        },
        {
            id: 3,
            text: '할일 3',
            checked: false,
        },
    ]);

    return (
        <div className="TodoTemplate">
            <div className="Todo-title">TodoList</div>
            {/* <div className="content"> */}
            <TodoInsert /> {/* 할 일 추가하는 페이지 */}
            <TodoListList todos={todos}/> {/* 리스트 출력하는 페이지 */}
            {/* </div> */}
        </div>
    );
};

export default TodoList;