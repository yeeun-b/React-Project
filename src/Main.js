import {Link, useNavigate} from 'react-router-dom'; // 링크 설정
import {Button} from 'antd';

function Main(){
    // useHistory 생성
    const history = useNavigate();

    return(
        <div>
            <h3>Main</h3>
            <Button onClick={() => {
              history('/todolist');
            }} 
              size='large' 
              shape="round"
            >
              Todo
            </Button>
            <Button onClick={() => {
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