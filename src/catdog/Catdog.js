import React, {useState} from "react";
import './Catdog.css';

function Catdog(){

    const [url, setUrl] = useState('');
    // 고양이 이미지 리스트
    // const catList = [
    //     {img: 'https://cdn2.thecatapi.com/images/6qi.jpg'},
    //     {img: 'https://cdn2.thecatapi.com/images/cgo.jpg'},
    //     {img: 'https://cdn2.thecatapi.com/images/7gk.jpg'}
    // ]
    const [catList, setCatList] = useState([]);
    var count = 0;
    // Cat API
    function CatData(){
        fetch('https://api.thecatapi.com/v1/images/search')
        .then(res => {
            if(res.ok){
                return res.json();
            }
            throw new Error('요청 실패');
        }, networkError => console.log(networkError.message)
        ).then(jsonRes => {
            // setUrl(jsonRes[0].url)
            // catList에 값 추가
            console.log(jsonRes[0].url);
            setCatList([...catList, jsonRes[0].url]);
            console.log(catList.length, catList[0]);
        })
    }

    // Dog API
    function DogData(){
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
            <h5>🐱Cat & Dog🐶</h5>
            <div className="CatdogButtonDiv">
                {/* 버튼 클릭하면 API 요청*/}
                <button className="CatButton" onClick={CatData}> Cat </button>
                <button className="DogButton" onClick={DogData}> Dog </button>
            </div>
            <div className="CatdogImgDiv">
                {/* 리스트 매핑 */}
                {catList.map(cat => {
                    return <img src={cat.img} />
                })}
                {/* <img src={url} className="CatDogImg" /> */}
            </div>
        </div>
    );
}

export default Catdog;