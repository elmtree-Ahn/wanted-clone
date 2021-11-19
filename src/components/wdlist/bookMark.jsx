import styled from "styled-components"

const BookMark = () => {
  return (
    <BookMarkST>
      <button>
        <i class="fas fa-bookmark"></i>
        <span>북마크 모아보기</span>
        <i class="fas fa-chevron-right"></i>
      </button>
    </BookMarkST>
  )
}

export default BookMark;

const BookMarkST = styled.div`
margin-top: 20px;

button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  color: #3366ff;
  border: none;
  background-color: white;
}


.fa-bookmark {
  margin-right: 6px;
  font-size: 15px;
  color: #3366ff;
}

span {
  margin-right: 4px;
  font-size: 14px;
  font-weight: 600;
  color: #3366ff;
}

.fa-chevron-right {
  font-size: 10px;
  line-height: 5px;
  color: #3366ff;
}



`