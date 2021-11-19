import styled from "styled-components";

const SideBanner = () => {
  return (
    <SideBannerST>
      <div className="box first">
        <img src="https://static.wanted.co.kr/images/ai/logo-wantedai.png" alt="" />
        합격예측
      </div>
      <div className="box second">
        서류합격률이 궁금하다면?
        <i class="far fa-question-circle"></i>
      </div>
    </SideBannerST>
  )  
}

export default SideBanner;

const SideBannerST = styled.div`
display: flex;
justify-content: space-between;
top: 20px;
width: 340px;
height: 40px;
margin-top: 10px;
padding: 11px 15px 10px;
background-color: #f3f5f8;
border-radius: 4px;

.box {
  display: flex;
  align-items: center;
}

.first {
  font-size: 12px;
  font-weight: 600;
  color: #111;
}

img {
  width: 70px;
  height: auto;
  margin-right: 5px;
  vertical-align: auto;
}

.second {
  font-size: 12px;
  color: #999;
}

.second i {
  margin-left: 5px;
  font-size: 14px;
  color: #999;
}
`