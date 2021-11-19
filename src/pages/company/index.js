import Header from "../../components/common/header"
import { PageWrap } from "../../components/common/styled"
import Company from "../../components/company/company"
import Footer from "../../components/common/footer"

const CompanyPage = () => {
  return (
    <PageWrap>
      <Header page="company" />
      <Company />
      <Footer />
    </PageWrap>
  )
}

export default CompanyPage;