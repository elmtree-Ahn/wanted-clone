import styled from "styled-components";

const PassWordModal = ({modalClose}) => {
  return (
    <PassWordModalST>
      <div className="modalWrap" onClick={()=>{modalClose()}}></div>
      <div className="modal_inner" >
        <i class="fas fa-times" onClick={()=>{modalClose()}}></i>
        <div className="header">
          비밀번호 입력
        </div>
        <form className="inputform">
          <div className="inputBox name">
            <label htmlFor="name">비밀번호</label>
            <input type="text" id="name" placeholder="비밀번호" autoFocus/>
          </div>
          <div className="btnBox">
            <button>로그인</button>
            <button className="changePW">비밀번호 초기화/변경</button>
          </div>
          

        </form>

      </div>      
    </PassWordModalST>
  )
}

export default PassWordModal;

const PassWordModalST = styled.div`
  .modal_inner {
    display: block;
    position: relative;
    width: 400px;
    height: 325px;
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
    font-size: 16px;
    font-weight: 600;
  }

  .inputBox {
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 30px 0 0;
    padding: 0 20px;
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
    /* outline: 1px solid #3366ff; */
  }

  input:focus, .national select:focus{
    outline: 1px solid #3366ff;
  }

  input::placeholder {
    font-size: 15px;
    color: #999;
  }

  .btnBox {
    margin-top: 25px;
    margin-bottom: 15px;
    padding: 10px 20px;
    border-radius: 5px;
  }

  .btnBox button {
    width: 100%;
    height: 50px;
    font-size: 16px;
    color: white;
    background-color: #3366ff;
    border: none;
    border-radius: 25px;
  }

  .btnBox .changePW {
    margin-top: 5px;
    background-color: white;
    font-size: 14px;
    color: #3366ff;
    
  }
`
