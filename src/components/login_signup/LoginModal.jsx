import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";
import { USER } from "../../api/api";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { signupOnOff } from "../../store/modules/signup";
import { isLogin, userEmail, userJWT } from "../../store/modules/login";


const LoginModal = ({modalClose}) => {

    // 회원가입 on/off
    const {onOff} = useSelector(state => ({
      onOff: state.modal.onOff
    }));
  
    const dispatch = useDispatch();
    const onSignupOnOff = () => dispatch(signupOnOff());


    // 로그인 성공여부
    const [success, setSuccess] = useState('')


    // 로그인 정보 기억
    const {loginCheck, Email, JWT} = useSelector(state => ({
      loginCheck: state.login.loginCheck,
      Email: state.login.Email,
      JWT: state.login.JWT,
    }))

    const onIsLogin = () => dispatch(isLogin());
    const onUserEmail = email => dispatch(userEmail(email));
    const onUserJWT = jwt => dispatch(userJWT(jwt));

    // 서버 응답 결과
    const [server, setServer] = useState('')

    const [loginUserEmail, setloginUserEmail] = useState('');
    const [loginUserJSX, setloginUserJSX] = useState('')

    // 로그인 api 연결
    const onLogin = async() => {
      try {
        const email = document.getElementById("email");
        const pw = document.getElementById("pw");

        const res = await axios({
          method: "POST",
          url: 'https://jminie-stark.shop/app/users/login',
          data: {
            "userEmail": email.value,
            "userPassword": pw.value,
          }
        })
        if (res.data.isSuccess === false) {
          onSignupOnOff()
        }
        else if (res.data.isSuccess === true) {
          onIsLogin();
          localStorage.setItem("JWT", res.data.result.jwt)
          window.location.href = "http://localhost:3000/main"

        }
        console.log(res.data)
      }
      catch (error) {
        console.log(`에러는 : ${error}`)
      }
      
      // 기존의 방식
      // const email = document.getElementById("email");
      // const pw = document.getElementById("pw");
      
      // await axios ({
      //   method: "POST",
      //   url: 'https://jminie-stark.shop/app/users/login',
      //   data: {
      //     "userEmail": email.value,
      //     "userPassword": pw.value,
      //   }
      // }).then((res)=>{
      //   setSuccess(res.data.isSuccess)
      //   setServer(res.data)
      //   console.log(res.data);
      //   // state에 로그인 정보 담기
      //   setloginUserEmail(email.value)
      //   setloginUserJSX(res.data.result.jwt)
        
      // }).catch(error=>{
      //   console.log(error);
      //   throw new Error(error);
      // })
    }

    useEffect(() => {
      if (success === false) {
        onSignupOnOff()
      } 
      else if (success === true) {
        // 로그인 리덕스에 담아야한다.
        onIsLogin();
        // onUserEmail(loginUserEmail);
        // localStorage.setItem("jwt", loginUserJSX)

        // window.location.href = "http://localhost:3000/main"
      }
    }, [success])

  return (
    <LoginModalST >
      <div className="modalWrap" onClick={()=>{modalClose()}}></div>
      <div className="modal_inner" >
        <i class="fas fa-times" onClick={()=>{modalClose()}}></i>
        <div className="header">
          <img src="https://theme.zdassets.com/theme_assets/9309779/480a35976bf401a88dd7388d8f5c19d77227cd35.png" alt="" />
        </div>
        <div className="contents">
          <h1 onClick={onSignupOnOff}>
            직장인을 위한<br/>
            커리어 플랫폼, 원티드!
          </h1>
          <h3>
            커리어 성장과 행복을 위한 여정<br/>
            지금 원티드에서 시작하세요.
          </h3>
        </div>
        <div className="email">
          <label htmlFor="email">이메일</label>
          <input type="email" id="email" placeholder="이메일을 입력해 주세요." autoFocus/>
        </div>
        <div className="email pw">
          <label htmlFor="email">비밀번호</label>
          <input type="password" id="pw" placeholder="비밀번호를 입력해 주세요." autoFocus/>
        </div>
        <div className="continue">
          <button onClick={()=>{onLogin()}}>
            <i class="far fa-envelope"></i>
            이메일로 계속하기
          </button>
          <span>or</span>
          <span>다음 계정으로 계속하기</span>
          <div className="snsBtn">
            <div className="sns">
              <div className="snsLogo kakao"></div>
              <span>KaKao</span>
            </div>
            <div className="sns">
              <div className="snsLogo FB"></div>
              <span>Facebook</span>
            </div>
            <div className="sns">
              <div className="snsLogo google"></div>
              <span>Google</span>
            </div>
            <div className="sns">
              <div className="snsLogo apple"></div>
              <span>Apple</span>
            </div>
          </div>
          <span className="desc">
            걱정마세요! 여러분의 지원 활동은 SNS에 노출되지 않습니다.<br/>
            회원가입 시 <a href="#">개인정보 처리방침</a>과 <a href="#" className="terms">이용약관</a>
            을 확인하였으며, 동의합니다.
          </span>
        </div>

      </div>

    </LoginModalST>
  )
}

export default LoginModal;

const LoginModalST = styled.div`
  .modal_inner {
    display: block;
    position: relative;
    width: 400px;
    height: 81vh;
    background-color: white;
    border-radius: 5px;
    overflow: scroll;
    z-index: 2;    
  }

  .modal_inner .fa-times {
    position: absolute;
    top: 13px;
    right: 13px;
    font-size: 25px;
    color: #999;
  }


  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 54px;
    width: 100%;
    padding: 16px 20px;
  }

  .header img {
    width: 70px;
    height: 16px;
  }

  .contents {
    margin: 20px 0 0;
  }

  h1 {
    margin-bottom: 20px;
    font-size: 26px;
    font-weight: 600;
    line-height: 40.04px;
    text-align: center;
    cursor: pointer;
  }

  h3 {
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #666;
  }

  .email {
    display: flex;
    flex-direction: column;
    margin: 18px 0 0;
    padding: 0 20px;
  }

  .pw {
    margin: 10px 0 0;
  }

  label {
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 20px;
    color: #767676;
  }

  input {
    width: 100%;
    height: 50px;    
    padding: 1px 15px;
    border: 1px solid #e1e2e3;
    border-radius: 3px;
    outline: 1px solid #3366ff;
  }

  input::placeholder {
    font-size: 15px;
    color: #999;
  }

  .continue {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    padding: 0 20px;
  }

  .continue button {

    width: 100%;
    height: 54px;
    border: none;
    border-radius: 27px;
    background-color: #3366ff;
    font-size: 16px;
    font-weight: 600;
    line-height: 23px;
    color: white;
  }

  .continue button:hover {
    background-color: #002fdb;
  }

  .continue i {
    margin-right: 8px;
    font-size: 18px;
    color: white;  
  }

  .continue span {
    margin-top: 10px;
    font-size: 14px;
    line-height: 20px;
    color: #767676;
  }

  .snsBtn {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
  }

  .sns {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .snsLogo {
    width: 56px;
    height: 56px;  
    border-radius: 28px;
    cursor: poiner;
    /* background-color: black; */
  }

  .sns span {
    color: #555;
    text-align: center;
  }

  .kakao {
    background-image: url('https://repickus.com/images/btn_kakao.png');
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .FB {
    background-image: url('https://t1.daumcdn.net/cfile/tistory/994EAB4F5D2565432F');
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .google {
    border: 1px solid #ddd;
    background-image: url('https://littledeep.com/wp-content/uploads/2020/09/google-icon-styl.png');
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .apple {
    background-image: url('https://blog.kakaocdn.net/dn/tXsFS/btqzbkx3eCw/BKfLbP12HX5D24Db1a8dkk/img.png');
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .continue .desc {
    margin-bottom: 20px;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: #999;
  }

  .continue .desc a {
    color: #002fdb;
    text-decoration: underline;
  }

  .continue .desc a:hover,
  .continue .terms {
    color: #999;
  }
`

