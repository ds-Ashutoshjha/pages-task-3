import * as React from "react";

type props = {
  services: any;
  image:any;
};

const Services = (props: any) => {
  const { services } = props;
  console.log("dsdsdsd=>", services);

  return (
    <>
      {services?.map((data: any) => {
        return (
          <>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 5a2 2 0 0 1 2 2c0 .24-.04.47-.12.69C17.95 8.5 21 11.91 21 16H3c0-4.09 3.05-7.5 7.12-8.31c-.08-.22-.12-.45-.12-.69a2 2 0 0 1 2-2m10 14H2v-2h20v2Z"
                />
              </svg>

             <div > <h1>{data?.name}</h1></div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Services;
