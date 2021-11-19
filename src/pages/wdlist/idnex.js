
import { TextMiddle, PageWrap } from "../../components/common/styled";
import Intro from "../../components/intro/Intro";
import Wdlist from "../../components/wdlist/wdlist";
import Footer from "../../components/common/footer";
import Header from "../../components/common/header";


const WdlistPage = () => {
  return (
    <PageWrap>
      <Header page="wdlist"/>
      <Wdlist/>
      <Footer/>
    </PageWrap>
  )
}



export default WdlistPage;