import * as React from "react";

type props ={
  label: any;
  url : string;
  images: string;
}

const Locatorheader = ( props : props) => {
  const {label,url,images}= props
  // console.log('label', images)
  
  // let NewVAr : any = props.label;
  // console.log(props.label,"Props");
  const linkDoms = props?._site?.c_bCCI?.map((link:any) => (
    <a className="navbar-item" href={link.link} >
        <span>{link.label}</span>
      </a>
  ));



  // const BannerImg = props?._banner?.c_banner1?.map((link:any) => (
     


     
    
  // ));

  const LocatorBannerImg = props?._site.c_locatorHeaderBanner?.map((link:any) => (
    <img src={link.url}/>
    
    
   
 ));
 console.log("Ashutosh jha");
//  console.log(props._site);



  return (
    
<>
             <div style={{backgroundColor:"skyblue",height:"50px", padding:"5px",textAlign:"center",}}>
            <div style={{marginLeft:"300px",fontSize:"Oswald"}} className="flex gap-x-10 text-lg font-semibold">
                {/* {LocatorBannerImg} */}
                
              {linkDoms}</div>
              {/* {BannerImg} */}
            </div>
            <img style= {{width:"100%",height:"250px"}} src="https://cdn.pixabay.com/photo/2011/12/14/12/23/solar-system-11111_960_720.jpg"/>
        
          {/* </nav>
        </div>
      </div> */}
    </>
  );
};

export default Locatorheader;
