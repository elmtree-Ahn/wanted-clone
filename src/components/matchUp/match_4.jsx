import styled from "styled-components"
import BtnBlue from "../common/btnBlue"
import BtnWhite from "../common/btnWhite"

const Match_4 = () => {
  return (
    <Match_4ST>
      <div className="header">
        <h3>10,000개 이상의 글로벌 기업들이 매치업을 통해 인재를 찾고 있습니다.<br/>지금 바로 이력서 등록하고 인사담당자들과 만나보세요.</h3>
        <div className="company"></div>
        <div className="btnBox">
          <BtnBlue text="지금 시작하기" />
        </div>
      </div>
    </Match_4ST>
  )
}

export default Match_4

const Match_4ST = styled.div`
display: flex;
justify-content: center;
width: 100%;
height: 640px;
background-image: url("	https://static.wanted.co.kr/images/matchup/intro/04_bg.png");
background-position: center;
background-size: cover;

.header {
  height: 369px;
  width: 864px;
  margin: 0 auto;
  padding: 140px 0 20px;
}

h3 {
  font-size: 30px;
  font-weight: 600;
  line-height: 45px;
  text-align: center;
  color: white;
}

.company {
  width: 100%;
  height: 120px;
  background-image: url("https://static.wanted.co.kr/images/matchup/intro/logos.png");
  background-position: 50%;
  background-size: auto;
  background-repeat: no-repeat;
}

.btnBox {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 20px;
  width: 864px;
  height: 87px;
  padding: 30px 0 0;
}

.body {
  width: 100%;
  height: 276px;
  margin-top: 40px;
  background-image: url("https://static.wanted.co.kr/images/matchup/intro/01_kr_20200326.jpg");
  background-position: center;
  background-size: cover;
}
`