import React, { useEffect, useState } from "react";
import m01 from "src/assets/images/m01.jpg";
import m02 from "src/assets/images/m02.jpg";
import m03 from "src/assets/images/m03.jpg";
import l01 from "src/assets/images/l01.jpg";
import l02 from "src/assets/images/l02.jpg";
import l03 from "src/assets/images/l03.jpg";
import d01 from "src/assets/images/d01.jpg";
import d02 from "src/assets/images/d02.jpg";
import s01 from "src/assets/images/s01.jpg";

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
    { id: "M", date: "05.21", mealsOfTheDay: "Morning", imageLink: m01 },
    { id: "M", date: "05.21", mealsOfTheDay: "Morning", imageLink: m02 },
    { id: "M", date: "05.21", mealsOfTheDay: "Morning", imageLink: m03 },
    { id: "L", date: "05.21", mealsOfTheDay: "Lunch", imageLink: l01 },
    { id: "L", date: "05.21", mealsOfTheDay: "Lunch", imageLink: l02 },
    { id: "L", date: "05.21", mealsOfTheDay: "Lunch", imageLink: l03 },
    { id: "D", date: "05.21", mealsOfTheDay: "Dinner", imageLink: d01 },
    { id: "D", date: "05.21", mealsOfTheDay: "Dinner", imageLink: d02 },
    { id: "S", date: "05.21", mealsOfTheDay: "Snack", imageLink: s01 },
  ]);

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

  const addItemList = () => {
    const listContainer = document.getElementById("item-list");

    setItemList((prev) => [
      ...prev,
      { id: "S", date: "05.21", mealsOfTheDay: "Snack", imageLink: s01 },
    ]);

    listContainer && (listContainer.scrollTop = listContainer.scrollHeight);
  };

  const handleFilterClick = (id: string | undefined) => {
    const newList = itemList.filter((item) => item.id === id);
    setShowList(newList);
  };

  useEffect(() => {
    setShowList(itemList);
  }, [itemList]);

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
          {showList.map((item, idx) => (
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
