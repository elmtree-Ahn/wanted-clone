import Header from "../../components/common/header"
import { PageWrap } from "../../components/common/styled"
import Resume from "../../components/resume/resume"

const ResumePage = () => {
  return (
    <PageWrap>
      <Header page="index" />
      <Resume />
    </PageWrap>
  )
}

export default ResumePage