import React, { useState } from "react";
import "./MedalTally.css";

const MedalTally = ({ data }) => {
  const [visibleEntries, setVisibleEntries] = useState(4);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleView = () => {
    setIsExpanded(!isExpanded);
    setVisibleEntries(isExpanded ? 4 : data.length); // Show 4 or all entries
  };

  return (
    <div className="medal-tally">
      <h2>Medal Tally</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Country</th>
            <th>Gold</th>
            <th>Silver</th>
            <th>Bronze</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, visibleEntries).map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                {item.region}
                {/* <img
                  src={item.flag}
                  alt={`${item.region} flag`}
                  className="flag"
                /> */}
              </td>
              <td>{item.Gold}</td>
              <td>{item.Silver}</td>
              <td>{item.Bronze}</td>
              <td>{item.Total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {data.length > 4 && (
        <button className="toggle-button" onClick={toggleView}>
          {isExpanded ? "View Less" : "View More"}
        </button>
      )}
    </div>
  );
};

export default MedalTally;
