import styled from "styled-components";

const Footer = () => {
  return (
    <FooterST>
      <div className="inner">
        <div className="introduce">
          <div className="pages">
            <img src="https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/images/logo_wanted_black.png" alt="" className="logo" />
            <span>기업소개</span>
            <span>이용약관</span>
            <span>개인정보 처리방침</span>
            <span>고객센터</span>
          </div>
          <div className="snss">
            <img src="https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/images/social_instagram.png" alt="" className="sns" />
            <img src="https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/images/social_youtube.png" alt="" className="sns" />
            <img src="https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/images/social_facebook.png" alt="" className="sns" />
            <img src="https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/images/social_blog.png" alt="" className="sns" />
            <img src="https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/images/social_kakao.png" alt="" className="sns" />
            <img src="https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/images/social_post.png" alt="" className="sns" />
            <img src="https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/images/social_apple.png" alt="" className="sns" />
            <img src="https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/images/social_google.png" alt="" className="sns" />
          </div>
        </div>
        <div className="line"></div>
        <div className="under">
          <div className="desc">
            (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300 롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147<br/>
            유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 | (국외) 서울동부-유-2020-2 | 사업자등록번호 : 299-86-00021 | 02-539-7118<br/>
            © Wantedlab, Inc.
          </div>
          <div className="inputBox">
            <img src="https://s3.ap-northeast-2.amazonaws.com/wanted-public/ico_KR.svg" alt="" />
            <select>
              <option value="KR">한국 (한국어)</option>
              <option value="JP">日本 (日本語)</option>
              <option value="TW">臺灣 (中文)</option>
              <option value="WW">Worldwide (English)</option>
              <option value="SG">Singapore (English)</option>
            </select>
            <i class="fas fa-sort-down"></i>
          </div>
        </div>
      </div>
    </FooterST>
  )
}

export default Footer;

const FooterST = styled.div`
  width: 100%;
  height: 245px;
  padding: 18px 0 65px;

  .inner {
    width: 1060px;
    margin: 0 auto;
  }

  .introduce {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .pages {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 110px;
    height: auto;
    margin-right: 45px;
  }

  .pages span {
    margin-right: 45px;
    font-size: 15px;
    font-weight: 500;
    color: #3a3a3a;
    line-height: 39px;
  }

  .sns {
    width: auto;
    height: 20px;
    margin-left: 14px;
  }

  .line {
    height: 1px;
    width: 100%;
    margin: 23px 0;
    background-color: #e1e1e1;
  }

  .under {
    display: flex;
    justify-content: space-between;
  }

  .desc {
    margin-right: 40px;
    font-size: 12px;
    line-height: 20px;
    color: #767676;
  }

  .inputBox {
    position: relative;
  }

  .inputBox img {
    position: absolute;
    top: 13px;
    left: 15px;
    width: 24px;
  }

  .inputBox i {
    position: absolute;
    top: 9px;
    right: 15px;
  }

  select {
    width: 250px;
    height: 40px;
    padding: 0 45px;
    background-color: #f2f4f7;
    border: none;
    outline: none;
    border-radius: 5px;
    color: #717171;
    appearance:none;
  }


`