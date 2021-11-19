import styled from "styled-components";

const IntorMain = () => {
  return (
    <IntroMainStyle>
      <div className="content">
        <h1>
          직장인의 커리어 여정을 <br/>
          행복하게, 원티드
        </h1>
        <h3>지금 원티드와 커리어 여정을 시작하세요.</h3>
        <button>지금 시작하기</button>
      </div>
    </IntroMainStyle>
  )
}

export default IntorMain;

const IntroMainStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 550px;
  background-image: url('https://static.wanted.co.kr/images/newintro/pc.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  background-color: #eee;

  .content {
    width: 940px;
  }

  h1 {
    margin: 0 0 20px 0;
    font-size: 48px;
    font-weight: 600;
    line-height: 62px;
    color: #000;
  }

  h3 {
    margin: 0 0 30px 0 ;
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    color: #000;
  }

  button {
    height: 64px;
    width: 230px;
    padding-bottom: 7px;
    background-color: #3a68f9;
    border-radius: 32px;
    border: none;
    outline: none;
    font-size: 19px;
    color: white;
    text-align: center;
  }
  
`