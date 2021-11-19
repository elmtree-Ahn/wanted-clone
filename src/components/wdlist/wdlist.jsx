import styled from "styled-components"
import AdoptionList from "./adoptionList"
import BookMark from "./bookMark"
import Category from "./category"
import Filter from "./filter"
import PostiveCompany from "./postiveCompany"

const Wdlist = () => {
  return (
    <WdlistST>
      <Category/>
      <div className="line"></div>
      <div className="inner">
        <Filter />
        <BookMark />
        <h2>적극 채용 중인 회사</h2>
        <PostiveCompany />
        <AdoptionList />
      </div>
      
    </WdlistST>
  )
}

export default Wdlist

const WdlistST = styled.div`
margin: 50px auto 0 ;
/* width: 1060px; */


.line {
  width: 100vw;
  height: 1px;
  margin: 20px 0 ;
  background-color: #e1e2e3;
}

.inner {
  width: 1060px;
  margin: 0 auto;
}

h2 {
  margin-top: 20px;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -.3px;

}
`