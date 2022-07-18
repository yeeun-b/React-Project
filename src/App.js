import './App.css';
import Main from './Main';
import Todolist from './Todolist';
import Catdog from './Catdog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/todolist" element={<Todolist />}/>
        <Route path="/catdog" element={<Catdog />}/>
        <Route path="/" element={<Main />}/>
      </Routes>
    </div>
  );
}

export default App;
