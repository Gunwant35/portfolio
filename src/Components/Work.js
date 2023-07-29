import React from "react";

function Work({ SchoolName, Year, Percentage }) {
  return (
    <div className="my-4">
      <h2 className="text-lg font-bold">{SchoolName}</h2>
      <p className="text-sm">Year: {Year}</p>
      <p className="text-sm">Percentage: {Percentage}</p>
    </div>
  );
}

export default Work;
