import Card from "@/components/dashboard/card/card";
import React from "react";
import "@/components/dashboard/dashboard.css";
import Transactions from "@/components/dashboard/transactions/transactions";
import Chart from "@/components/dashboard/chart/chart";
import Rightbar from "@/components/dashboard/rightbar/rightbar";

const Dashboard = () => {
  return (
    <div className="wrapper">
      <div className="main">
        <div className="cards">
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="side">
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
