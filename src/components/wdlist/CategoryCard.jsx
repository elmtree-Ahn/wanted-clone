import styled from "styled-components";

const CategoryCard = (props) => {
  return (
    <CategoryCardST img={props.img}>

      <span>{props.name}</span>
    </CategoryCardST>
  )
}

export default CategoryCard;

const CategoryCardST = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 60px;
  cursor: pointer;
  border-radius: 3px;
  background-color: rosybrown;
  background-image: url(${props => props.img});
  background-position: 50%;
  background-size: cover;
  

  span {
    font-size: 14px;
    color: white;
  }
`