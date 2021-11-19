import styled from "styled-components";
import { TagST } from "../wd/detailHeader";

const CompanyBody = () => {
  return (
    <CompanyBodyST>
      <div className="inner">
        <div className="body">
          <div className="position">
            <div className="title">
              <h2>채용 중인 포지션</h2>
              <div className="response">응답률 매우 높음</div>
            </div>
            <div className="itemWrap">
              <PositionCard title="포스텔러 영어 콘텐츠 제작(Localization)"/>
              <PositionCard title="FORCETELLER English Content Creator/Localization Editor"/>
              <PositionCard title="포스텔러 운세 콘텐츠 기획 및 제작"/>
              <PositionCard title="포스텔러 서비스 마케터(주니어)"/>
            </div>
          </div>
          <div className="intro">
            <h2>회사 소개</h2>
            <div className="imgBox">
              <img src="https://static.wanted.co.kr/images/company/8382/2umeocai7vngmknf__1080_790.jpg" alt="" />
              <img src="https://static.wanted.co.kr/images/company/8382/gdh67ny7ygjkuywd__1080_790.jpg" alt="" />
              <img src="https://static.wanted.co.kr/images/company/8382/68rptp20brzk3bvj__1080_790.jpg" alt="" />
            </div>
            <span>포스텔러를 서비스하고 있는 (주)운칠기삼입니다.<br/><br/>네이버와 카카오에서 강력한 퍼포먼스를 자랑했던 두 명의 대표를 비롯하여,</span>
            <div className="more">더 보기<i class="fas fa-chevron-down"></i></div>
          </div>
          <div className="pay">
            <h2>평균 연봉</h2>
            <div className="boxes">
              <div className="box">
                <div className="question">신규 입사자</div>
                <div className="answer">2,990만원</div>
              </div>
              <div className="box">
                <div className="question">전체</div>
                <div className="answer">3,965</div>
              </div>
            </div>
          </div>
          <div className="news">
            <h2>이 회사의 뉴스</h2>
            <div className="cardWrap">
              <a href="http://www.slist.kr/news/articleView.html?idxno=309895">
                <NewsCard title="'멜랑꼴리아' 임수정 '운칠기삼 진의, 곡해하지 말라'" date="slist.kr 2021.11.10"/>
              </a>            
              <NewsCard title="'운칠기삼' 브룩스비 ATP500투어 준결승 진출" date="tennispeople.kr 2021.8.7"/>
              <NewsCard title="'대승' 김학범호, 운칠기삼에 웃을 때가 아니다" date="sports.news.nav... 2021.7.26"/>
              <NewsCard title="[아주초대석] 산업계의 오뚝이 정진호 카텍에이치 대표 '운칠기삼' 비켜라" date="ajunews.com 2021.7.15"/>
            </div>
          </div>
        </div>
        <div className="side">
          <h2>태그</h2>
          <div className="tagWrap">
            <TagST>#스톡옵션</TagST>
            <TagST>#간식</TagST>
            <TagST>#노트북</TagST>
            <TagST>#인원급성장</TagST>
            <TagST>#IT, 컨텐츠</TagST>
            <TagST>#연봉업계평균이상</TagST>
            <TagST>#스타트업</TagST>
            <TagST>#유연근무</TagST>
            <TagST>#맥주</TagST>
          </div>
        </div>
      </div>
    </CompanyBodyST>
  )
}

export default CompanyBody;

const CompanyBodyST = styled.div`
padding-top: 40px;

.inner {
  display: flex;
  justify-content: space-between;
}

.body {
  width: 722px;
}

h2 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 22px;
}

.position .title {
  display: flex;
}

.response {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  margin-left: 4px;
  padding: 2px 5px;
  font-size: 10px;
  font-weight: 600;
  color: #00aead;
  border: 1px solid #00aead;
  border-radius: 3px;
}

.itemWrap {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 722px;
  margin-bottom: 50px;
}

.intro {
  margin-bottom: 70px;
}

.intro .imgBox {
  display: flex;
  margin-bottom: 30px;
} 

.intro .imgBox img {
  width: 173px;
  height: 124px;
  margin-right: 10px;
}

.intro span {
  font-size: 16px;
  line-height: 27px;
}

.more {
  margin-top: 10px;
  font-size: 16px;
  color: #999;
}

.more i {
  margin-left: 10px;
  font-size: 13px;
  color: #999;
}

.pay {
  margin-bottom: 70px;
}

.boxes {
  display: flex;
}

.box {
  display: flex;
  justify-content: space-between;
  width: 361px;
  height: 72px;
  padding: 30px;
  background-color: #fafafa;
  border-radius: 3px;
}

.question {
  font-size: 15px;
  font-weight: 600;
  color: #999;
}

.answer {
  font-size: 20px;
  font-weight: 600;
  color: #333;
}

.news {
  margin-bottom: 70px;
}

.news .cardWrap {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.side {
  width: 308px }

.side .tagWrap {
  display: flex;
  flex-wrap: wrap;
}
`

const PositionCard = ({title}) => {
  return (
    <PositionCartST>
      <div className="title">{title}</div>
      <div className="reword">채용보상금 1,000,000원</div>
      <div className="adoption">상시 채용</div>
      <div className="bookMark">
        <i class="far fa-bookmark"></i>
      </div>
    </PositionCartST>
  )
}

const PositionCartST = styled.div`
position: relative;
width: 351px;
height: 108px;
padding: 16px 20px 19px;
margin-bottom: 20px;
border: 1px solid #e1e2e3;
border-radius: 3px;

.title {
  color: #333;
  max-width: 269px;
  max-height: 25px;
  font-size: 18px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.reword {
  margin-top: 3px;
  font-size: 14px;
  color: #86939e;
}

.adoption {
  font-size: 14px;
  font-weight: 600;
  color: #666;
  margin: 15px 0 ;
}

.bookMark {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 33px;
  right: 20px;
  width: 34px;
  height: 34px;
  border-radius: 17px;
  border: 1px solid #e1e2e3;
}

.bookMark i {
  color: #3366ff;
}
`

const NewsCard = ({title, date}) => {
  return (
    <NewsCardST>
      <div className="article">{title}</div>
      <div className="date">{date}</div>
    </NewsCardST>
  )
}

const NewsCardST = styled(PositionCartST)`
display: flex;
flex-direction: column;
justify-content: space-between;

.article {
  width: 309px;
  height: 44px;
  font-size: 16px;
  font-weight: 600;
  line-height: 23px;
}

.date {
  font-size: 14px;
  color: #666;
}
`