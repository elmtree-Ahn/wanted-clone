import styled from "styled-components";
import AdoptionListCard from "./adoptionListCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const AdoptionList = () => {

  const [serverDB, setServerDB] = useState([])

  useEffect(async ()=>{
    try {
      const url = `https://jminie-stark.shop/app/employments?tag=&location=&year=`;
    
      const res = await axios({
        method : 'get',
        url : url
      });
      setServerDB(res.data.result);
      // console.log(res.data.result)
    }
    catch(error) {
      console.log(error);
    }
  }, [])




  return (
    <AdoptionListST>
      {
        serverDB && serverDB.map((a)=>{
          return (

              <AdoptionListCard key={a.employmentId} img={a.companyImg} title={a.empTitle} name={a.companyName} location={a.companyLocation} like={a.empLicked}/>

          )
        })
      }

    </AdoptionListST>
  )
}

export default AdoptionList;

const AdoptionListST = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
margin-top: 35px;
`
