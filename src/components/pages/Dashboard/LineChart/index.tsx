import React from "react";
import EmptyData from "src/components/common/EmptyData";
import LineChartBase, {
  LineChartData,
} from "src/components/common/LineChartBase";

interface LineChartProps {
  lineDataChart?: LineChartData;
}

const LineChart: React.FC<LineChartProps> = (props) => {
  const { lineDataChart } = props;
  return (
    <>
      {lineDataChart ? (
        <LineChartBase
          data={lineDataChart}
          textColor="white"
          gridLineColor="white"
          style={{
            background: "var(--dark-600)",
            paddingInline: "8%",
            paddingBlock: "2%",
          }}
        ></LineChartBase>
      ) : (
        <EmptyData
          style={{
            height: "100%",
            width: "100%",
            background: "var(--dark-600)",
            color: "#fff",
          }}
        ></EmptyData>
      )}
    </>
  );
};

export default LineChart;
