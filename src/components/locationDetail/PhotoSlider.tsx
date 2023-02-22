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
  // console.log("premsaini"); 
  // console.log(c_bannerButton);
  const photos = bannerImage?.map((element:any) => ( 
	<SplideSlide>
    <div className="banner">
<div className="banner_image_img">

<img height={height} width={width} src={element?.image?.url} />

</div>
     
     <div className="photo_slider_content">
      <h2>{c_bannerTagline}</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <a href={c_bannerButton?.link}>{c_bannerButton?.label}</a>  
     </div>
   
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

export default PhotoSlider;