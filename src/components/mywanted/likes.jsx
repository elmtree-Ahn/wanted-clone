import { useState } from "react";
import styled from "styled-components";
import AdoptionListCard from "../wdlist/adoptionListCard";
import LikesCard from "./likesCard";

const LikesList = () => {


  return (
    <LikesListST>
      <div className="inner">
        <h2>좋아요</h2>
        <div className="cardWrap">
          <LikesCard img="https://static.wanted.co.kr/images/company/1028/3238_2_1.__1080_790.jpg" title="React 프론트엔드 개발자 (신입가능)" name="아데나소프트웨어" />
          <LikesCard img="https://static.wanted.co.kr/images/company/4924/mynzjzvx2zw7rbfx__1080_790.jpg" title="[FE 서비스팀] 프론트엔드 개발자" name="야놀자" />
          <LikesCard img="https://static.wanted.co.kr/images/company/102/vajfz5ehm3np2dnc__1080_790.jpg" title="배민쇼핑라이브 사업기획" name="우아한형제들" />
          <LikesCard img="https://static.wanted.co.kr/images/company/1376/5372_2_1.__1080_790.jpg" title="[카카오커머스] 데이터 분석/엔지니어" name="카카오커머스" />
          
        </div>
      </div>
    </LikesListST>
  )
}

export default LikesList;


const LikesListST = styled.div`
width: 100%;
height: 100%;
margin-top: 50px;
padding-bottom: 100px;
background-color: #f7f7f7;

.inner {
  width: 1060px;
  margin: 0 auto;
  padding: 50px 0;
}

h2 {
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 700;
}

.cardWrap {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 35px;
}
`