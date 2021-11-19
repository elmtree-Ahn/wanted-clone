import styled from "styled-components";
import AdoptionListCard from "../wdlist/adoptionListCard";

const MainPosition = ({employ}) => {

  return (
    <MainPositionST>
      <div className="inner">
        <div className="titleheader">
          <img src="https://theme.zdassets.com/theme_assets/9309779/480a35976bf401a88dd7388d8f5c19d77227cd35.png" alt="" />
          <span>합격예측 포지션</span>
          <i class="far fa-question-circle"></i>
        </div>
        <div className="cardWrap">
        {
          employ && employ.map((employ) => {
            return <AdoptionListCard img={employ.imageUrl} title={employ.empTitle} name={employ.companyName} location={employ.companyLocation} key={employ.employmentId}/>
          })
        }
        </div>
        
      </div>      
    </MainPositionST>
  )
}

export default MainPosition;


const MainPositionST = styled.div`
width: 100%;

.inner {
  width: 1060px;
  margin: 0 auto 50px;
}

.titleheader {
  display: flex;
  /* align-items: center; */
  margin-bottom: 20px;
}

.titleheader img {
  position: relative;
  top: 0px;
  width: 70px;
  height: 18px;
}

.titleheader span {
  display: block;
  font-size: 22px;
  margin: 0 10px;
  font-weight: 600;
}

.titleheader i {
  font-size: 20px;
  color: #999;
}


.cardWrap {
  display: flex;
  justify-content: space-between;
}


`