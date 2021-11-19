import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import MywantedBody from "./mywantedBody";
import MywantedAside from "./myWnatedAside";

const Mywanted = () => {

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
        setUserData(state => res.data.result);
        // console.log(res.data.result.user);
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
    <MywantedST>
      <div className="inner">
        <h2 className="mywanted">MY 원티드</h2>
        <section>
          <MywantedAside userData={userData}/>
          <MywantedBody userData={userData}/>
        </section>
      </div>
    </MywantedST>
  )
}

export default Mywanted;


const MywantedST = styled.div`
width: 100%;
margin-top: 50px;
padding-bottom: 100px;
background-color: #f7f7f7;

.inner {
  width: 1060px;
  margin: 0 auto;
}

.mywanted {
  padding: 50px 0 20px;
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
}

section {
  width: 1060px;
  display: flex;
  justify-content: space-between;
}
`
