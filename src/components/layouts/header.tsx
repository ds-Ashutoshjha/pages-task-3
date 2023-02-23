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
    <div className=" bg-black">
      <div><img
        src={headerLogo?.url}
        style={{
          width: "100px",
          height: "80px",
          borderRadius: "10px",
          marginLeft: "10px",
            }}
      />
</div>
            <div style={{ marginLeft: "60%" }} className="flex gap-x-4 items-center">
        {label?.map((links: any) => {
          return (
            <div
              className="flex gap-3 text-sm font-semibold text-body"
              style={{ color: "white", fontSize: "15px", marginBottom:"40px"}}
            >
              <a href="#"> {links.label}</a>
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Header;
