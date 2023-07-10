import React, { useState } from "react";
import ButtonBase from "src/components/common/ButtonBase";
import { LineChartFilter } from "src/components/common/LineChartBase";
import { useAchievementFetch } from "src/hooks/useAchievementFetch";
import { QueryParams } from "src/services/models";

import BodyRecords from "./BodyRecords";
import Features from "./Features";
import MyDiary from "./MyDiary";
import MyExercise from "./MyExercise";
import { StyledAchievements } from "./style";

const Achievements: React.FC = () => {
  const {
    itemList,
    featureList,
    exerciseData,
    lineDataChart,
    currentPagination,
    setCurrentPagination,
    fetchDiaryList,
  } = useAchievementFetch();

  const [chartFilters, setChartFilters] = useState<LineChartFilter[]>([
    { id: 1, name: "日", isActive: false },
    { id: 2, name: "週", isActive: false },
    { id: 3, name: "月", isActive: false },
    { id: 4, name: "年", isActive: true },
  ]);

  const addItemList = () => {
    const newPaginationLimit = parseInt(currentPagination._limit as string) * 2;
    const newPagination: QueryParams = {
      ...currentPagination,
      _limit: newPaginationLimit.toString(),
    };
    setCurrentPagination(newPagination);
    fetchDiaryList(newPagination);
    const listContainer = document.getElementById("diary-list");
    listContainer && (listContainer.scrollTop = listContainer.scrollHeight);
  };
  const handleFilterChartClick = (item: LineChartFilter) => {
    const newFilterList = chartFilters.map((i) => {
      if (i === item) {
        i.isActive = true;
      } else {
        i.isActive = false;
      }
      return i;
    });
    setChartFilters(newFilterList);
  };
  const handleGoToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <StyledAchievements>
      <Features
        featureList={featureList}
        handleGoToSection={handleGoToSection}
      ></Features>
      <BodyRecords
        lineDataChart={lineDataChart}
        chartFilters={chartFilters}
        handleFilterChartClick={handleFilterChartClick}
      ></BodyRecords>
      <MyExercise exerciseData={exerciseData}></MyExercise>
      <MyDiary itemList={itemList}></MyDiary>
      <div className="load-more">
        <ButtonBase
          onClick={addItemList}
          title="記録をもっと見る"
          type="normal"
        ></ButtonBase>
      </div>
    </StyledAchievements>
  );
};

export default Achievements;
