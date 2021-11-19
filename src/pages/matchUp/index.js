import Header from "../../components/common/header"
import { PageWrap } from "../../components/common/styled"
import Footer from "../../components/common/footer";
import MatchUp from "../../components/matchUp/matchUp";

const MatchUpPage = () => {
  return (
    <PageWrap>
      <Header page="matchup" />
      <MatchUp />
      <Footer />
    </PageWrap>
  )
}

export default MatchUpPage