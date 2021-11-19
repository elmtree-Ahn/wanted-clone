import styled from "styled-components"

const BtnBlue = ({text}) => {
  return (
    <BtnWhiteST>
      {text}
    </BtnWhiteST>
  )
}

export default BtnBlue

const BtnWhiteST = styled.button`
width: 185px;
height: 57px;
font-size: 18px;
font-weight: 500;
margin: 0 5px;
padding-bottom: 6px;
color: white;
border: 1px solid #3366ff;
border-radius: 30px;
background-color: #3366ff;
`