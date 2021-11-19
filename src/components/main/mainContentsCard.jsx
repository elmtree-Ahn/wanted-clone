import styled from "styled-components";

const MainContentsCard = (props) => {
  return (
    <MainContentsCardST>
      <div className="header">
        <div className="img" style={{backgroundImage: `url(${props.img})`}}></div>
      </div>
      <div className="body">
        <div className="company">{props.name}</div>
        <div className="title">{props.title}</div>
        <div className="location">{props.location}</div>

      </div>
    </MainContentsCardST>
  )
}

export default MainContentsCard;


export const MainContentsCardST = styled.div`
width: 250px;
margin-bottom: 20px;

.header {
  position: relative;
  width: 250px;
  height: 187.5px;
  border-radius: 3px;
  overflow: hidden;
}

.img {
  width: 250px;
  height: 187.5px;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
}

.loveit {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 60px;
  height: 30px;
  border-radius: 3px;
  background-color: #0000008f;
  font-size: 12px;
  color: white;
  cursor: pointer;
}

.fa-heart {
  margin-right: 4px;
  color: #999;
}

.loveit span {
  color: white;
}

.body {
  padding: 14px 10px;
  cursor: pointer;
}

.title {
  width: 230px;
  max-height: 43.2px;
  font-size: 18px;
  font-weight: 600;
  line-height: 21.6px;
  overflow:hidden; 
  text-overflow:ellipsis;
  
}

.company {
  width: 230px;
  height: 22px;
  margin-top: 4px;
  overflow:hidden; 
  text-overflow:ellipsis;
  font-size: 14px;
  font-weight: 600;
  line-height: 22.4px;
}

.answer {
  height: 19px;
  margin-top: 4px;
  padding-bottom: 18px;
  background-color: white;
  border: 1px solid #00aead;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 600;
  color: #00aead;
}

.location {
  width: 230px;
  height: 20px;
  margin-top: 6px;
  font-size: 14px;
  line-height: 22.4px;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

}

.bonus {
  font-size: 13px;
  line-height: 18px;
  color: #666;
  margin-top: 6px;
}

`