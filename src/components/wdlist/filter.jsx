import styled from "styled-components";

const Filter = () => {
  return (
    <FilterST>
      <div className="inner">
        <button className="tag">
          <div className="title">태그</div>
          <div className="desc">딱 맞는 기업 찾기</div>
          <i class="fas fa-sort-down"></i>
        </button>
      </div>



    </FilterST>
  )
}

export default Filter;

const FilterST = styled.div`

.inner {
  width: 1060px;
  margin: 0 auto;
}

button {
  display: flex;
  position: relative;
  align-items: center;
  height: 40px;
  /* width: 152px; */
  padding: 0 39px 0 15px;
  border: 1px solid #ececec;
  background-color: white;
  border-radius: 5px;
}

button:hover {
  background-color: #f9f6f6;
}

.title {
  font-size: 14px;
  margin-right: 8px;
}

.desc {
  font-size: 14px;
  color: #999;
}

i {
  position: absolute;
  top: 11px;
  right: 15px;
}
`