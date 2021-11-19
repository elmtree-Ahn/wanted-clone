import styled from "styled-components"
import BtnBlue from "../common/btnBlue"
import BtnWhite from "../common/btnWhite"

const Intro_1 = () => {
  return (
    <Intro_1ST>
      <div className="header">
        <h2>이력서 양식, 그 이상</h2>
        <div className="contents">
          채용 전문가들의 조언을 어더, 이력서를 잘 쓸 수 있는 도구를 만들었습니다.<br/><br/>서류 통과가 잘 되는 원티드 이력서를 쉽고 빠르게 작성해 보세요.
        </div>
        <div className="btnBox">
          <BtnWhite text="이력서 관리"/>
          <BtnBlue text="새 이력서 작성" />
        </div>
      </div>
      <div className="body"></div>
    </Intro_1ST>
  )
}

export default Intro_1

const Intro_1ST = styled.div`
width:100%;
height: 653px;

.header {
  height: 369px;
  width: 864px;
  margin: 0 auto;
  padding: 100px 0 20px;
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
  height: 284px;
  background-image: url("	https://s3.ap-northeast-2.amazonaws.com/wanted-public/resume_intro/resume_01_en.png");
  background-position: center;
  background-size: cover;
}
`