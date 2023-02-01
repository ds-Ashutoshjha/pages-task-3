const Header = ( props : data) => {
  const {label,url,images}=props
  
  let NewVAr : any = props.label;
  // console.log(props.label,"Props");
  const linkDoms = props?._site?.c_bCCI?.map((link:any) => (
    <a className="navbar-item" href={link.link} >
        <span>{link.label}</span>
      </a>
  ));

  return (
    <>
      {/* <div id="header" className="header-nav">
        <div className="container header-content">
           <div className="header-content-left">
            <a className="button" href="#">
              <span className="is-hidden-touch">Way To Hotel</span></a>
            <a className="button" href="#" title="Book now">Book now</a>
          </div> 
          <div className="header-content-middle">
          <h1 style={{fontWeight:"bold",fontSize:"25px"}}> BCCI OFFICIAL</h1>
            <a className="logo" href="/">
               <img className="" src={images?.url} alt="Tour"/> 
            </a>
          </div>
          <div className="header-content-right lg:hidden">
            <span className="navbar-burger burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </span> 
          </div>
        </div>
        <div className="container">
          <nav className="navbar"> */}
             {/* {linkDoms} */}
             <div style={{backgroundColor:"skyblue",height:"50px", padding:"5px",textAlign:"center",}}>
            <div style={{marginLeft:"300px",fontSize:"Oswald"}} className="flex gap-x-10 text-lg font-semibold">
              {linkDoms}</div>
              
              
            </div>
          {/* </nav>
        </div>
      </div> */}
    </>
  );
};

export default Header;
