import styled from "styled-components"
import AdoptionListCard from "../wdlist/adoptionListCard"
import { AdoptionListCardST } from "../wdlist/adoptionListCard"
import MainContentsCard from "./mainContentsCard"

const MainContents = () => {
  return (
    <MainContentsST>
      <div className="inner">
        <div className="titleheader">
          <span>추천 wanted+ 콘텐츠</span>
          <i class="far fa-question-circle"></i>
        </div>
        <div className="cardWrap">
          <MainContentsCard img="http://wanted.video.kr.kollus.com/kr/snapshot/wanted/20210705/6/57994229.jpg" name="밀리의서재 이영주" title="선 지키거나, 넘거나" location="Design - 문제를 해결하는 프로덕트 디자인 : Wanted Con"/>
          <MainContentsCard img="http://wanted.video.kr.kollus.com/kr/snapshot/wanted/20201103/01/96244072.jpg" name="Microsoft 이상인" title="디지털 트랜스포메이션 : 뉴 호라이즌" location="Creative & Design - 디자이너의 성장 : Wanted Con"/>
          <MainContentsCard img="http://wanted.video.kr.kollus.com/kr/snapshot/wanted/20210705/6/09843256.jpg" name="아이디어스 신혜정" title="이기는 디자인, 비즈니스를 성공으로 이끄는 디자인 전략" location="Design - 문제를 해결하는 프로덕트 디자인 : Wanted Con"/>
          <MainContentsCard img="http://wanted.video.kr.kollus.com/kr/snapshot/wanted/20201028/04/34677346.jpg" name="Facebook 이근배" title="성장을 위한 의도적인 탐색 (Intentional Navigation Towards Career Growth)" location="Creative & Design - 디자이너의 성장 : Wanted Con"/>
        </div>
        
      </div>     
    </MainContentsST>
  )
}


export default MainContents

const ContentsST = styled.div`
`

const MainContentsST = styled.div`
width: 100%;

.inner {
  width: 1060px;
  margin: 0 auto;
}

.titleheader {
  display: flex;
  /* align-items: center; */
  margin-bottom: 20px;
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
  margin-bottom: 70px;
}
`