import * as React from "react";
import Banner from "../locationDetail/banner";
import PhotoSlider from "../locationDetail/PhotoSlider";
import Footer from "./footer";
import Header from "./header";

type Props = {
  title?: string;
  _site?: any;
  global: any;
  children?: React.ReactNode;
};

const PageLayout = ({
  _site,
  global,
  children,
}: Props) => {


  // console.log('global', c_bannerButton);
  return (
    <>
      <Header headerLogo={global?.c_logo} label={global.c_cricket}  />
      <Banner c_bannerTagline={global.c_locatorSliderHeading} bannerImage={global.c_bannerimages} c_bannerButton={global.c_locatorSliderButton}/>
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
