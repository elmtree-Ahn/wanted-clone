import Slider from "react-slick";
import styled from "styled-components";

const ImgSlider = () => {

  const settings = {
    dots: false,
    
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <ImgSliderST>
      <div>
        <Slider {...settings} className="imgSlider">
          <div>
            <div className="img" style={{backgroundImage: 'url(https://static.wanted.co.kr/images/company/1028/3238_2_1.__1080_790.jpg)'}}></div>
          </div>

        </Slider>
      </div>
    </ImgSliderST>
  )
}


export default ImgSlider;

const ImgSliderST = styled.div`

.imgSlider .slick-slider,
.imgSlider .slick-list {
  position: relative;
  width: 698px;
  height: 489px
}

.imgSlider .slick-slide {
  width: 698px;
  height: 489px;
  /* background-color: royalblue; */
}

.imgSlider .slick-arrow {
  /* background-color: red; */
  width: 20px;
  height: 20px;
  z-index: 5;
}

.imgSlider .slick-prev,
.imgSlider .slick-next {
  position: absolute;
  top: 55%;
}

.imgSlider .slick-prev {
  left: 25px;
}

.imgSlider .slick-next {
  right: 25px;
}

.imgSlider .img {
  width: 698px;
  height: 489px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
`