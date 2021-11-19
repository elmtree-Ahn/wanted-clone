import styled from "styled-components";

const CompanyHeader = () => {
  return (
    <CompanyHeaderST>
      <div className="inner">
        <div className="header">
          <div className="icon"></div>
          <div className="title">운칠기삼</div>
        </div>
        <div className="follow">
          팔로우
        </div>
      </div>
    </CompanyHeaderST>
  )
}

export default CompanyHeader;

const CompanyHeaderST = styled.div`
width: 100%;
height: 105px;
border: 1px solid #e1e2e3;

.inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1060px;
  margin: 0 auto;
}

.header {
  display: flex;
  align-items: center;
  height: 115px;
}

.icon {
  width: 50px;
  height: 50px;
  border: 1px solid #f1f1f2;
  background-image: url('https://static.wanted.co.kr/images/wdes/0_4.efda735d.jpg');
  background-size: cover;
  background-position: center;
}

.title {
  margin-left: 16px;
  font-size: 26px;
  font-weight: 600;
}

.follow {
  padding: 11px 20px;
  background-color: #258bf7;
  border-radius: 3px;
  font-size: 16px;
  color: white;
}
`