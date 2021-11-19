import styled from "styled-components"
import BtnBlue from "../common/btnBlue"
import BtnWhite from "../common/btnWhite"

const Match_1 = () => {
  return (
    <Match_1ST>
      <div className="header">
        <h2>찾아오는 면접 제안, MathUp</h2>
        <div className="contents">
          프로필 등록 한번으로 인사담당자에게 직접 면접 제안을 받으세요.
        </div>
        <div className="btnBox">
          <BtnBlue text="매치업 등록하기" />
        </div>
      </div>
      <div className="body"></div>
    </Match_1ST>
  )
}

export default Match_1

const Match_1ST = styled.div`
width:100%;
height: 700px;

.header {
  height: 369px;
  width: 864px;
  margin: 0 auto;
  padding: 140px 0 20px;
}

h2 {
  font-size: 56px;
  font-weight: 600;
  text-align: center;
}

.contents {
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  margin: 20px 0 0;
}

.btnBox {
  display: flex;
  justify-content: center;
  align-items: flex-end;
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