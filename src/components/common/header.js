import styled from "styled-components"
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../login_signup/Modal";

const Header = ({ page }) => {

  // 모달 열고 닫기
  const [open, setOpen] = useState(false)
  const modalOpen = () => {setOpen(true)}
  const modalClose = () => {setOpen(false)}
  // console.log(open)

  // 토글 열고 닫기
  const [toggleOpen, setToggleOpen] = useState(false)

  
  // 오버레이 열고 닫기
  const openOver = () => {
    const overlay = document.querySelector('.overlay');
    overlay.classList.add('show')
    setTimeout(function(){
      overlay.classList.add('appear', 1001);
    })
  }   
  const closeOver = () => {
    const overlay = document.querySelector('.overlay');
    overlay.classList.remove('show', 'appear')
  }   
  
  // 로그인 전후 헤더 변경
  const [isLogin, setIsLogin] = useState(``);

  useEffect(()=>{
    setIsLogin(localStorage.getItem("JWT"));
    
  }, [])



  // 로그아웃
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <HeaderStyle>
      <div className="inner">
        {
          isLogin === null
          ? (
            <Link to="/">
              <img className="logo" src="https://theme.zdassets.com/theme_assets/9309779/480a35976bf401a88dd7388d8f5c19d77227cd35.png" alt="" />
            </Link>
          )
          : (
            <Link to="/main">
              <img className="logo" src="https://theme.zdassets.com/theme_assets/9309779/480a35976bf401a88dd7388d8f5c19d77227cd35.png" alt="" />
            </Link>
          )
        }

        <div className="nav_menu">
          <ul>
            <Link to="/wdlist">
              <MenuStyle onMouseOver={() => {openOver()}}>탐색</MenuStyle>
            </Link>
            <MenuStyle onMouseOver={() => {closeOver()}}>커리어 성장</MenuStyle>
            <MenuStyle onMouseOver={() => {closeOver()}}>직군별 연봉</MenuStyle>
            {
            isLogin ===null
            ? ( <>
              <Link to="/resumeIntro">
                <MenuStyle onMouseOver={() => {closeOver()}}>이력서</MenuStyle>
              </Link>
            </> )
            : ( <>
              <Link to="/resume">
                <MenuStyle onMouseOver={() => {closeOver()}}>이력서</MenuStyle>
              </Link>
            </> )
            }
            <Link to='/matchUp'>
              <MenuStyle onMouseOver={() => {closeOver()}}>매치업</MenuStyle>
            </Link>
            <MenuStyle onMouseOver={() => {closeOver()}}>프리랜서</MenuStyle>
            <MenuStyle className="ai" onMouseOver={() => {closeOver()}}>AI 합격예측</MenuStyle>
          </ul>
        </div>
        <div className="aside">
          <ul>
          { isLogin === null
            ? ( <>
              <li className="search"><i class="fas fa-search"></i></li>
              <li className="login" onClick={()=>{modalOpen()}}>회원가입/로그인</li>
              </>
              )
            : ( <>
              <li className="search"><i class="fas fa-search"></i></li>
              <li className="bell"><i class="far fa-bell"></i></li>
              
              <li className="user" onClick={()=>{setToggleOpen(!toggleOpen)}}>
              <i class="fas fa-user"></i>
                {
                  toggleOpen === true
                  ? (<>
                  <div className="mypageToggle">
                    <div className="triangle"></div>
                    <Link to="/mywanted">
                      <div className="menu">
                        <div className="deco">MY 원티드</div>
                      </div>
                    </Link>
                    <Link to="/likesList">
                      <div className="menu">
                        <div className="deco">좋아요</div>
                      </div>
                    </Link>
                    <Link to="bookMarkList" >
                    <div className="menu">
                      <div className="deco">북마크</div>
                    </div>
                    </Link>
                    <div className="menu logout" onClick={logout}>
                      로그아웃
                    </div>
                  </div></>)
                  : null
                }
                
              </li>
              </>
              )
          }
            <li className="coper"><button>기업 서비스</button></li>
          </ul>
        </div>
      </div>



      <div className="overlay"  onClick={()=>{closeOver()}}>
        <div className="bg">

          <div className="inner">
          <div className="contentsBox">
            <div className="big">
              개발
              <i class="fas fa-chevron-right"></i>
            </div>
            <div className="small">웹 개발자</div>
            <div className="small">서버 개발자</div>
            <div className="small">프론트엔드 개발자</div>
            <div className="small">자바 개발자</div>
            <div className="small">소프트웨어 엔지니어</div>
            <div className="small">안드로이드 개발자</div>
            <div className="small">iOS 개발자</div>
            <div className="small">데이터 엔지니어</div>
          </div>

          <div className="contentsBox">
            <div className="big hidden">
              hidden
              <i class="fas fa-chevron-right" className="hidden"></i>
            </div>
            <div className="small">파이썬 개발자</div>
            <div className="small">Node.js 개발자</div>
            <div className="small">DevOps / 시스템 관리자</div>
            <div className="small">시스템,네트워크 관리자</div>
            <div className="small">C,C++ 개발자</div>
            <div className="small">머신러닝 엔지니어</div>
            <div className="small">데이터 사이언티스트</div>
            <div className="small">
              더보기
              <i class="fas fa-chevron-right"></i>
            </div>
          </div>


          <div className="contentsBox">
            <div className="big">
              경영·비즈니스
              <i class="fas fa-chevron-right"></i>
            </div>
            <div className="small">서비스 기획자</div>
            <div className="small">사업개발·기획자</div>
            <div className="small">PM·PO</div>
            <div className="small">전략 기획자</div>
            <div className="small">운영 매니저</div>
            <div className="small">경영지원</div>
            <div className="small">데이터 분석가</div>
            <div className="small">
              더보기
              <i class="fas fa-chevron-right"></i>
            </div>
          </div>

          <div className="contentsBox">
            <div className="big">
              마케팅·광고
              <i class="fas fa-chevron-right"></i>
            </div>
            <div className="small">마케터</div>
            <div className="small">디지털 마케터</div>
            <div className="small">퍼포먼스 마케터</div>
            <div className="small">콘텐츠 마케터</div>
            <div className="small">마케팅 전략 기획자</div>
            <div className="small">브랜드 마케터</div>
            <div className="small">광고 기획자(AE)</div>
            <div className="small">
              더보기
              <i class="fas fa-chevron-right"></i>
            </div>
          </div>

          <div className="contentsBox">
            <div className="big">
              디자인
              <i class="fas fa-chevron-right"></i>
            </div>
            <div className="small">UX 디자이너</div>
            <div className="small">UI,GUI 디자이너</div>
            <div className="small">웹 디자이너</div>
            <div className="small">그래픽 디자이너</div>
            <div className="small">모바일 디자이너</div>
            <div className="small">광고 디자이너</div>
            <div className="small">BI/BX 디자이너</div>
            <div className="small">
              더보기
              <i class="fas fa-chevron-right"></i>
            </div>
          </div>

          <div className="contentsBox">
            <div className="big">
              영업
              <i class="fas fa-chevron-right"></i>
            </div>
            <div className="small">기업영업</div>
            <div className="small">외부영업</div>
            <div className="small">영업 관리자</div>
            <div className="small">기술영업</div>
            <div className="small">주요고객사 담당자</div>
            <div className="small">해외영업</div>
            <div className="small">솔루션 컨설턴트</div>
            <div className="small">
              더보기
              <i class="fas fa-chevron-right"></i>
            </div>
          </div>

          <div className="contentsBox">
            <div className="big">
              고객서비스·리테일
              <i class="fas fa-chevron-right"></i>
            </div>
            <div className="small">MD</div>
            <div className="small">CS 매니저</div>
            <div className="small">서비스 운영</div>
            <div className="small">리테일 MD</div>
            <div className="small">CS 어드바이저</div>
            <div className="small">패션 MD</div>
            <div className="small">CRM 전문가</div>
            <div className="small">
              더보기
              <i class="fas fa-chevron-right"></i>
            </div>
          </div>

          <div className="contentsBox">
            <div className="big">
              인사
              <i class="fas fa-chevron-right"></i>
            </div>
            <div className="small">인사담당</div>
            <div className="small">리크루터</div>
            <div className="small">조직문화</div>
            <div className="small">평가·보상</div>
            <div className="small">헤드헌터</div>
            <div className="small">HRD</div>
            <div className="small">HRBP</div>
            <div className="small">
              더보기
              <i class="fas fa-chevron-right"></i>
            </div>
          </div>

          <div className="contentsBox">
            <div className="big">
              미디어
              <i class="fas fa-chevron-right"></i>
            </div>
            <div className="small">콘텐츠 크리에이터</div>
            <div className="small">PD</div>
            <div className="small">영상 편집자</div>
            <div className="small">에디터</div>
            <div className="small">비디오 제작</div>
            <div className="small">작가</div>
            <div className="small">통·번역</div>
            <div className="small">
              더보기
              <i class="fas fa-chevron-right"></i>
            </div>
          </div>

          <div className="contentsBox">
            <div className="big">
              게임 제작
              <i class="fas fa-chevron-right"></i>
            </div>
            <div className="small">게임 기획자</div>
            <div className="small">게임 클라이언트 개발자</div>
            <div className="small">모바일 게임 개발자</div>
            <div className="small">게임 아티스트</div>
            <div className="small">게임 그래픽 디자이너</div>
            <div className="small">유니티 개발자</div>
            <div className="small">게임 서버 개발자</div>
            <div className="small">
              더보기
              <i class="fas fa-chevron-right"></i>
            </div>
          </div>

          <div className="contentsBox">
            <div className="big">
              금융
              <i class="fas fa-chevron-right"></i>
            </div>
            <div className="small">재무 담당자</div>
            <div className="small">회계담당</div>
            <div className="small">투자·증권</div>
            <div className="small">IR</div>
            <div className="small">재무 분석가</div>
            <div className="small">애널리스트</div>
            <div className="small">자산운용가</div>
            <div className="small">
              더보기
              <i class="fas fa-chevron-right"></i>
            </div>
          </div>

          <div className="contentsBox">
            <div className="big">
              엔지니어링·설계
              <i class="fas fa-chevron-right"></i>
            </div>
            <div className="big">
              의료·제약·바이오
              <i class="fas fa-chevron-right"></i>
            </div>
            <div className="big">
              물류·무역
              <i class="fas fa-chevron-right"></i>
            </div>
            <div className="big">
              제조·생산
              <i class="fas fa-chevron-right"></i>
            </div>
            <div className="big">
              식·음료
              <i class="fas fa-chevron-right"></i>
            </div>
            <div className="big">
              교육
              <i class="fas fa-chevron-right"></i>
            </div>
            <div className="big">
              법률·법집행기관
              <i class="fas fa-chevron-right"></i>
            </div>
            <div className="big">
              건설·복지
              <i class="fas fa-chevron-right"></i>
            </div>
            <div className="big">
              공공·복지
              <i class="fas fa-chevron-right"></i>
            </div>
          </div>
          
          </div>
        </div>
      </div>
      {open && <Modal modalClose={modalClose}/>}
    </HeaderStyle>
  )
}

export default Header;

const HeaderStyle = styled.div`
  position: fixed;
  top: 0;
  z-index: 998;
  width: 100vW;
  height: 50px;
  border-bottom: 1px solid #ddd;
  background-color: white;

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1060px;
    margin-left: auto;
    margin-right: auto;
  }

  .logo {
    width: 77px;
    height: auto;
  }

  ul {
    display: flex;
    align-items: center;
  }

  li {
    cursor: pointer;
  }

  .ai::after {
    content: "Beta";
    position: absolute;
    top: 7px;
    right: -4px;
    font-size: 10px;
    color: #1c3dd4;
  }

.aside .search,
.aside .bell {
  margin: 0 10px;
}  

.aside .user {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin: 0 10px;
  border: 1px solid #e1e2e3;
  background-color: #e1e2e3;
  border-radius: 50%;
}

.aside .user:visited {
  outline: 1px solid #1c3dd4;
}

.aside .user {
  position: relative;
}

.aside .user i {
  color: white;
  text-align: center;
}

.aside .login {
  margin-right: 6px;
  padding: 0 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -.2px;
  text-align: center;
}

.aside .coper {
  display: flex;
}

.aside .coper::before {
  display: block;
  content: "";
  width: 1px;
  height: 10px;
  background-color: #e1e2e3;
  margin: auto 10px;
}

.aside .coper button {
  margin-left: 15px;
  padding: 5px 10px;
  border: 1px solid #e1e2e3;
  border-radius: 20px;
  background-color: white;
  font-size: 13px;
  letter-spacing: -.2.5px;
  color: #666;
}


.contentsBox {
  width: 158px;
  padding: 40px 20px 0px 0px;

  }

.big {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 158px;
  padding: 0 20px 15px 0;
  font-size: 17px;
  cursor: pointer;
}

.big i {
  font-size: 12px;
  color: #999;
}

.small {
  display: flex;
  justify-content: space-between;
  padding: 5px 20px 5px 0;
  font-size: 13px;
  letter-spacing: -.5px;
  color: #999;
  cursor: pointer;
}

.small i {
  font-size: 12px;
  color: #999;
}

.overlay .inner {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}

.hidden {
  color: white;
}

.overlay {
  display: none;
  /* display: none; */
}

.show {
  display: block;
  height: 100vh;
  background-color: rgba(145, 144, 144, .9);
  
}

.bg {
  width: 100vw;
  height: 590px;
  background-color: white;
  opacity: 1;
}

.appear {
  animation:.5s;
  animation-fill-mode: forwards;
  display: flex;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.makeOverlay:hover .overlay {
  display: block;
}

.mypageToggle {
  position: absolute;
  left: -23px;
  bottom: -220px;
  width: 192px;
  padding: 14px 0 0px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #eee;
  box-shadow: 3px 0 10px #aaa;
  z-index: 999;
  
}

.mypageToggle .triangle {
  position: absolute;
  top: -12px;
  left: 30px;
  margin-top: 4px;
  border-top: 1px solid #cdcdcd;
  border-right: 1px solid #cdcdcd;
  background-color: #fff;
  height: 14px;
  width: 14px;
  display: block;
  border-top-right-radius: 30%;
  -webkit-transform: rotate(-55deg) skewX(-20deg);
  transform: rotate(-55deg) skewX(-20deg);
  
}

.mypageToggle .menu {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45px;
  padding: 8px;
  background-color: white;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
}

.mypageToggle .deco {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 35px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
}
.mypageToggle .deco:hover {
  background-color: #fafafa;
}

.mypageToggle .logout {
  background-color: #fafafa;
} 

`


const MenuStyle = styled.li`
  position: relative;
  padding: 15px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -.2px;
  text-align: center;

  :hover:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #ddd;
  }

  
`


