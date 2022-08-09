import React from "react";
import { useEffect } from "react";
import { fetchQuotes } from "../../redux/quotesActions";
import { connect } from "react-redux";
import socket from "../../socket";
import "./FinanceDashboard.scss";
import DataRow from "../DataRow/DataRow";

const FinanceDashboard = ({ quotesData, error, fetchQuotes }) => {
  useEffect(() => {
    socket.emit("start");
    const setQuotes = (quotes) => {
      fetchQuotes([...quotes]);
    };
    socket.on("ticker", setQuotes);
    return () => {
      socket.off("ticker", setQuotes);
    };
  }, [fetchQuotes]);
  const isDataExists = quotesData !== undefined && quotesData !== null && quotesData.length >= 0;
  const thNames = [
    "No#",
    "Ticker",
    "Price",
    "Change",
    "Change percent",
    "Dividend",
  ];
  return error ? (
    <div className="error">
      <h2>{`Something went wrong: ${error}`}</h2>
    </div>
  ) : (
    <div className="dashboard">
      <table className="dashboard__finance-table">
        <thead>
          <tr>
            {thNames.map((th, index) => (
              <th key={index}>{th}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isDataExists &&
            quotesData.map((obj, index) => {
              return (
                <DataRow
                  key={index}
                  thNames={thNames}
                  {...obj}
                  tickerIndex={index}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    quotesData: state.quotes,
    error: state.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuotes: (quotes) => dispatch(fetchQuotes(quotes)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FinanceDashboard);
