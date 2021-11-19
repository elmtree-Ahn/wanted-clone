import styled from "styled-components";

const IntroEnd = () => {
  return (
    <IntroEndST>
      <div className="content">
        <h1>
          커리어 성장과 행복을 위한 여정,<br/>
          지금 원티드에서 시작하세요.
        </h1>
        <h3>
          200만 직장인과 10,000개 기업이<br/>
          원티드와 커리어 여정을 함께합니다.
        </h3>
      </div>
      <div className="buttonBox">
        <button>지금 시작하기</button>
      </div>      
    </IntroEndST>
  )
}

export default IntroEnd;

const IntroEndST = styled.div`
  width: 100%;
  height: 520px;
  padding-top: 140px;
  background-image: url('https://static.wanted.co.kr/images/newintro/foot_pc.webp');
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  background-color: #eee;

  .content {
    text-align: center;
  }

  h1 {
    margin-bottom: 20px;
    font-size: 36px;
    font-weight: 600;
    line-height: 48px;
    color: white;

  }

  h3 {
    margin-bottom: 30px;
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    color: white;
  }

  .buttonBox {
    display: flex;
    justify-content: center;
  }

  button {
    width: 230px;
    height: 64px;
    background-color: #3a68f9;
    border-radius: 32px;
    outline: none;
    border: none;
    font-size: 20px;
    color: white;
    line-height: 17px;
    cursor: pointer;
    

  }
`