// import * as React from "react";
// import OpenClose from "../commons/openClose";
// import Defaultimage from "../../images/luxurystore.jpg"

// export type Address = {
//   line1: any;
//   city: any;
//   region: any;
//   postalCode: any;
//   countryCode: any;
// };

// type Banner = {
//   name?: any;
//   address?: any;
//   BannerImage?:any;
// };

// const Banner = (props: Banner) => {
//   const { name, address,BannerImage } = props;
//   console.log(BannerImage);

//   return (
//     <>
//       <div
//         className={`relative z-10 w-full bg-cover bg-center h-96 bg-[url(/src/assets/images/tacos-1.avif)] `}
//       >
//         <img src={BannerImage.url}/>
//         <div className="absolute left-0 right-0 flex flex-col items-center ">
//           <div className="w-96 my-8 rounded-xl bg-amber-500 border-8 shadow-xl border-amber-600 px-4 py-2 text-center">
//             <div>
//               <h1 className="text-white text-3xl font-semibold">{name}</h1>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Banner;

import * as React from "react";
import OpenClose from "../commons/openClose";
import Defaultimage from "../../images/faq-bg-.jpg"

export type Address = {
  line1: string;
  city: string;
  region: string;
  postalCode: string;
  countryCode: string;
};

type Banner = {
  name?: string;
  address?: Address;
  hours?: any;
  timezone: any;
  clickcollect?: object;
  c_bannerImage?: string;
  c_locatorBannerAdditionalText?:string;
  children?: React.ReactNode;
};

const renderPrettyAddress = (address?: Address) => {
  return (
    <>
      {address && (
        <span>
          {address.line1} in {address.city}, {address.region}
        </span>
      )}
    </>
  );
};

const Banner = (props: Banner) => {
  const { name, address, clickcollect, c_bannerImage,c_locatorBannerAdditionalText, children } = props;
  

  return (
    <>
      <div className="hero-section">
        <img className="hero-image"
          src={c_bannerImage?c_bannerImage:Defaultimage} alt="banner" width="1" height="1" />
        <div className="hero-content">
          <div className="container">
            <div className={`banner-text  ${props.hours && props.timezone ? 'banner-dark-bg': ''}`}>
              <h1>{name}</h1>
              {c_locatorBannerAdditionalText?
              <p>{c_locatorBannerAdditionalText}</p>
              :''}
              {props.hours && props.timezone ?
                <div className="openClosestatus">
                  <OpenClose timezone={props.timezone} hours={props.hours} deliveryHours={props.hours}></OpenClose>
                </div> : ''}
            </div>
          </div>
        </div>
        </div>
      </>
      );
};

      export default Banner;