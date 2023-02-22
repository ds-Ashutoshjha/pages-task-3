import * as React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const PhotoSlider1 = (props: any) => {
  const { bannerImage, height, width,bannerCTA,sliderHeading} = props;  
  const options = {
    type         : 'loop',
    autoplay     : true,
    pauseOnHover : false,
    resetProgress: false,
  };


  console.log("premsaini"); 
  console.log(bannerCTA);
  console.log(sliderHeading);

  const photos = bannerImage?.map((element:any) => ( 
	<SplideSlide>
    <div className="banner">
<div className="banner_image_img">

<img height={height} width={width} src={element?.image?.url} />

</div>
     
     <div className="photo_slider_content photo_slider_c">
     { sliderHeading ? 
            <h2>{sliderHeading}</h2>
        
        :""}
      {/* <h3>{c_bannerButton}</h3> */}
      {bannerCTA ? 
       <a href={bannerCTA?.link}>{bannerCTA?.label}</a>  
      :""}

       

       
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

export default PhotoSlider1;