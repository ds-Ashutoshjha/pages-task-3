import * as React from "react";
// import gallerybg from "../../images/bg-service.jpg";

const PhotoGallery = (props: any) => {
  // console.log('propssasds', props.photu)

const photo=props.photu.map((item:any)=>{
  console.log('first', item)
  return(<>
<img src={item.image.url}/>
  </>)
})
  // const photos = props.photu.image.map((element: any) => {
  //   const { height, url, width } = element;
    
  //   return (
  //     <div className="image-frame">
  //       <img
  //         height={height}
  //         src={url} // use normal <img> attributes as props
  //         width={width}
  //         className="image  "
  //         alt="photogallery"
  //       ></img>
  //     </div>
  //   );
  // });

  return (
    <>
      <div className="space-y-5 container mx-auto">
        <div className="text-xl font-semibold text-center">
          <h1 className="text-red-eb pt-8"> Photos</h1>
        </div>
        <div className="photos-row">{photo}</div>
      </div>
    </>
  );
}; 

export default PhotoGallery;
