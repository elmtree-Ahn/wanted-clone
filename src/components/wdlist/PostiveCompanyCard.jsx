import styled from "styled-components";

const PostiveCompanyCard = ({img, logo, title, sub}) => {
  return (
    <PostiveCompanyCardST>
      <div className="header">
        <div className="img" style={{backgroundImage: `url(${img}`}}></div>
      </div>
      <div className="body">
        <div className="title">{title}</div>
        <div className="desc">{sub}개 포지션</div>
      </div>
      <div className="icon" style={{backgroundImage: `url(${logo}`}}></div>
    </PostiveCompanyCardST>
  )
}

export default PostiveCompanyCard;

const PostiveCompanyCardST = styled.li`
position: relative;
list-style: none;

.header {
  width: 196px;
  height: 148px;
  overflow: hidden;
  border-radius: 3px 3px 0 0;
}

.header .img {
  width: 196px;
  height: 148px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  transition: all .3s;
}

.header .img:hover {
  transform: scale(1.025);
}

.body {
  width: 196px;
  height: 124px;
  padding: 34px 16px 0;
  border: 1px solid #e1e2e3;
  border-top: none;
  border-radius: 0 0 3px 3px;
  cursor: pointer;
}

.title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
}

.title:hover {
  color: #258bf7;
}

.desc {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -.2px;
  color: #999;
}

.icon {
  position: absolute;
  top: 120px;
  left: 15px;
  width: 50px;
  height: 50px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  box-shadow: rgba(0, 0, 0, .1) 0px 0px 0px 1px;
}
`