import React, { useState } from "react";
import { StyledDashboard } from "./style";

const Dashboard: React.FC = () => {
  const [itemList, setItemList] = useState([
    { date: "05.21", mealsOfTheDay: "Morning", imageLink: "" },
    { date: "05.21", mealsOfTheDay: "Morning", imageLink: "" },
    { date: "05.21", mealsOfTheDay: "Morning", imageLink: "" },
    { date: "05.21", mealsOfTheDay: "Morning", imageLink: "" },
    { date: "05.21", mealsOfTheDay: "Morning", imageLink: "" },
    { date: "05.21", mealsOfTheDay: "Morning", imageLink: "" },
    { date: "05.21", mealsOfTheDay: "Morning", imageLink: "" },
    { date: "05.21", mealsOfTheDay: "Morning", imageLink: "" },
    { date: "05.21", mealsOfTheDay: "Morning", imageLink: "" },
    { date: "05.21", mealsOfTheDay: "Morning", imageLink: "" },
    { date: "05.21", mealsOfTheDay: "Morning", imageLink: "" },
    { date: "05.21", mealsOfTheDay: "Morning", imageLink: "" },
    { date: "05.21", mealsOfTheDay: "Morning", imageLink: "" },
  ]);

  const [filterList, setFilterList] = useState([
    { name: "Filter 1", isActive: false },
    { name: "Filter 2", isActive: false },
    { name: "Filter 3", isActive: false },
    { name: "Filter 4", isActive: false },
  ]);

  const addItemList = () => {
    const listContainer = document.getElementById("item-list");

    setItemList((prev) => [
      ...prev,
      { date: "05.21", mealsOfTheDay: "Morning", imageLink: "" },
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
            <div
              key={idx}
              style={{
                width: "8.5rem",
                height: "8.5rem",
                background: "var(--primary-300-400)",
              }}
              className="filter"
            >
              {filter.name}
            </div>
          ))}
        </div>
        <div id="item-list" className="item-list">
          {itemList.map((item, idx) => (
            <div key={idx} style={{ background: "#FFCC21" }}>
              {item.date}
            </div>
          ))}
        </div>
        <div className="load-more">
          <button onClick={addItemList}>Load More</button>
        </div>
      </div>
    </StyledDashboard>
  );
};

export default Dashboard;
