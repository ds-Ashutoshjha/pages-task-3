import { Link } from "@yext/pages/components";
import * as React from "react";
import abbanner from "../../images/ab-banner.jpg"
import dt12 from "../../images/dtl2.jpg"
import PhotoSlider from "./PhotoSlider"
import RtfConverter from "@yext/rtf-converter";

export default function About(props: any) {
  function convertToRtf(rtf:any) {
    rtf = rtf.replace(/\\par[d]?/g, "");
    rtf = rtf.replace(/\{\*?\\[^{}]+}|[{}]|\\\n?[A-Za-z]+\n?(?:-?\d+)?[ ]?/g, "")
    rtf=rtf.replace('/','');
    rtf=rtf.replace(';','');
    rtf=rtf.replace('-','');
    return rtf.replace(/\\'[0-9a-zA-Z]{2}/g, "").trim();
}

  return (
    <>
      <div className="about-sec ">
      <div className="container-custom">
        <div className="about-inner-sec">
        <h2 className="for-mob">{props.name}</h2>

          <div className="w-full lg:w-2/5 xl:w-[47%] relative  left-0">
              <div className="lg:h-full">
              {props.c_photo ?
                    props.c_photo.map((element:any) => (   
                        <img height={518} width={658} src={element.url} alt="photo" />
                      ))
                    : ''}
              </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )


}