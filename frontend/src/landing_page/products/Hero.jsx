import React from "react";

const Hero = () => {
  return (
    <div className="container ">
      <div className="row mt-5 p-5 text-center ">
        <h1 className="fs-2 mt-2">Zerodha Products</h1>
        <h3 className="fs-4 mt-2 text-muted">Sleek, modern, and intuitive trading platforms</h3>
        <p className="mt-2">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
