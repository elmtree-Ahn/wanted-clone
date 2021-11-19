import Header from "../../components/common/header"
import { PageWrap } from "../../components/common/styled"
import BookMarkList from "../../components/mywanted/bookMarkList"

const BookMarkListPage = () =>{
  return (
    <PageWrap>
      <Header page="bookmarkList" />
      <BookMarkList />
    </PageWrap>
  )
}

export default BookMarkListPage