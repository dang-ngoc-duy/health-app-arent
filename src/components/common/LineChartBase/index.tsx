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
  ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { _DeepPartialObject } from "chart.js/dist/types/utils";
import { StyledLineChartBase } from "./style";

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

export interface LineChartOptions
  extends CoreOptions,
    ElementOptions,
    PluginOptions,
    DatasetOptions,
    ScaleOptions,
    LineControllerOptions {}

export interface LineChartData extends ChartData<"line", number[], string> {}

interface LineChartBaseProps {
  data: LineChartData;
  textColor?: string;
  gridLineColor?: string;
  options?: LineChartOptions;
  style?: React.CSSProperties;
}

const LineChartBase: React.FC<LineChartBaseProps> = (props) => {
  const { data, textColor, gridLineColor, options, style } = props;

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

  const optionsChart: LineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,

    hover: {
      mode: "point",
      intersect: false,
    },
    plugins: {
      legend: {
        display: false,
        labels: {
          color: textColor ?? "black",
        },
      },
      title: {
        display: false,
        text: "",
        color: textColor ?? "black",
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColor ?? "black",
        },
        grid: {
          color: gridLineColor ?? "black",
        },
      },
      y: {
        display: false,
      },
    },
  };

  const chartStyle = {
    background: "transparent",
    color: textColor ?? "black",
    ...style,
  };

  return (
    <StyledLineChartBase>
      <Line options={options ?? optionsChart} data={data} style={chartStyle} />
    </StyledLineChartBase>
  );
};

export default LineChartBase;
