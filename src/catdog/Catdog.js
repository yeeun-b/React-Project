import React, {useState, useRef} from "react";
import './Catdog.css';

function Catdog(){

    const [url, setUrl] = useState('');
    // 고양이 이미지 리스트
    const [catList, setCatList] = useState([]);
    // id 초기값은 0으로 설정
    // const nextCatId = useRef(0);

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
            console.log("요청 값 : ", jsonRes[0].url);
            const catUrl = {
                // id : nextCatId.current,
                url : jsonRes[0].url
            };
            // catList에 url값 추가
            // setCatList([...catList, jsonRes[0].url]);
            setCatList(catList.concat(catUrl));
            console.log(catList);
            // console.log("id : ", nextCatId.current);
            // nextCatId.current += 1;
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
                    return <img src={cat.url} />
                })}
            </div>
        </div>
    );
}

export default Catdog;