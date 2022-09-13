import React, {useState} from "react";
import './Catdog.css';

function Catdog(){

    const [url, setUrl] = useState('');

    function cat_data(){
        fetch('https://api.thecatapi.com/v1/images/search')
        .then(res => {
            if(res.ok){
                return res.json();
            }
            throw new Error('요청 실패');
        }, networkError => console.log(networkError.message)
        ).then(jsonRes => {
            setUrl(jsonRes[0].url)
        })
    }
    function dog_data(){
        fetch('https://api.thedogapi.com/v1/images/search')
        .then(res => {
            if(res.ok){
                return res.json();
            }
            throw new Error('요청 실패');
        }, networkError => console.log(networkError.message)
        ).then(jsonRes => {
            setUrl(jsonRes[0].url)
        })
    }

    return(
        <div className="CatdogDiv"> 
            <h5>Cat & Dog</h5>
            <div className="CatdogButtonDiv">
                <button className="CatButton" onClick={cat_data}> Cat </button>
                <button className="DogButton" onClick={dog_data}> Dog </button>
            </div>
            <div className="CatdogImgDiv">
                <img src={url} className="CatImg" />
            </div>
        </div>
    );
}

export default Catdog;