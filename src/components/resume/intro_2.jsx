import styled from "styled-components"

const Intro_2 = () => {
  return (
    <Intro_2ST>
      <div className="header">
        <h2>지원에 유리한</h2>
        <div className="contents">
          글로벌 기업에 보편적이고, 성별이나 가족관계 등 차별 금지 정책에 맞춰서 제작하였습니다.<br/><br/>군더더기 없이, 당신의 진짜 경쟁력을 드러 내 보세요.
        </div>
      </div>
      <div className="body"></div>
    </Intro_2ST>
  )
}

export default Intro_2

const Intro_2ST = styled.div`
width: 100%;
height: 564px;
background-image: url("https://s3.ap-northeast-2.amazonaws.com/wanted-public/resume_intro/resume_02.jpg");
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

}
`