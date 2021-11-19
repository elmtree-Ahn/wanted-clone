import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";


const AdoptionListCard = (props) => {

  // api 35 좋아요 누르기




  // api 32 좋아요 변화시키기
  const [like, setLike] = useState(0)
  const [check, setCheck] = useState(false)
  const likeIt = () => {
    setCheck(!check)
    if (check === false) {
      setLike(like + 1)
    }
    else if (check === true) {
      setLike(like - 1)
    }
  }

  return (
    <AdoptionListCardST>
      <div className="header">
        <div className="img" style={{backgroundImage: `url(${props.img})`}}></div>
        <div className="loveit" onClick={() => {likeIt()}}>
          {
            check === false
            ? <i class="fas fa-heart"></i>
            : <i class="fas fa-heart redHeart"></i>
          }
          
          <span>{like}</span>
        </div>
      </div>
      <Link to="/detail">
        <div className="body">
          <div className="title">{props.title}</div>
          <div className="company">{props.name}</div>
          <button className="answer">응답률 매우 높음</button>
          <div className="location">{props.location}·한국</div>
          <div className="bonus">채용보상금 1,000,000원</div>
        </div>
      </Link>
    </AdoptionListCardST>
  )
}

export default AdoptionListCard;


export const AdoptionListCardST = styled.div`

display: ${props=>props.display || 'block'};
cursor: pointer;
width: 250px;
margin: 0 7px;
margin-bottom: 20px;

.redHeart {
  color: red !important; 
}

.header {
  position: relative;
  width: 250px;
  height: 187.5px;
  border-radius: 3px;
  overflow: hidden;
}

.img {
  width: 250px;
  height: 187.5px;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
}

.loveit {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 60px;
  height: 30px;
  border-radius: 3px;
  background-color: #0000008f;
  font-size: 12px;
  color: white;
  cursor: pointer;
}

.fa-heart {
  margin-right: 4px;
  color: #999;
}

.loveit span {
  color: white;
}

.body {
  padding: 14px 10px;
  cursor: pointer;
}

.title {
  width: 230px;
  max-height: 43.2px;
  font-size: 18px;
  font-weight: 600;
  line-height: 21.6px;
  overflow:hidden; 
  text-overflow:ellipsis;
  
}

.company {
  width: 230px;
  height: 22px;
  margin-top: 4px;
  overflow:hidden; 
  text-overflow:ellipsis;
  font-size: 14px;
  font-weight: 600;
  line-height: 22.4px;
}

.answer {
  height: 19px;
  margin-top: 4px;
  padding-bottom: 18px;
  background-color: white;
  border: 1px solid #00aead;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 600;
  color: #00aead;
}

.location {
  margin-top: 6px;
  font-size: 14px;
  line-height: 22.4px;
  color: #999;
}

.bonus {
  font-size: 13px;
  line-height: 18px;
  color: #666;
  margin-top: 6px;
}

`