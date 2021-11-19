import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import LoginModal from "./LoginModal";
import PassWordModal from "./passWordModal";
import SignupModal from "./SignupModal";
import { signupOnOff } from "../../store/modules/signup";

const Modal = ({modalClose}) => {

  // 회원가입 on/off
  const {onOff} = useSelector(state => ({
    onOff: state.modal.onOff
  }));

  const dispatch = useDispatch();

  const onSignupOnOff = () => dispatch(signupOnOff());



  return (
    <ModalST >
      {/* 모달 내부에 넣기. 함수 유무로 온오프 결정 */}
      {/* <div className="modalWrap" onClick={()=>{modalClose()}}></div> */}
      <div className="modal">
        {/* 로그인 모달 */}
        { 
        onOff === false
        ? <LoginModal modalClose={modalClose} />
        :  <SignupModal modalClose={modalClose} />
        }
        {/* <LoginModal modalClose={modalClose} /> */}
        {/* <SignupModal modalClose={modalClose} /> */}
        {/* <PassWordModal modalClose={modalClose} /> */}
      </div>
    </ModalST>
  )
}

export default Modal;

const ModalST = styled.div`
  .modalWrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    touch-action: none;
  }

  .modal {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #333333a7;
  }
`

