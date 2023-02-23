
import * as React from "react";

type Link = {
  label: string;
  imagelogo: any;
  cricket: any;
  bCCI: any;
};

const Footer = (props: Link) => {
  const { label, bCCI, cricket, imagelogo } = props;

  return (
    <>
      <footer className="inline-block w-full footer-1 text-white py-8 sm:py-12" style={{backgroundColor: "black"}}> 
        <div className="container mx-auto px-4">
          <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0 font-semibold mr-6 ">
              <img
                src={imagelogo?.url}
                style={{ height: "200px", width: "auto" }}
              />
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 font-semibold">
              <ul className="list-none footer-links">
                <li className="mb-2">
                  {bCCI?.map((item: any) => {
                    return (
                      <>
                        <p>
                          <a href="#">{item.label}</a>
                        </p>
                      </>
                    );
                  })}
                </li>
              </ul>
            </div>

            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0 font-semibold">
              <ul className="list-none footer-links">
                {cricket?.map((item: any) => {
                  return (
                    <>
                      <p>
                        <a href="#">{item.label}</a>
                      </p>
                    </>
                  );
                })}
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0 font-semibold">
              <ul className="list-none footer-links">
                {cricket?.map((item: any) => {
                  return (
                    <>
                      <p>
                        <a href="#">{item.label}</a>
                      </p>
                    </>
                  );
                })}
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 font-semibold">
              <ul className="list-none footer-links">
                <li className="mb-2">
                  {bCCI?.map((item: any) => {
                    return (
                      <>
                        <p>
                          <a href="#">{item.label}</a>
                        </p>
                      </>
                    );
                  })}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
