import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import MainContents from "./mainContents";
import MainPosition from "./mainPosition";
import MainProfile from "./mainProfile";
import MainSlider from "./mainSlider";

const Main = () => {

  // 로그인 여부 확인
  useEffect(()=>{
    if (localStorage.getItem("JWT") === null ) {
      window.location.href = "http://localhost:3000/"
    }
  },[])


  // api 연결

  const [banner, setBanner] = useState([]);
  const [employ, setEmploy] = useState([]);

  useEffect( async()=>{
    try {
      const url = `https://jminie-stark.shop/app`

      const res = await axios.get(url, {
        headers: {
          "X-ACCESS-TOKEN": localStorage.getItem("JWT")
        }
      })

    setBanner(res.data.result.banner);
    setEmploy(res.data.result.employmentList)
    // console.log(employ)
    }

    catch (error) {
      console.log(error);
    }
  }, [])




  return (
    <MainST>
      <MainSlider banner={banner}/>
      <MainProfile />
      <MainPosition employ={employ}/>
      <MainContents />
    </MainST>
  )
}

export default Main;

const MainST = styled.div`
margin-top: 35px;
`