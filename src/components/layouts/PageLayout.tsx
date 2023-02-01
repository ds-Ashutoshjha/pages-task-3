import * as React from "react";
import Footer from "./footer";
import Header from "./header";
import Nav from "./Nav";

type Props = {
  title?: string;
  _site?: any;
  global: any;
  children?: React.ReactNode;
};

const PageLayout = ({
  title,
  _site,
  global,
  children,
}: Props) => {
  console.log('global', global)
  return (
    <>
      <Header label={_site?.c_cricket} url={""} />
      {children}
      <Footer
        image={global?.c_footerLogo}
        cricket={global?.c_cricket}
        bCCI={global?.c_bCCI}


      />
    </>
  );
};

export default PageLayout;
