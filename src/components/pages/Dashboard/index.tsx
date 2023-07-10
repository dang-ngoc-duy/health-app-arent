import React, { useEffect, useState } from "react";
import iconCup from "src/assets/icons/icon_cup.svg";
import iconKnife from "src/assets/icons/icon_knife.svg";
import ButtonBase from "src/components/common/ButtonBase";
import ItemListBase, { ItemPhoto } from "src/components/common/ItemListBase";
import LineChartBase, {
  LineChartData,
} from "src/components/common/LineChartBase";
import DashboardServices from "src/services/dashboard";

import { StyledDashboard } from "./style";
import EmptyData from "src/components/common/EmptyData";
import { QueryParams } from "src/services/models";

const Dashboard: React.FC = () => {
  const [itemList, setItemList] = useState<ItemPhoto[]>([]);
  const [showList, setShowList] = useState<ItemPhoto[]>(itemList);
  const [filterList, setFilterList] = useState([
    { id: "M", title: "Morning", icon: iconKnife },
    { id: "L", title: "Lunch", icon: iconKnife },
    { id: "D", title: "Dinner", icon: iconKnife },
    { id: "S", title: "Snack", icon: iconCup },
  ]);
  const dataChart: LineChartData = {
    labels: [
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
    ],
    datasets: [
      {
        label: "Dataset 1",
        data: [85, 83, 65, 73, 68, 58, 68, 55, 50, 49, 45, 49],
        borderColor: "rgb(255, 204, 33)",
        backgroundColor: "rgb(255, 204, 33)",
      },
      {
        label: "Dataset 2",
        data: [85, 80, 70, 68, 54, 53, 44, 43, 40, 30, 26, 22],
        borderColor: "rgb(143, 233, 208)",
        backgroundColor: "rgb(143, 233, 208)",
      },
    ],
  };
  const [currentPagination, setCurrentPagination] = useState<QueryParams>({
    _page: "1",
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
    fetchMealList(currentPagination);
  }, []);

  useEffect(() => {
    setShowList(itemList);
  }, [itemList]);

  // **** FETCH API AREA **** //
  const fetchMealList = (queryParams: QueryParams) => {
    DashboardServices.getMeals<ItemPhoto[]>(queryParams).then((res) => {
      const data = res.data;
      if (data) {
        setItemList(data);
      }
    });
  };

  return (
    <StyledDashboard>
      <div className="pie-chart">Pie Chart</div>
      <LineChartBase
        data={dataChart}
        textColor="white"
        gridLineColor="white"
        style={{
          background: "var(--dark-600)",
          paddingInline: "8%",
          paddingBlock: "2%",
        }}
      ></LineChartBase>
      <div className="container">
        <div className="filters">
          {filterList.map((filter, idx) => (
            <ButtonBase
              onClick={handleFilterClick}
              key={idx}
              type="hexagon"
              iconLink={filter.icon}
              title={filter.title || "--"}
              id={filter.id}
            ></ButtonBase>
          ))}
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
