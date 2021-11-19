import styled from "styled-components";
import ProfileCard from "../common/profileCard";

const MywantedAside = ({userData}) => {


  return (
    <MywantedAsideST>
      <ProfileCard userData={userData}/>
      <AsideWrap>
        <div className="point contentsWrap">
          <div className="title">포인트</div>
          <div className="contents">P</div>
        </div>
      </AsideWrap>
      <AsideWrap>
        <div className="want contentsWrap">
          <div className="title">원해요</div>
          <div className="contents">0</div>
        </div>
        <div className="look contentsWrap">
          <div className="title">열람</div>
          <div className="contents">0</div>
        </div>
        <div className="headhunting contentsWrap">
          <div className="title">받은 제안</div>
          <div className="contents">0</div>
        </div>
      </AsideWrap>
      <AsideWrap>
        <div className="point contentsWrap">
          <div className="title">계정 설정</div>
        </div>
      </AsideWrap>
      <div className="banner">
        <div className="bnrTitle">
          오늘 내 하루는 어떨까?
        </div>
        <div className="bnrdesc">
          1초 만에 처방받기 
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
    </MywantedAsideST>
  )
}

export default MywantedAside;

const MywantedAsideST = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 248px;

.contentsWrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
}

.title {
  font-size: 16px;
  font-weight: 500;
}

.contents {
  font-size: 18px;
  font-weight: 600;
}

.look {
  margin: 22px 0;
}

.banner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 250px;
  height: 80px;
  margin-top: 20px;
  padding: 20px 20px 18px;
  border-radius: 4px;
  background: #ffe776 url('https://static.wanted.co.kr/images/daily/today_illust.png') 92% bottom/contain no-repeat;
}

.bnrTitle {
  font-size: 14px;
  font-weight: 600;
  color: #111;
  margin-bottom: 8px;
}

.bnrdesc {
  font-size: 12px;
  color: #666;
}

.bnrdesc i {
  margin-left: 5px;
  font-size: 10px;
  color: #666;

}

`

const AsideWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 248px;
padding: 30px 22px;
background-color: white;
border: 1px solid #ddd;
`