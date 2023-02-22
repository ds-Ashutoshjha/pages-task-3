import * as React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const PhotoSlider1 = (props: any) => {
  const { c_bannerdata1, } = props;  
  const options = {
    type         : 'loop',
    autoplay     : true,
    pauseOnHover : false,
    resetProgress: false,
  };
 
  const photos = c_bannerdata1?.images?.map((element:any) => ( 
	<SplideSlide>
    <div className="banner">
    {/* <h2>{c_bannerTagline}</h2>
      <a href={c_bannerButton?.link}>{c_bannerButton?.label}</a>   */}
    <img src={element?.url} />
   
    </div>
	</SplideSlide>    
  ));
  return (

    <>
	      <Splide aria-label="Photo Slider" options={options}>
           {photos}
      </Splide>
    </>
  );
};

export default PhotoSlider1;