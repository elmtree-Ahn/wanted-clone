import styled from "styled-components"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryCard from "./categoryCard";
import categoryDB from "../../db/categoryDB.json"
import { useState } from "react";



const Category = () => {
  
  let [db, setDb] = useState(categoryDB);

  const settings = {
    arrows: true,
    infinite: false,
    speed: 800,
    slidesToShow: 8.2,
    slidesToScroll: 4,
    initialSlide: 0,
    // breakpoint: 1024,

  };

  return (
    <CategoryST>
      <div className="inner">
        <ul>
          <li>
            전체
            {/* <i class="fas fa-chevron-right"></i> */}
          </li>
          {/* <li>
            개발
            <i class="fas fa-chevron-right"></i>
          </li>
          <li>
            웹 개발자
          </li> */}
        </ul>
        <Slider {...settings} className="category">
          {
          db && db.data.map((a)=>{
            return (
              <div>
              <CategoryCard img={a.img} name={a.name} key={a.id}/>
            </div>
            )
          })
          }

        </Slider>
      </div>
      
    </CategoryST>
  )
}

export default Category;

const CategoryST = styled.div`
  margin-top: 50px;

  .inner {
    width: 1060px;
    margin: 0px auto;
    padding: 20px 0 0;
    overflow: hidden;
  }

  ul {
    display: flex;
    margin-bottom: 15px;
  }

  li {
    display: flex;
    align-items: center;
    font-size: 18px;
  }
  
  li i {
    margin: 0 7px;
    font-size: 12px;
  }

  .slick-list {
    width: 1060px;
    height: 60px;
    margin: 0 auto;
  }

  .slick-slide div {
    /* cursor: pointer; */
  }

  .slick-dots {
    bottom: -50px;
    margin-top: 200px;
  }

  .slick-track {
    overflow-x: hidden;
  }
`
// const StyledSlider = styled(Slider)`

// `;


