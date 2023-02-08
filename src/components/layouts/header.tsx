import * as React from "react";

type props = {
  headerLogo: any;
  label: any;
  url: string;
  images: string;
};

const Header = (props: props) => {
  const { headerLogo, label, url, images } = props;
  // console.log('label', images)

  // let NewVAr : any = props.label;label,
  // console.log(props.label,"Props");
  const linkDoms = props?._site?.c_bCCI?.map((link: any) => (
    <a
      style={{
        background: "#850039",
        color: "#fff",
        padding: "8px 8px",
        borderRadius: "6px",
        border: "2px solid black",
        margin:"0px 5px",
      }}
      className="navbar-item"
      href={link.link}
    >
      <span>{link.label}</span>
    </a>
  ));

  // console.log(props._bannerbjhjk.c_banner1);

  // const BannerImg = props?._banner?.c_banner1?.map((link:any) => (
  //    <img src={link.url}/>

  // ));

  return (
    <>
      
          
        
      <div className="w-full flex mb-2 justify-center mt-4 gap-4">
                {headerLogo?.url ? 
                              <div style={{margin:"0px"}}>
                                 <img src={headerLogo?.url} className="w-10"style={{height:"100px",width:"100px"}} />
                               </div>
                    : ''}
     
        <span></span>
      
        <p>{linkDoms}</p>
      </div>

      {/* <div className="w-full"> */}
      {/* <div
          style={{ marginLeft: "300px", fontSize: "Oswald" }}
          className="flex gap-x-10 text-lg font-semibold"
        >
          {linkDoms}
        </div> */}
      {/* {BannerImg} */}
      {/* </div> */}
      {/* </nav>
        </div>
      </div> */}
    </>
  );
};

export default Header;
