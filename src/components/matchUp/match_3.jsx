import styled from "styled-components"

const Match_3 = () => {
  return (
    <Match_3ST>
      <div className="inner">
        <h2>인사담당자들이 검증한 인재 검색 서비스</h2>
        <div className="desc">
          지금도 인사담장자들의 적극적인 면접 제안이 이루어지고 있습니다.
        </div>
        <div className="wrap">
          <div className="card">
            <div className="header">
              수동적으로 이력서를 기다리는 것 보다<br/> 저희와 fit한 인재를 직접 찾아 볼 수 있다는<br/> 것이 가장 마음에 들었어요.
              <div className="arrow"></div>
            </div>
            <div className="body">
              <div className="name">
                대기업 N사, 채용담당자
              </div>
              <div className="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <div className="point">4.8</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="header">
              6개월 동안 채용하지 못한 개발자를 1개월<br/>만에 매치업 면접 제안을 통해 찾을 수<br/> 있었어요.
              <div className="arrow"></div>
            </div>
            <div className="body">
              <div className="name">
                외국계기업 A사, 리크루터
              </div>
              <div className="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <div className="point">4.8</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="header">
              현재 구직의사가 있는지 먼저 확인한 후에<br/> 면접 제안을 보낼 수 있어서 편리했어요.
              <div className="arrow"></div>
            </div>
            <div className="body">
              <div className="name">
                스타트업 C사, 인사담당자
              </div>
              <div className="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <div className="point">4.5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      1
    </Match_3ST>
  )
}

export default Match_3

const Match_3ST = styled.div`
width: 100%;
height: 620px;
background-color: #f1f2f3ba;

.inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1060px;
  padding-top: 80px;
  margin: 0 auto;
}

h2 {
  font-size: 40px;
  font-weight: 600;
}

.desc {
  margin-top: 30px;
  font-size: 18px;
}

.wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 70px;
}

.card {
  margin: 0 15px;
}

.header {
  position: relative;
  width: 350px;
  height: 180px;
  padding: 50px 39px ;
  background-color: white;
  border-radius: 10px;
  font-size: 16px;
  color: #333;
  line-height: 30px;
}

.arrow {
  position: absolute;
  left: 50%;
  bottom: -20px;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 15px solid white;
}

.body {
  margin-top: 50px;
}

.name {
  font-size: 20px;
  font-weight: 600;
  text-align: center;
}

.star {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

i {
  margin: 0 3px;
  color: #999;
}

.point {
  position: relative;
  top: 1px;
  right: -2px;
  font-size: 18px;
  color: #999;
}

`
