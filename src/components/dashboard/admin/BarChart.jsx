import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const chartData = [
  {
    label: "Januari",
    value: "290",
    color: "#EB8C35",
  },
  {
    label: "Februari",
    value: "260",
    color: "#EB8C35",
  },
  {
    label: "Maret",
    value: "180",
    color: "#EB8C35",
  },
  {
    label: "April",
    value: "140",
    color: "#EB8C35",
  },
  {
    label: "Mei",
    value: "115",
    color: "#EB8C35",
  },
  {
    label: "Juni",
    value: "100",
    color: "#EB8C35",
  },
  {
    label: "Juli",
    value: "30",

    color: "#EB8C35",
  },
  {
    label: "Agustus",
    value: "38",

    color: "#EB8C35",
  },
  {
    label: "September",
    value: "50",

    color: "#EB8C35",
  },
  {
    label: "Oktober",
    value: "20",

    color: "#EB8C35",
  },
  {
    label: "November",
    value: "32",

    color: "#EB8C35",
  },
  {
    label: "Desember",
    value: "10",

    color: "#EB8C35",
  },
];

const chartConfigs = {
  type: "column2d",
  width: "100%",
  height: "70%",
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "Grafik Bank Sampah",
      xAxisName: "Bulan",
      yAxisName: "Jumlah",
      theme: "fusion",
    },
    data: chartData,
  },
};

const BarChart = () => {
  return (
    <div>
      <ReactFC {...chartConfigs} />
    </div>
  );
};

export default BarChart;
