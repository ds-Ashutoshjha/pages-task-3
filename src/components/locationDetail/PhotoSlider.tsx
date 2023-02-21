import * as React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const PhotoSlider = (props: any) => {
  const { bannerImage, height, width,c_bannerTagline,c_bannerButton } = props;  
  const options = {
    type         : 'loop',
    autoplay     : true,
    pauseOnHover : false,
    resetProgress: false,
  };
  const photos = bannerImage?.map((element:any) => ( 


	<SplideSlide>
    <div className="banner">
    <h2>{c_bannerTagline}</h2>
    {/* <a href={c_bannerButton.link}>{c_bannerButton.label}</a> */}
    <img height={height} width={width} src={element?.image?.url} />
   
    </div>
	</SplideSlide>    
  ));
  return (

    <>
	  <Splide aria-label="Photo Slider" options={options}>
      </Splide>
    </>
  );
};

export default PhotoSlider;