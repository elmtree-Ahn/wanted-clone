import styled from "styled-components";
import AdoptionList from "../wdlist/adoptionList";
import CopyRight from "./copyright";
import DetailContents from "./detailContents";
import DetailHeader from "./detailHeader";
import DetailMap from "./detailMap";
import ImgSlider from "./imgSlider";
import Side from "./side";
import SideBanner from "./sideBanner";

const Detail = () => {
  return (
    <DetailST>
      <div className="inner">
        <div className="contents">
          <ImgSlider />
          <DetailHeader />
          <DetailContents />
          <hr/>
          <DetailMap />
          <CopyRight />
        </div>
        <div className="side">
          <Side />
          <SideBanner />
        </div>
      </div>
      <div className="recomend">
        <h2>컴공선배님, 이 포지션을 찾고 계셨나요?</h2>  
        <div className="inner">
          <AdoptionList className="noMargin"/>
        </div>
      </div>
      
      
    </DetailST>
  )
}

export default Detail;

const DetailST = styled.div`
margin: 50px auto 0;

.inner {
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 1060px;
  margin: 0 auto;
  padding-top: 20px;
}

.recomend {
  width: 1060px;
  margin: 70px auto 0;
}

.contents {
  width: 700px;
}

hr {
  margin-top: 60px;
  margin-bottom: 20px;
  border: 1px solid #eee;
}

h2 {
  position: relative;
  bottom: -30px;
  margin-top: 20px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -.3px;
}

.side {
  position: sticky;
  top: 80px;
  height: 373px;
}

`