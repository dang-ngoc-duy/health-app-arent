import React, { useState } from "react";
import { StyledAchievements } from "./style";

const Achievements: React.FC = () => {
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
  const [featureList, setFeatureList] = useState([
    { name: "Feature 1", describe: "", isActive: false },
    { name: "Feature 2", describe: "", isActive: false },
    { name: "Feature 3", describe: "", isActive: false },
  ]);
  const addItemList = () => {
    const listContainer = document.getElementById("diary-list");

    setItemList((prev) => [
      ...prev,
      { date: "05.21", mealsOfTheDay: "Morning", imageLink: "" },
    ]);

    listContainer && (listContainer.scrollTop = listContainer.scrollHeight);
  };
  return (
    <StyledAchievements>
      <div className="features">
        {featureList.map((feature, idx) => (
          <div
            key={idx}
            style={{
              width: "18rem",
              height: "18rem",
              background: "var(--primary-300-400)",
            }}
            className="filter"
          >
            {feature.name}
          </div>
        ))}
      </div>
      <div className="body-record">Body Record Section</div>
      <div className="my-exercise">Exercise Section</div>
      <div className="my-diary">
        Diary Section
        <div id="diary-list" className="diary-list">
          {itemList.map((item, idx) => (
            <div key={idx} style={{ background: "#FFCC21" }}>
              {item.date}
            </div>
          ))}
        </div>
      </div>
      <div className="load-more">
        <button onClick={addItemList}>Load More</button>
      </div>
    </StyledAchievements>
  );
};

export default Achievements;
