import React from "react";

const SimpleTable = () => {
  return (
    <table id="table" className="min-w-full">
      <thead>
        <tr className="hover:bg-dark">
          <th className="py-2 px-4">ID</th>
          <th className="py-2 px-2 text-start">Name</th>
          <th className="py-2 px-2 text-start">JackPot</th>
          <th className="py-2 px-2 text-start">Date & Time</th>
          <th className="py-2 px-2 text-start">Members</th>
          <th className="py-2 px-2 text-start">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-dark">
          <td className="py-2 px-4 w-0.5/6">1</td>
          <td className="py-2 px-2 w-1/4">Kill the Boss / Qualify</td>
          <td className="py-2 px-2 w-0.5/4">$30,000</td>
          <td className="py-2 px-2 w-1.5/6">2:00 pm</td>
          <td className="py-2 px-2 w-1/6">130</td>
          <td className="py-2 px-2 w-1/6">Closed</td>
        </tr>
        <tr className="hover:bg-dark">
          <td className="py-2 px-4 w-0.5/6">2</td>
          <td className="py-2 px-2 w-1/4">Leader Cup #3</td>
          <td className="py-2 px-2 w-0.5/4">$1,450</td>
          <td className="py-2 px-2 w-1.5/6">Feb 14, 2024, 11:AM</td>
          <td className="py-2 px-2 w-1/6">59</td>
          <td className="py-2 px-2 w-1/6">Open</td>
        </tr>
        <tr className="hover:bg-dark">
          <td className="py-2 px-4 w-0.5/6">3</td>
          <td className="py-2 px-2 w-1/4">Mentor's Cup</td>
          <td className="py-2 px-2 w-0.5/4">23,000</td>
          <td className="py-2 px-2 w-1.5/6">April 20, 2024, 9:AM</td>
          <td className="py-2 px-2 w-1/6">97</td>
          <td className="py-2 px-2 w-1/6">Coming Soon</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SimpleTable;
