import React from "react";
import EmptyData from "src/components/common/EmptyData";
import LineChartBase, {
  LineChartData,
  LineChartFilter,
} from "src/components/common/LineChartBase";

interface BodyRecordsProps {
  lineDataChart?: LineChartData;
  chartFilters: LineChartFilter[];
  handleFilterChartClick(item: LineChartFilter): void;
}

const BodyRecords: React.FC<BodyRecordsProps> = (props) => {
  const { lineDataChart, chartFilters, handleFilterChartClick } = props;
  return (
    <div id="body-record" className="body-record">
      {lineDataChart ? (
        <LineChartBase
          data={lineDataChart}
          textColor="white"
          gridLineColor="white"
          style={{
            background: "var(--dark-600)",
            paddingInline: "46px",
            paddingBlock: "56px",
            paddingTop: "20px",
          }}
          header={{ title: "BODY RECORD", dateTime: "2021.05.21" }}
          filters={chartFilters}
          onFiltersClick={handleFilterChartClick}
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
    </div>
  );
};

export default BodyRecords;
