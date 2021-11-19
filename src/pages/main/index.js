import Header from "../../components/common/header"
import { PageWrap } from "../../components/common/styled"
import Main from "../../components/main/main"
import Mywanted from "../../components/mywanted/mywanted"
import Footer from "../../components/common/footer"

const MainPage = () => {
  return (
    <PageWrap>
      <Header page="main" />
      <Main />
      <Footer />
    </PageWrap>
  )
}

export default MainPage