import React from "react";

const DataRow = ({
  tickerIndex,
  thNames,
  ticker,
  price,
  change,
  change_percent,
  dividend,
}) => {
  const dataName = (th, tickerIndex) => {
    switch (th) {
      case "Ticker":
        return ticker;
      case "Price":
        return `${price}$`;
      case "Change":
        return `${change}$`;
      case "Dividend":
        return `${dividend}%`;
      case "Change percent":
        return `${change_percent}%`;
      default:
        return tickerIndex + 1;
    }
  };
  const isthNames = thNames !== undefined && thNames !== null && thNames.length >= 0;
  return (
    <>
      <tr>
        {isthNames &&
          thNames.map((th, index) => (
            <td key={index} data-label={th}>
              {dataName(th, tickerIndex)}
            </td>
          ))}
      </tr>
    </>
  );
};

export default DataRow;
