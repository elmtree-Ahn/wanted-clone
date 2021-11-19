import styled from "styled-components"
import { useEffect } from "react"
import { Link } from "react-router-dom"

const Resume = () => {

  // 로그인 여부 확인
  useEffect(()=>{
    if (localStorage.getItem("JWT") === null ) {
      window.location.href = "http://localhost:3000/resumeIntro"
    }
  },[])

  return (
    <ResumeST>
      <div className="inner">
        <div className="header">
          <h3>최근문서</h3>
          <Link to="/resumeIntro">
            <div className="intro">
              원티드 이력서 소개
              <i class="fas fa-info-circle"></i>
            </div>
          </Link>
        </div>
        <div className="body">
          <div className="box">
            <div className="circle"><i class="far fa-clone"></i></div>
            <div className="resumeTitle">새 이력서 작성</div>
          </div>
          <div className="box">
            <div className="circle upload"><i class="fas fa-file-upload"></i></div>
            <div className="resumeTitle">파일 업로드</div>
          </div>
        </div>
        
      </div>
    </ResumeST>
  )
}

export default Resume

const ResumeST =styled.div`
width: 100%;
height: 100%;
margin-top: 50px;
padding-bottom: 100px;
background-color: #f7f7f7;

.inner {
  width: 1060px;
  margin: 0 auto;
  padding-top: 50px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

h3 {
  font-size: 16px;
  font-weight: 600;
}

.intro {
  font-size: 16px;
  font-weight: 600;
  color: #3366ff;
}

.intro i {
  margin-left: 5px;
  font-size: 16px;
  font-weight: 600;
  color: #3366ff;
}

.body {
  display: flex;
}

.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 248px;
  height: 210px;
  margin: 0 7px;
  border: 1px solid #e1e2e3;
  background-color: white;
  border-radius: 1px;
}

.circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 74px;
  height: 74px;
  border-radius: 50%;
  background-color: #3366ff;
}

.circle i {
  font-size: 20px;
  color: white;
}

.resumeTitle {
  margin-top: 20px;
  font-size: 16px;
  font-weight: 600;
}

.upload {
  background-color: #eee;
}

.upload i {
  color: #777;
}
`