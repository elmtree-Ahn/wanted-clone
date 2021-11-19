import styled from "styled-components"

const MainProfile = () => {
  return (
    <MainProfileST>
      <div className="box">
        <div className="header">
          <div className="icon">
            <i class="fas fa-user"></i>
          </div>
          <div className="text">
            최신 이력서 상태를 유지하고 열람 순위를 높이세요
          </div>
        </div>
        <div className="button">
          프로필 업데이트
        </div>
      </div>
    </MainProfileST>
  )
}

export default MainProfile

const MainProfileST = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 250px;

.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1060px;
  height: 90px;
  padding: 0 30px;
  background-color: #258bf7;
  border-radius: 5px;
}

.header {
  display: flex;
  align-items: center;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  margin-right: 15px ;
  border-radius: 50%;
  background-color: #e1e2e3;
}

.icon i {
  font-size: 22px;
  color: white;
}

.text {
  font-size: 18px;
  color: white;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 175px;
  height: 41px;
  padding: 10px 40px;
  border-radius: 3px;
  background-color: white;
  font-size: 15px;
  font-weight: 600;
  color: #258bf7;
}
`