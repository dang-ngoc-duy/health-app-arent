import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  PointElement,
  CoreChartOptions,
  DatasetChartOptions,
  ElementChartOptions,
  PluginChartOptions,
  ScaleChartOptions,
  LineControllerChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { _DeepPartialObject } from "chart.js/dist/types/utils";

interface CoreOptions extends _DeepPartialObject<CoreChartOptions<"line">> {}
interface ElementOptions
  extends _DeepPartialObject<ElementChartOptions<"line">> {}
interface PluginOptions
  extends _DeepPartialObject<PluginChartOptions<"line">> {}
interface DatasetOptions
  extends _DeepPartialObject<DatasetChartOptions<"line">> {}
interface ScaleOptions extends _DeepPartialObject<ScaleChartOptions<"line">> {}
interface LineControllerOptions
  extends _DeepPartialObject<LineControllerChartOptions> {}

interface LineChartBaseOptions
  extends CoreOptions,
    ElementOptions,
    PluginOptions,
    DatasetOptions,
    ScaleOptions,
    LineControllerOptions {}

const LineChartDarkMode = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  // Set up colors for dark mode
  const darkModeColors = {
    background: "rgba(65, 65, 65)",
    border: "rgb(255, 255, 255)",
    dataset1: "rgb(255, 204, 33)",
    dataset2: "rgb(143, 233, 208)",
  };

  const labels = [
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56], // replace with your data points
        borderColor: darkModeColors.dataset1,
        backgroundColor: darkModeColors.dataset1,
      },
      {
        label: "Dataset 2",
        data: [28, 48, 40, 19, 86, 27, 90, 28, 48, 40, 19, 86], // replace with your data points
        borderColor: darkModeColors.dataset2,
        backgroundColor: darkModeColors.dataset2,
      },
    ],
  };

  const options: LineChartBaseOptions = {
    responsive: true,
    maintainAspectRatio: false,
    hover: {
      mode: "point", // mode for activating items during hover ('point', 'nearest', 'index', 'dataset', 'x', 'y')
      intersect: false, // if true, only trigger hover when mouse is over an item
    },
    plugins: {
      legend: {
        display: false, // This will remove the legend
        labels: {
          color: darkModeColors.border, // Text color in dark mode
        },
      },
      title: {
        display: true,
        text: "BODY RECORD",
        color: darkModeColors.border, // Text color in dark mode
      },
    },
    scales: {
      x: {
        ticks: {
          color: darkModeColors.border, // Text color in dark mode
        },
        grid: {
          color: darkModeColors.border, // Grid line color in dark mode
        },
      },
      y: {
        display: false, // This hides the y-axis
      },
    },
  };

  const chartStyle = {
    background: darkModeColors.background, // Chart background color in dark mode
    color: darkModeColors.border, // Text color in dark mode
  };

  return <Line options={options} data={data} style={chartStyle} />;
};

export default LineChartDarkMode;
