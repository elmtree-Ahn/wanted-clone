import { useState } from "react";
import styled from "styled-components";


const Side = () => {

  const [click, setClick] = useState(false)

  const onBookMark = () => {
    setClick(!click)
  }


  return (
    <SideST>
      <div className="share">
        <i class="fas fa-share-alt"></i>
      </div>
      <h3>채용보상금</h3>
      <div className="boxWrapper">
        <div className="box">
          <div className="header">추천인</div>
          <div className="body">500,000원</div>
        </div>
        <div className="box">
          <div className="header">지원자</div>
          <div className="body">500,000원</div>
        </div>
      </div>
      <div className="button bookmark" onClick={()=>onBookMark()}>
        {
          click === false
          ? (
            <>
              <i class="far fa-bookmark"></i>
              북마크하기
            </>
          )
          : (
            <>
              <i class="fas fa-bookmark"></i>
              북마크 완료
            </>
          )
        }
      </div>
      <div className="button apply">
        지원하기
      </div>
      <div className="loveIt">
        <i class="fas fa-heart"></i>
        <div className="number">1</div>
      </div>

    </SideST>
  )
}

export default Side;

const SideST = styled.div`
position: relative;
width: 340px;
height: 323px;
padding: 24px 20px;
border: 1px solid #e1e2e3;
border-radius: 3px;

.share {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border: 1px solid #e1e2e3;
  border-radius: 20px;
}

.fa-share-alt {
  color: #3366ff;
  /* font-weight: 600; */
}

h3 {
  margin-bottom: 28px;
  font-size: 15px;
  font-weight: 600;
}

.boxWrapper {
  display: flex;
  margin-bottom: 30px;
}

.box {
  width: 200px;
}

.header {
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #999;
}

.body {
  font-size: 15;
  font-weight: 600;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 298px;
  height: 50px;
  font-size: 16px;
  font-weight: 600;
  color: #3366ff;
  border: 1px solid #3366ff;
  border-radius: 25px;
  margin-bottom: 10px;
  cursor: pointer;
}

.button i {
  color: #3366ff;
  margin-right: 10px;
}

.apply {
  background-color: #3366ff;
  color: white;
}

.loveIt {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  height: 30px;
  width: 67px;
  margin: 20px 0 0;
  padding: 0 15px;
  border: 1px solid #e1e2e3;
  border-radius: 15px;
}

.fa-heart {
  color: red;
  font-size: 14px;
  margin-right: 4px;
}
`