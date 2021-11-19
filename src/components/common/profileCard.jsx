import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

const ProfileCard = () => {

  // 7번 api
  const [userData, setUserData] = useState(``)

  useEffect(()=>{
    const callApi = setTimeout(async() =>{

      try {
        const url = `https://jminie-stark.shop/app/users/my-wanted`
  
        const res = await axios.get(url, {
          headers: {
            "X-ACCESS-TOKEN": localStorage.getItem("JWT")
          }
        })
        setUserData(res.data.result.user);
        console.log(res.data.result);
      }
      catch (error) {
        console.log(error);
      }
    }, 0)

    return () => {
      clearTimeout(callApi)
    }

  }, [])

  return (
    <ProfileCardST>
      <div className="profileImg" >
        <i class="fas fa-user"></i>
        <label className="upload" for="inputImg">
        </label>
        <input type="file" id="inputImg"/>
        <div className="circle">
          <i class="fas fa-camera"></i>
        </div>
      </div>
        <div className="name">{userData.userName}</div>
        <div className="email">{userData.userEmail}</div>
        <div className="phone">{userData.userPhoneNumber}</div>
      <div className="interest">
        <span>관심사</span>
        <span className="what">취직/이직, 개발, 글로벌,</span>
        <i class="fas fa-chevron-right"></i>
      </div>
    </ProfileCardST>
  )
}

export default ProfileCard;

const ProfileCardST = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 248px;
height: 316px;
padding: 42px 20px 30px;
background-color: white;
border: 1px solid #ddd;
/* background-color: #999; */

/* 여기에 이미지가 입혀집니다. */
.profileImg {
  position: relative;
  width: 70px;
  height: 70px;
  background-color: #e1e2e3;
  border-radius: 50%;
  /* cursor: pointer; */
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
}

.fa-user {
  position: absolute;
  top: 20px;
  left: 22px;
  font-size: 30px;
  color: white;
}

.upload {
  display: block;
  width: 70px;
  height: 70px;
  cursor: pointer;
  /* background-color: red; */
}

input {
  visibility: hidden;
}

.circle {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 38px;
  right: -5px;
  width: 32px;
  height: 32px;
  padding: 8px;
  box-shadow: rgba(0, 0, 0, .1) 0px 2px 2px 0px;
  background-color: white;
  border-radius: 50%;
}

i {
  font-size: 14px;
  color: #aaa;
}

.name {
  margin-top: 25px;
  font-size: 18px;
  font-weight: 700;
}

.email, .phone {
  margin-top: 20px;
  font-size: 14px;
  color: #888888;
  letter-spacing: -.2px;
}

.phone {
  margin-top: 10px;
}

.interest {
  display: flex;
  align-items: center;
  width: 208px;
  height: 38px;
  margin-top: 25px;
  padding: 0 16px;
  background-color: #f3f4f7;
  border-radius: 20px;
  cursor: pointer;
}

.interest:hover {
  background-color: #eceef1; 
}

.interest span {
  margin-right: 10px;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
}

.interest .what {
  margin-right: 5px;
  font-weight: 500;
  margin-right: 5px;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.fa-chevron-right {
  font-size: 12px;
}
`