import LinePlot from "@/components/dashboard/graphs/lineChart/lineChart";
import { PieChart } from "@/components/dashboard/graphs/piechart/piechart";
import React from "react";

const Graphs = () => {
  const data = [
    { name: "Mark", value: 90 },
    { name: "Robert", value: 12 },
    { name: "Emily", value: 34 },
    { name: "Marion", value: 53 },
    { name: "Nicolas", value: 98 },
  ];
  return (
    <section className="graphs-section">
      <div className="container">
        <LinePlot />
        <PieChart width={200} height={200} data={data} />
      </div>
    </section>
  );
};

export default Graphs;
