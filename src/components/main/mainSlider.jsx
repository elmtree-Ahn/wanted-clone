import styled from "styled-components";
import Slider from "react-slick";
import MainSliderCard from "./mainSliderCard";

const MainSlider = ({banner}) => {
  
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return (
    <MainSliderST>
      <Slider {...settings}>
        {
          banner && banner.map(banner => {
            return <MainSliderCard url={banner.imageUrl} title={banner.title} subTitle={banner.subTitle} linkUrl={banner.linkUrl}/>
          })
        }
      </Slider>
    </MainSliderST>
  )
}

export default MainSlider;

const MainSliderST = styled.div`
  /* position: relative; */
width: 100%;
height: 300px;

.slick-slider {
  position: relative;
  /* width: 1060px; */
  height: 300px;
}

/* .slick-prev {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: hsla(0,0%,100%,.7);
  position: absolute;
  bottom: 25px;
  z-index: 10;
}

.slick-next {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: hsla(0,0%,100%,.7);
  position: absolute;
  bottom: 25px;
  z-index: 10;
} */
`

