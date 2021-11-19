import Header from "../../components/common/header"
import { PageWrap } from "../../components/common/styled"
import ResumeIntro from "../../components/resume/resumeIntro"
import Footer from "../../components/common/footer";

const ResumeIntroPage = () => {
  return (
    <PageWrap>
      <Header page="resumeIntroPage" />
      <ResumeIntro />
      <Footer />
    </PageWrap>
  )
}

export default ResumeIntroPage