import styled from "styled-components"

const Intro_3 = () => {
  return (
    <Intro_3ST>
      <div className="header">
        <h2>본질에 집중한</h2>
        <div className="contents">
          보다 명확한 정보 설계로 당신의 커리어를 돋보이게 만들어 드립니다.<br/><br/>불필요한 정보 입력을 최소화하고 이력서 작성에 방해가 되는 UI 요소들을 제거하였습니다.
        </div>
      </div>
      <div className="body"></div>
    </Intro_3ST>
  )
}

export default Intro_3

const Intro_3ST = styled.div`
width: 100%;
height: 564px;


.header {
  height: 300px;
  width: 864px;
  margin: 0 auto;
  padding: 100px 0 20px;
}

h2 {
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  color: #333;
}

.contents {
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  margin: 20px 0 0;
  color: #333;
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
  height: 284px;
  width: 100%;
  background-image: url("https://s3.ap-northeast-2.amazonaws.com/wanted-public/resume_intro/resume_03_ko.png");
background-position: center;
background-size: cover;
}
`