import {Link, useNavigate} from 'react-router-dom'; // 링크 설정
import {Button} from 'antd';
import './Main.css';

function Main(){
    // useHistory 생성
    const history = useNavigate();

    return(
        <div className="MainDiv">
            <h3>Main</h3>
            <Button className="ButtonTodolist" onClick={() => {
              history('/todolist');
            }} 
              size='large' 
              shape="round"
            >
              Todo
            </Button>
            <Button className="ButtonCatdog" onClick={() => {
              history('/catdog');
            }} 
              size='large' 
              shape="round"
            >
              Catdog
            </Button>
        </div>
    );
}

export default Main;