import styled from "styled-components";

const CopyRight = () => {
  return (
    <CopyRightST>
      <div className="content">
        <i class="fas fa-info"></i>
        <span>본 채용정보는 원티드랩의 동의 없이 무단전재, 재패보, 제공할 수 없으며,<br/>구직활동 이외의 용도로 사용할 수 없습니다.</span>
      </div>
      <i class="fas fa-chevron-down"></i>
    </CopyRightST>
  )
}

export default CopyRight;

const CopyRightST = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 700px;
height: 94px;
padding: 25px 30px;
background-color: #f3f2f9;

.content {
  display: flex;
  align-items: center;
}

.content i {
  color: #666;
  margin-left: 10px;
  margin-right: 30px;
}

.content span {
  font-size: 12px;
  font-weight: 700;
  line-height: 22px;
}

.fa-chevron-down {
  font-size: 12px;
}

`