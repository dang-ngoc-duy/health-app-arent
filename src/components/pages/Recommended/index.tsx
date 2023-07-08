import React, { useState } from "react";
import { StyledRecommended } from "./style";

const Recommended: React.FC = () => {
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
  const [recommendedList, setRecommendedList] = useState([
    { name: "Recommended 1", isActive: false },
    { name: "Recommended 2", isActive: false },
    { name: "Recommended 3", isActive: false },
    { name: "Recommended 4", isActive: false },
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
    <StyledRecommended>
      <div className="recommend-filters">
        {recommendedList.map((recommended, idx) => (
          <div
            key={idx}
            style={{
              width: "13.5rem",
              height: "9rem",
              background: "var(--primary-300-400)",
            }}
            className="filter"
          >
            {recommended.name}
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
    </StyledRecommended>
  );
};

export default Recommended;
