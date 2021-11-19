import styled from "styled-components"
import Intro_1 from "./intro_1"
import Intro_2 from "./intro_2"
import Intro_3 from "./intro_3"
import Intro_4 from "./intro_4"

const ResumeIntro = () => {
  return (
    <ResumeIntroST>
      <Intro_1/>
      <Intro_2/>
      <Intro_3/>
      <Intro_4/>
    </ResumeIntroST>
  )
}

export default ResumeIntro

const ResumeIntroST = styled.div`
padding-top: 50px;
`