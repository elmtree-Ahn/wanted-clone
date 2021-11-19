import styled from "styled-components"
import BtnBlue from "../common/btnBlue"
import BtnWhite from "../common/btnWhite"

const Match_2 = () => {
  return (
    <Match_2ST>
      <div className="card">
        <i class="far fa-edit"></i>
        <div className="title">
          편리한<br/>프로필 등록
        </div>
        <div className="desc">
          복잡하고 어려운 이직을 스마트하게<br/>이력서 무한작성은 이제 그만.<br/>딱 한번의 손쉬운 프로필 등록으로<br/>이직 준비 끝
        </div>
      </div>
      <div className="card">
        <i class="fas fa-lock"></i>
        <div className="title">
          개인정보는<br/>안전하게
        </div>
        <div className="desc">
          구직활동 노출이 걱정되시나요?<br/>경력 정보만 공개,<br/>개인정보는 안전하게 지켜드릴게요.
        </div>
      </div>
      <div className="card">
        <i class="fas fa-dollar-sign"></i>
        <div className="title">
          합격 보상금<br/>50만원 받기
        </div>
        <div className="desc">
          면접 제안으로 합격해도<br/>50만원의 합격 축하 보상금이<br/>당신을 찾아갑니다.<br/>지금 기회를 잡아보세요!
        </div>
      </div>
    </Match_2ST>
  )
}

export default Match_2

const Match_2ST = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 674px;
background-image: url("	https://static.wanted.co.kr/images/matchup/intro/02_01.jpg");
background-position: center;
background-size: cover;

.card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 342px;
  height: 420px;
  margin: 0 10px;
  padding-top: 70px;
  background-color: white;
  border-radius: 10px;
}

i {
  margin-bottom: 20px;
  font-size: 40px;
}

.title {
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  text-align: center;
}

.desc {
  font-size: 16px;
  line-height: 28px;
  text-align: center;

}
`