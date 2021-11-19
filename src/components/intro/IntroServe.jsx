import styled from "styled-components";

const IntroServe = ({img, text1, text2, desc1, desc2}) => {
  return (
    <IntroServeST>
      <div className="imgBox">
        <img src={img} alt="" />
      </div>
      <div className="textBox">
        <h1>{text1}<br/>{text2}</h1>
        <h3>
          {desc1}<br/>
          {desc2}
        </h3>
      </div>

    </IntroServeST>
  )
}

export default IntroServe;

const IntroServeST = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 480px;

  .imgBox {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    height: 380px;
    width: 530px;
  }

  .textBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 470px;
    margin-left: 60px;
  }

  h1 {
    margin: 0 0 20px 0;
    font-size: 36px;
    font-weight: 600;
    line-height: 48px;
    color: #000;
  }

  h3 {
    font-size: 16px;
    font-weight: 500;
    line-height: 28px;
    color: #000;
  }
`