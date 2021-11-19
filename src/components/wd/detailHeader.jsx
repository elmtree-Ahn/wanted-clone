import styled from "styled-components";

const DetailHeader = () => {
  return (
    <DetailHeaderST>
      <h2>React 프론트엔드 개발자 (신입가능)</h2>
      <div className="sub">
        <div className="company">아데나소프트웨어</div>
        <div className="response">응답률 매우 높음</div>
        <div className="location">서울·한국</div>
      </div>
      <div className="tags">
        <TagST>#스톡옵션</TagST>
        <TagST>#간식</TagST>
        <TagST>#노트북</TagST>
        <TagST>#인원급성장</TagST>
        <TagST>#IT, 컨텐츠</TagST>
        <TagST>#연봉업계평균이상</TagST>
      </div>
    </DetailHeaderST>
  )
}

export default DetailHeader;

const DetailHeaderST = styled.div`
margin-top: 40px;
margin-bottom: 60px;

h2 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 50px;
}

.sub {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.company {
  font-size: 14px;
  font-weight: 600;
}

.response {
  margin: 0 10px;
  padding: 4px 5px;
  border: 1px solid #00aead;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 600;
  color: #00aead;
}

.location {
  font-size: 14px;
  color: #999;
}

.tags {
  display: flex;
  flex-wrap: wrap;
}
`

export const TagST = styled.div`
margin: 0 6px 10px 0;
padding: 9px 14px;
border-radius: 25px;
background-color: #f3f5f8;
font-size: 12px;
font-weight: 500;

`