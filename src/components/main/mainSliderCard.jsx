import styled from "styled-components";

const MainSliderCard = ({url, title, subTitle, linkUrl}) => {
  return (
    <MainSliderCardST style={{backgroundImage: `url(${url})`}}>
      <a href={linkUrl}>
      <div className="bg">
        <div className="inner">
          <div className="contentsBox">
            <h3>{title}</h3>
            <span>{subTitle}</span>
            <hr />
            <div className="letsGo">
              바로가기
              <i class="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
      </a>
      
    </MainSliderCardST>
  )
}

export default MainSliderCard;

const MainSliderCardST = styled.div`
width: 100%;
height: 300px;
background-color: red;
background-position: center;
background-size: cover;
background-repeat: none;

.inner {
  position: relative;
  width: 1060px;
  height: 300px;
  margin: 0 auto;
}

.contentsBox {
  position: absolute;
  bottom: 20px;
  width: 340px;
  height: 148px;
  padding: 20px 30px 14px;
  background-color: white;
  border-radius: 3px;
}


h3 {
  font-size: 22px;
  font-weight: 600;
  margin: 5px 0 15px;
}

span {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #666;
  margin-bottom: 40px;
}

hr {
  position: absolute;
  bottom: 40px;
  left: 0px;
  width: 340px;
  border: .1px solid #f4f6f8;
}

.letsGo {
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  color: #258bf7;
}

.letsGo i {
  margin-left: 5px;
  font-size: 12px;
  color: #258bf7;
}

`