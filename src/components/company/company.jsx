import styled from "styled-components";
import CompanyBody from "./companyBody";
import CompanyHeader from "./companyHeader";

const Company = () => {
  return (
    <CompanySY>
      <CompanyHeader />
      <CompanyBody />
    </CompanySY>
  )
}

export default Company;

const CompanySY = styled.div`
margin-top: 35px;

.inner {
  width: 1060px;
  margin: 0 auto;
}
`