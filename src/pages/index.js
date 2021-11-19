import styled from "styled-components"
import { TextMiddle, PageWrap } from "../components/common/styled";
import Header from "../components/common/header";
import Intro from "../components/intro/Intro";
import Footer from "../components/common/footer";


const IndexPage = () => {
  return (
    <PageWrap>
      <Header page="index" />
      <Intro/>
      <Footer/>
    </PageWrap>
  )
}



export default IndexPage