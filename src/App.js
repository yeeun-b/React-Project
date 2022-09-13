import './App.css';
import Main from './Main';
import TodoList from './todolist/TodoList';
import Catdog from './Catdog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/todolist" element={<TodoList />}/>
        <Route path="/catdog" element={<Catdog />}/>
        <Route path="/" element={<Main />}/>
      </Routes>
    </div>
  );
}

export default App;
