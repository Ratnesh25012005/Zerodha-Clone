import React from "react";

const Hero = () => {
  return (
    <div style={{ backgroundColor: "rgba(247, 248, 249, 2)" }}>
      <div className="container py-5">
        <div className="row align-items-center mb-4">
          <div className="col">
            <h3 className="fw-semibold">Support Portal</h3>
          </div>

          <div className="col text-end">
            <button className="btn btn-primary px-4">My Ticket</button>
          </div>
        </div>
        <div className="search-box">
          <i className="fa fa-search search-icon"></i>

          <input
            type="text"
            className="search-input mt-1 fs-5"
            placeholder="Eg: How do I open my account, How do I activate F&O..."
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
