import * as React from "react";
import PhotoSlider from "../locationDetail/PhotoSlider";
import Footer from "./footer";
import Header from "./header";
import Nav from "./Nav";

type Props = {
  title?: string;
  _site?: any;
  global: any;
  bannercta: any;
  c_bannerButton: any;
  c_bannerTagline: any;
  children?: React.ReactNode;
};

const PageLayout = ({
  title,
  _site,
  global,
  c_bannerButton,
  c_bannerTagline,
  bannercta, 
  children,
}: Props) => {


  // console.log('global', c_bannerButton);
  return (
    <>
      <Header headerLogo={global?.c_logo} label={_site?.c_cricket} url={""} images={""} />
      {children}
      <Footer
          imagelogo={global?.c_footerLogo}
        //  image={c_footerLogo}
        cricket={global?.c_cricket}
        bCCI={global?.c_bCCI} />
    </>
  );
};

export default PageLayout;
