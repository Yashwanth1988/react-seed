import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Sortable from 'sortablejs';
import { Treemap } from "recharts";
import Chart from "react-google-charts";

const options = {
  minColor: "#00C6DF",
  midColor: "#0F7489",
  maxColor: "#164B5E",
  minColorValue: "#00C6DF",
  midColorValue: "#0F7489",
  maxColorValue: "#164B5E",
  headerHeight: 15,
  showScale: false,
  generateTooltip: showStaticTooltip,
  highlightOnMouseOver: true,
  textStyle: {
    bold: true
  }
};

function showStaticTooltip(row, size, value) {
  return `Hello value:${value} ${row} ${size}`;
}

const data = [
  [
    "Location",
    "Parent",
    "Market trade volume (size)",
    "Market increase/decrease (color)"
  ],
  ["Global", null, 2515, 0],
  ["TRUST FINANCIAL CORPORATION", "Global", 890, 4],
  ["BANK OF NEW YORK MELLON CORP.", "Global", 500, 5],
  ["WELLS FARGO & CO.", "Global", 725, 4],
  ["DEUTCHE BANK SECURITIES INC.", "Global", 801, 5],
  ["EDWARD JONES & CO.", "Global", 600, 5],
  ["U.S BANKCORP", "Global", 800, 4],
  ["JP MORGAN CHASE", "Global", 410, 6],
  ["CITIGROUP", "Global", 300, 6],
  ["MORGAN STANLEY DEAN WITTER", "Global", 910, 6],
  ["PNC FINANCIAL", "Global", 910, 6],
  ["TD BANK", "Global", 810, 6],
]
 


function App() {

  useEffect(() => {

}, []);

  return (
    <div className="App">
      React APP
      <Chart
          chartType="TreeMap"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
    </div>
  );
