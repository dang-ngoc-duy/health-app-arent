import React, { useEffect, useState } from "react";
import ButtonBase from "src/components/common/ButtonBase";
import EmptyData from "src/components/common/EmptyData";
import ItemListBase, { ItemPhoto } from "src/components/common/ItemListBase";
import LineChartBase, {
  LineChartData,
} from "src/components/common/LineChartBase";
import DashboardServices from "src/services/dashboard";
import { DashboardFilterData, QueryParams } from "src/services/models";

import { StyledDashboard } from "./style";

const Dashboard: React.FC = () => {
  const [itemList, setItemList] = useState<ItemPhoto[]>([]);
  const [showList, setShowList] = useState<ItemPhoto[]>(itemList);
  const [filterList, setFilterList] = useState<DashboardFilterData[]>([]);
  const [lineDataChart, setLineDataChart] = useState<LineChartData>();
  const [currentPagination, setCurrentPagination] = useState<QueryParams>({
    _limit: "8",
  });

  const addItemList = () => {
    const newPaginationLimit = parseInt(currentPagination._limit as string) * 2;
    const newPagination: QueryParams = {
      ...currentPagination,
      _limit: newPaginationLimit.toString(),
    };
    setCurrentPagination(newPagination);
    fetchMealList(newPagination);
    const listContainer = document.getElementById("item-list");
    listContainer && (listContainer.scrollTop = listContainer.scrollHeight);
  };

  const handleFilterClick = (id: string | undefined) => {
    const newList = itemList.filter((item) => item.id === id);
    setShowList(newList);
  };

  useEffect(() => {
    fetchLineDataChart();
    fetchFilterList();
    fetchMealList(currentPagination);
  }, []);

  useEffect(() => {
    setShowList(itemList);
  }, [itemList]);

  // **** FETCH API AREA **** //
  const fetchLineDataChart = () => {
    DashboardServices.getLineChartData<LineChartData>().then((res) => {
      const data = res?.data;

      if (data) {
        setLineDataChart(data);
      }
    });
  };
  const fetchFilterList = () => {
    DashboardServices.getFilterList<DashboardFilterData[]>().then((res) => {
      const data = res?.data;
      if (data) {
        setFilterList(data);
      }
    });
  };
  const fetchMealList = (queryParams: QueryParams) => {
    DashboardServices.getMealList<ItemPhoto[]>(queryParams).then((res) => {
      const data = res?.data;
      if (data) {
        setItemList(data);
      }
    });
  };

  return (
    <StyledDashboard>
      <div className="progress-circle"></div>
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
      <div className="container">
        <div className="filters">
          {filterList.length
            ? filterList.map((filter, idx) => (
                <ButtonBase
                  onClick={handleFilterClick}
                  key={idx}
                  type="hexagon"
                  iconLink={filter.icon}
                  title={filter.title || "--"}
                  id={filter.id}
                ></ButtonBase>
              ))
            : null}
        </div>
        <div id="item-list" className="item-list">
          {showList.length ? (
            showList.map((item, idx) => (
              <ItemListBase key={idx} type="photo" data={item}></ItemListBase>
            ))
          ) : (
            <EmptyData></EmptyData>
          )}
        </div>
        <div className="load-more">
          <ButtonBase
            onClick={addItemList}
            title="記録をもっと見る"
            type="normal"
          ></ButtonBase>
        </div>
      </div>
    </StyledDashboard>
  );
};

export default Dashboard;
