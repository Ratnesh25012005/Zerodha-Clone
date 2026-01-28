import React from "react";


const Universe = () => {
  return (
    <div className="container mt-5">
      <div className="row text-center text-muted">
        <h1 className="fs-3 mb-3 mt-5">The Zerodha Universe</h1>
        <p className="fs-5 mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5 ">
          <img src="media/Images/zerodhaFundhouse.png" className="img-fluid w-50"/>
          <p className="mt-3 text-small text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5 ">
          <img src="media/Images/sensibullLogo.svg" className="img-fluid w-50"  />
          <p className="mt-3 text-small text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/Images/tijori.svg" className="img-fluid w-50" />
          <p className="mt-3 text-small text-muted">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/Images/streakLogo.png" className="img-fluid w-50"/>
          <p className="mt-3 text-small text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/Images/smallcaseLogo.png" className="img-fluid w-50" />
          <p className="mt-3 text-small text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
          
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/Images/dittoLogo.png" className="img-fluid w-50" />
          <p className="mt-3 text-small text-muted">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <button className='p-3 mb-5 btn btn-primary fs-5' style={{width:"20%" , margin:"0 auto"}}>Sign up Now</button>
      </div>
    </div>
  );
};

export default Universe;
Universe;
