import styled from "styled-components";

const CompanyBookMarkCard = ({img, title, company, location}) => {
  return (
    <CompanyBookMarkCardST>
      <div className="imgBox" style={{backgroundImage: `url(${img})`}}>
      </div>
      <div className="contents">
        <h3>{title}</h3>
        <div className="company">{company}</div>
        <div className="location">서울·한국</div>
      </div>
    </CompanyBookMarkCardST>
  )
}

export default CompanyBookMarkCard;

const CompanyBookMarkCardST = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 354px;
  height: 100px;
  margin-bottom: 18px;

  .imgBox {
    width: 100px;
    height: 100px;
    border: 1px solid #e1e2e3;
    border-radius: 3px;
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
  }

  .contents {
    width: 254px;
    padding: 5px 0 0 20px;
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    max-width: 234px;
    margin-bottom: 8px;
    text-overflow: ellipsis;
  }

  .company {
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .location {
    font-size: 14px;
    color: #999;
  }


`