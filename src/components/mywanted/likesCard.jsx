import { useState } from "react";
import { AdoptionListCardST } from "../wdlist/adoptionListCard";


const LikesCard = (props) => {

  const [goodBye, setGoodBye] = useState('block')

  return (
    <AdoptionListCardST display={goodBye} onClick={()=>{setGoodBye("none")}}>
      <div className="header" >
        <div className="img" style={{backgroundImage: `url(${props.img})`}}></div>
        <div className="loveit">
          <i class="fas fa-heart redHeart"></i>
          <span>1</span>
        </div>
      </div>

        <div className="body">
          <div className="title">{props.title}</div>
          <div className="company">{props.name}</div>
          <button className="answer">응답률 매우 높음</button>
          <div className="location">서울·한국</div>
          <div className="bonus">채용보상금 1,000,000원</div>
        </div>

    </AdoptionListCardST>
  )
}

export default LikesCard;