import styled from "styled-components";
import IntroEnd from "./IntroEnd";
import IntorMain from "./IntroMain";
import IntroServe from "./IntroServe";

const Intro = () => {
  return (
    <IntroStyle>
      <IntorMain/>
      <IntroServe img="https://static.wanted.co.kr/images/newintro/001.webp" text1="더 나은 커리어를 위한" text2="새로운 기회" desc1="나에게 딱 맞는 회사를 찾거나" desc2="나에게 딱 맞는 회사가 커리어를 제안합니다."/>
      <IntroServe img="https://static.wanted.co.kr/images/newintro/002.webp" text1="실력있는 사람들과" text2="함께하는 성장" desc1="강연&밋업에서 이야기를 듣고 공유하며" desc2="함께 성장하는 기회를 발견합니다." />
      <IntroServe img="https://static.wanted.co.kr/images/newintro/003.webp" text1="원티드와 요즘 직장인이" text2="만드는 행복" desc1="직장인 행복을 위한 다양한 이벤트에 참여하고," desc2="일상 속 여유를 즐기기도 합니다."/>
      <IntroEnd/>
    </IntroStyle>


  )
}

export default Intro;

const IntroStyle = styled.div`
`