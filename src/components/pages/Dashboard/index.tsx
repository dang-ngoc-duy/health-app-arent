import React, { useState } from "react";
import m01 from "src/assets/images/m01.jpg";
import iconCup from "src/assets/icons/icon_cup.svg";
import iconKnife from "src/assets/icons/icon_knife.svg";
import ButtonBase from "src/components/common/ButtonBase";
import LineChartBase, {
  LineChartData,
} from "src/components/common/LineChartBase";
import ItemListBase, { ItemPhoto } from "src/components/common/ItemListBase";

import { StyledDashboard } from "./style";

const Dashboard: React.FC = () => {
  const [itemList, setItemList] = useState<ItemPhoto[]>([
    { date: "05.21", mealsOfTheDay: "Morning", imageLink: m01 },
    { date: "05.21", mealsOfTheDay: "Lunch", imageLink: m01 },
    { date: "05.21", mealsOfTheDay: "Dinner", imageLink: m01 },
    { date: "05.21", mealsOfTheDay: "Lunch", imageLink: m01 },
    { date: "05.21", mealsOfTheDay: "Morning", imageLink: m01 },
    { date: "05.21", mealsOfTheDay: "Snack", imageLink: m01 },
  ]);

  const [filterList, setFilterList] = useState([
    { title: "Morning", icon: iconKnife },
    { title: "Lunch", icon: iconKnife },
    { title: "Dinner", icon: iconKnife },
    { title: "Snack", icon: iconCup },
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

  const addItemList = () => {
    const listContainer = document.getElementById("item-list");

    setItemList((prev) => [
      ...prev,
      { date: "05.21", mealsOfTheDay: "Snack", imageLink: m01 },
    ]);

    listContainer && (listContainer.scrollTop = listContainer.scrollHeight);
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
              key={idx}
              type="hexagon"
              iconLink={filter.icon}
              title={filter.title || "--"}
            ></ButtonBase>
          ))}
        </div>
        <div id="item-list" className="item-list">
          {itemList.map((item, idx) => (
            <ItemListBase key={idx} type="photo" data={item}></ItemListBase>
          ))}
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
