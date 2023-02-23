import * as React from "react";

type data = {
  headerLogo: any;
  label: any;
};

const Header = (props: data) => {
  const { headerLogo, label } = props;
  console.log("headerLogo", label);

  return (
    <>
    <div className=" bg-white">
      <div className="container-lg header_sec">
      <div className="logo_area"><img
        src={headerLogo?.url}
        style={{
          width: "100px",
          height: "80px",
          borderRadius: "10px",
          marginLeft: "10px",
            }}
      />
</div>
            <div className="flex gap-x-4 items-center menus_custom">
        {label?.map((links: any) => {
          return (
            <div
              className="flex gap-3 text-sm font-semibold text-body "
              style={{ color: "black", fontSize: "20px",textTransform:"uppercase"}}
            >
              <a href="#"> {links.label}</a>
            </div>
          );
        })}
      </div>
      </div>
      </div>
    </>
  );
};

export default Header;
