import React from "react";
import "./DashboardCard.css";

const DashboardCard = () => {
  return (
    <div className="dashboard-card" data-aos="fade-left" data-aos-delay="1000">
      <h4>What I Do</h4>
      <h2><span>Currently Prepare For Job</span></h2>

      <h4>LATEST TECH</h4>
      <p>React</p>

      <h4>LAST PROJECT</h4>
      <p>Portfolio Website</p>

      <h4>PROGRESS</h4>
      <div className="progress-bar">
        <div className="filled" style={{ width: "70%" }}></div>
      </div>
      <p className="percent">70%</p>
    </div>
  );
};

export default DashboardCard;
