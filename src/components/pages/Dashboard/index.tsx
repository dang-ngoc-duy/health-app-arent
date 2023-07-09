import React, { useState } from "react";
import ButtonBase from "src/components/common/ButtonBase";
import iconKnife from "src/assets/icons/icon_knife.svg";
import iconCup from "src/assets/icons/icon_cup.svg";
import m01 from "src/assets/images/m01.jpg";
import { StyledDashboard } from "./style";
import ItemListBase, { ItemPhoto } from "src/components/common/ItemListBase";

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
      <div className="line-chart">Line Chart</div>
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
