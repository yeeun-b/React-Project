import React, {useState} from "react";
import './Catdog.css';

function Catdog(){

    // 고양이 이미지 url 저장하는 리스트
    const [catList, setCatList] = useState([]);
    // 강아지 이미지 url 저장하는 리스트
    const [dogList, setDogList] = useState([]);

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
            setDogList([]); // 강아지 리스트를 빈 배열로 만들기

            // jsonRes[0].url : 요청한 값(url)
            // console.log("요청 값 : ", jsonRes[0].url);

            // url이라는 key로 요청한 값을 넣음
            const catUrl = {
                url : jsonRes[0].url
            };

            // catList에 url값 추가
            setCatList(catList.concat(catUrl));
            // console.log(catList);
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

            // jsonRes[0].url : 요청한 값(url)
            // console.log("요청 값 : ", jsonRes[0].url);

            // url이라는 key로 요청한 값을 넣음
            const dogUrl = {
                url : jsonRes[0].url
            };

            // dogList에 url값 추가
            setDogList(dogList.concat(dogUrl));
            // console.log(dogList);
        })
    }

    return(
        <div className="CatdogDiv"> 
            <h5>🐱Cat & Dog🐶</h5>
            <div className="CatdogButtonDiv">
                {/* 버튼 클릭하면 각 API 요청하는 함수 실행*/}
                <button className="CatButton" onClick={CatData}> Cat </button>
                <button className="DogButton" onClick={DogData}> Dog </button>
            </div>
            <div className="CatdogImgDiv">
                {/* 리스트 매핑 */}
                {/* catList/dogList를 cat/dog이라는 이름으로 매핑함 */}
                {/* img src에 각 리스트의 url값을 넣어 개수만큼 이미지 출력 */}
                {catList.map(cat => {
                    return <img src={cat.url} />
                })}
                {dogList.map(dog => {
                    return <img src={dog.url} />
                })}
            </div>
        </div>
    );
}

export default Catdog;