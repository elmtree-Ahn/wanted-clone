import Header from "../../components/common/header"
import { PageWrap } from "../../components/common/styled"
import Mywanted from "../../components/mywanted/mywanted"

const MywantedPage = () => {
  return (
    <PageWrap>
      <Header page="mywanted" />
      <Mywanted />
    </PageWrap>
  )
}

export default MywantedPage