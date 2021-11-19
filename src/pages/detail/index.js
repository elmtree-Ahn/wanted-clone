import Header from "../../components/common/header"
import { PageWrap } from "../../components/common/styled"
import Detail from "../../components/wd/detail"

const DetailPage = () => {
  return (
    <PageWrap>
      <Header page="detail" />
      <Detail />
    </PageWrap>
  )
}

export default DetailPage