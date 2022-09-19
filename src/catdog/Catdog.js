import React, {useState} from "react";
import './Catdog.css';

function Catdog(){

    // 고양이 이미지 리스트
    const [catList, setCatList] = useState([]);

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
            // jsonRes[0].url : 요청한 값(url)
            console.log("요청 값 : ", jsonRes[0].url);

            const catUrl = {
                url : jsonRes[0].url
            };

            // catList에 url값 추가
            setCatList(catList.concat(catUrl));
            console.log(catList);
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
            setCatList([]); // 고양이 리스트를 빈 배열로 만들기
            // setUrl(jsonRes[0].url)
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
                    return <img src={cat.url} />
                })}
            </div>
        </div>
    );
}

export default Catdog;