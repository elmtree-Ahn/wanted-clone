import Header from "../../components/common/header"
import { PageWrap } from "../../components/common/styled"
import Likes from "../../components/mywanted/likes"

const LikesListPage = () => {
  return (
    <PageWrap>
      <Header page="likesList" />
      <Likes />
    </PageWrap>
  )
}

export default LikesListPage