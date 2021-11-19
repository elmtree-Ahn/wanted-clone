import { useEffect } from "react";
import styled from "styled-components"
import { USER } from "../../api/api";
import PostiveCompanyCard from "./PostiveCompanyCard";
import axios from "axios";
import { Link } from "react-router-dom";

const PostiveCompany = () => {

  return (
    <PostiveCompanyST>
      <PostiveCompanyCard img="https://static.wanted.co.kr/images/company/79/b7oclxmvukwufwsg__1080_790.jpg" logo="https://static.wanted.co.kr/images/wdes/0_5.ce4fd8b1.jpg" title="원티드랩" sub="19"/>
      <Link to="/company">
        <PostiveCompanyCard img="https://static.wanted.co.kr/images/company/8382/2umeocai7vngmknf__1080_790.jpg" logo="https://static.wanted.co.kr/images/wdes/0_5.efda735d.jpg" title="운칠기삼" sub="3"/>
      </Link>
      <PostiveCompanyCard img="https://static.wanted.co.kr/images/company/20210/wrlnbohhlzrsvnjm__1080_790.jpg" logo="https://static.wanted.co.kr/images/wdes/0_5.79fd7a59.jpg" title="뮤즈그룹" sub="11"/>
      <PostiveCompanyCard img="https://static.wanted.co.kr/images/company/696/dlkmxui2qjz8tya5__1080_790.jpg" logo="https://static.wanted.co.kr/images/wdes/0_5.5df407f4.png" title="메디트(Medit)" sub="16"/>
      <PostiveCompanyCard img="https://static.wanted.co.kr/images/company/11612/00hj4iz3bvmtxaik__1080_790.jpg" logo="https://static.wanted.co.kr/images/wdes/0_5.9a9d628a.jpg" title="미스터멘션" sub="10"/>
    </PostiveCompanyST>
  )
}

export default PostiveCompany;

const PostiveCompanyST = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 15px;
`