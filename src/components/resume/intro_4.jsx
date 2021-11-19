import styled from "styled-components"
import BtnBlue from "../common/btnBlue"
import BtnWhite from "../common/btnWhite"

const Intro_4 = () => {
  return (
    <Intro_4ST>
      <div className="header">
        <h2>활용이 자유로운</h2>
        <div className="contents">
          PC/모바일 어디에서나 작성할 수 있고, PDF 파일로 저장과 활용이 쉽습니다.<br/><br/>가독성에 중점을 두고 설계하여, 파일 저장/출력시에도 돋보이는 결과물을 얻을 수 있습니다.
        </div>
        <div className="btnBox">
          <BtnWhite text="샘플 다운로드"/>
          <BtnBlue text="새 이력서 작성" />
        </div>
      </div>
      <div className="body"></div>
    </Intro_4ST>
  )
}

export default Intro_4

const Intro_4ST = styled.div`
width:100%;
height: 653px;
background-image: url("	https://s3.ap-northeast-2.amazonaws.com/wanted-public/resume_intro/resume_04.jpg");
background-position: center;
background-size: cover;

.header {
  height: 369px;
  width: 864px;
  margin: 0 auto;
  padding: 100px 0 20px;
}

h2 {
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  color: white;
}

.contents {
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  margin: 20px 0 0;
  color: white;
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

}
`