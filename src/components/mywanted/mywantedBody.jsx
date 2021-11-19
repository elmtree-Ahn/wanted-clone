import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import CompanyBookMarkCard from "./companyBookMarkCard";

const MywantedBody = () => {

  const [userData, setUserData] = useState(``)

  useEffect(()=>{
    const callApi = setTimeout(async() =>{

      try {
        const url = `https://jminie-stark.shop/app/users/my-wanted`
  
        const res = await axios.get(url, {
          headers: {
            "X-ACCESS-TOKEN": localStorage.getItem("JWT")
          }
        })
        setUserData(state => res.data.result);
        // console.log(res.data.result.user);
      }
      catch (error) {
        console.log(error);
      }
    }, 0)

    return () => {
      clearTimeout(callApi)
    }

  }, [])

  return (
    <MywantedBodyST>
      <ContentsWrapST className="first">
        <h2 className="apply">지원현황</h2>
        <ul>
          <li>
            <div>0</div>
            <span>지원 완료</span>
          </li>
          <li>
            <div>0</div>
            <span>서류 통과</span>
          </li>
          <li>
            <div>0</div>
            <span>최종 합격</span>
          </li>
          <li>
            <div>0</div>
            <span>불합격</span>
          </li>
        </ul>
      </ContentsWrapST>
      <ContentsWrapST>
        <div className="header">
          <h2>북마크</h2>
          <div className="fullView">
            <span>총 1개 전체보기</span>
            <i class="fas fa-chevron-right"></i>
          </div>
        </div>
        <div className="cardWrap">
          <CompanyBookMarkCard img="https://pds.saramin.co.kr/company/logo/202107/27/qwvdnj_qwvj-1ojlg8k_logo.png" title="React 프론트엔드 개발자 (신입가능)" company="아데나소프트웨어" location=""/>
        </div>
      </ContentsWrapST>
      <ContentsWrapST>
        <div className="header">
          <h2>좋아요</h2>
          <div className="fullView">
            <span>총 4개 전체보기</span>
            <i class="fas fa-chevron-right"></i>
          </div>
        </div>
        <div className="cardWrap">
          <CompanyBookMarkCard img="https://pds.saramin.co.kr/company/logo/202107/27/qwvdnj_qwvj-1ojlg8k_logo.png" title="React 프론트엔드 개발자 (신입가능)" company="아데나소프트웨어" location=""/>
          <CompanyBookMarkCard img="https://image.edaily.co.kr/images/Photo/files/NP/S/2017/03/PS17030300231.jpg" title="[FE 서비스팀] 프론트엔드 개발자" company="야놀자" location=""/>
          <CompanyBookMarkCard img="https://blog.kakaocdn.net/dn/ctocdN/btqBAWoc5kx/SUn5JU5g0QIp6WEmm5A541/img.jpg" title="배민쇼핑라이브 사업기획" company="우아한형제들" location=""/>
          <CompanyBookMarkCard img="https://blog.kakaocdn.net/dn/bPWm4U/btqw8CtgkMu/pYxOoDLchCJHKrRkhElo7k/img.jpg" title="[카카오커머스] 데이터 분석/엔지니어" company="카카오커머스" location=""/>
        </div>
      </ContentsWrapST>
      <ContentsWrapST>
        <h2>MY 원티드+</h2>
        <div className="desc">
          직군별 최고의 교육을 한 곳에서 볼 수 있는 원티드+를 이용해보세요<br/>
          <b>500개의 영상</b>을 언제든 볼 수 있습니다.
        </div>
        <div className="buttonWrap">
          <button>원티드+ 구독하기</button>
        </div>
      </ContentsWrapST>
      <ContentsWrapST>
        <h2>MY 영상</h2>
        <div className="desc">
          이벤트 메뉴에서 영상을 구매·추가해보세요
        </div>
        <div className="buttonWrap">
          <button>이벤트 바로가기</button>
        </div>
      </ContentsWrapST>
      <ContentsWrapST>
        <h2>추천</h2>
        <div className="desc">
          많은 사람과 좋은 회사가 더 많이 연결되도록 추천하고, 추천받고, 성장하세요.
        </div>
        <div className="buttonWrap">
          <button>추천 시작하기</button>
        </div>
      </ContentsWrapST>
    </MywantedBodyST>
  )
} 

export default MywantedBody;

const MywantedBodyST = styled.div`
.first {
  margin-bottom: 20px;
}
`





const ContentsWrapST = styled.div`
width: 790px;
padding: 25px 22px;
background-color: white;
border: 1px solid #ddd;

h2 {
  margin: 0;
  padding: 0 10px;
  font-size: 18px;
  font-weight: 700;
  line-height: 19.8px;
  }

  .apply {
    margin-bottom: 25px;
  }


.first {
  margin-bottom: 20px;
}

ul {
  display: flex;
  justify-content: space-between;
}

li {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 197px;
  border-right: 1px solid #e1e2e3;
}

li:nth-child(4) {
  border: none;
}

li div {
  font-size: 36px;
  padding: 0 0 11px;
}

li span {
  font-size: 16px;
  line-height: 19px; 
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;
}

.fullView span, .fullView i{
  margin-left: 4px;
  font-size: 14px;
  color: #3366ff;
}

.cardWrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 10px; 
}

.desc {
  margin: 25px 0;
  padding: 0 10px;
  font-size: 16px;
  line-height: 28px;
  color: #424242;
}

b {
  font-weight: 600;
}

.buttonWrap {
  display: flex;
  justify-content: end;
}

.buttonWrap button {
  width: 230px;
  height: 40px;
  background-color: white;
  border: 1px solid #3366ff;
  border-radius: 25px;
  font-size: 15px;
  font-weight: 600;
  color: #3366ff;
}
`