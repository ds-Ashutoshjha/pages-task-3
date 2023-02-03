import * as React from "react";

type props ={
  label: any;
  url : string;
  images: string;
}

const Header = ( props : props) => {
  const {label,url,images}= props
  // console.log('label', images)
  
  // let NewVAr : any = props.label;
  // console.log(props.label,"Props");
  const linkDoms = props?._site?.c_bCCI?.map((link:any) => (
    <a className="navbar-item" href={link.link} >
        <span>{link.label}</span>
      </a>
  ));

// console.log(props._bannerbjhjk.c_banner1);

  const BannerImg = props?._banner?.c_banner1?.map((link:any) => (
     <img src={link.url}/>
     
    
  ));




  return (
    <>
     
             <div style={{backgroundColor:"skyblue",height:"50px", padding:"5px",textAlign:"center",}}>
            <div style={{marginLeft:"300px",fontSize:"Oswald"}} className="flex gap-x-10 text-lg font-semibold">
              {linkDoms}</div>
              {BannerImg}
            </div>
          {/* </nav>
        </div>
      </div> */}
    </>
  );
};

export default Header;
