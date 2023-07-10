import React, { useEffect, useState } from "react";
import RecordBase from "src/components/common/RecordBase";
import ButtonBase from "src/components/common/ButtonBase";
import LineChartBase, {
  LineChartData,
  LineChartFilter,
} from "src/components/common/LineChartBase";
import ItemListBase, { ItemRecord } from "src/components/common/ItemListBase";

import { StyledAchievements } from "./style";
import AchievementsServices from "src/services/achievements";
import { ActionItem, ExerciseItem } from "src/services/models/achievements";
import EmptyData from "src/components/common/EmptyData";
import { QueryParams } from "src/services/models";

const Achievements: React.FC = () => {
  const [itemList, setItemList] = useState<ItemRecord[]>([]);
  const [featureList, setFeatureList] = useState<ActionItem[]>([]);
  const [exerciseData, setExerciseData] = useState<ExerciseItem[]>([]);
  const [lineDataChart, setLineDataChart] = useState<LineChartData>();
  const [chartFilters, setChartFilters] = useState<LineChartFilter[]>([
    { id: 1, name: "日", isActive: false },
    { id: 2, name: "週", isActive: false },
    { id: 3, name: "月", isActive: false },
    { id: 4, name: "年", isActive: true },
  ]);
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
    fetchDiaryList(newPagination);
    const listContainer = document.getElementById("diary-list");
    listContainer && (listContainer.scrollTop = listContainer.scrollHeight);
  };

  const handleGoToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
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

  useEffect(() => {
    fetchActionList();
    fetchBodyRecordList();
    fetchExerciseList();
    fetchDiaryList(currentPagination);
  }, []);

  // **** FETCH API AREA **** //
  const fetchActionList = () => {
    AchievementsServices.getActionList<ActionItem[]>().then((res) => {
      const data = res?.data;
      if (data) {
        setFeatureList(data);
      }
    });
  };
  const fetchBodyRecordList = () => {
    AchievementsServices.getBodyRecordData<LineChartData>().then((res) => {
      const data = res?.data;
      if (data) {
        setLineDataChart(data);
      }
    });
  };
  const fetchExerciseList = () => {
    AchievementsServices.getExerciseList<ExerciseItem[]>().then((res) => {
      const data = res?.data;
      if (data) {
        setExerciseData(data);
      }
    });
  };
  const fetchDiaryList = (queryParams: QueryParams) => {
    AchievementsServices.getDiaryList<ItemRecord[]>(queryParams).then((res) => {
      const data = res?.data;
      if (data) {
        setItemList(data);
      }
    });
  };

  return (
    <StyledAchievements>
      <div className="features">
        {featureList.length
          ? featureList?.map((feature, idx) => (
              <RecordBase
                id={feature.id}
                onClick={handleGoToSection}
                key={idx}
                imageLink={feature.imageLink}
                title={feature.title}
                describe={feature.describe}
              ></RecordBase>
            ))
          : null}
      </div>

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
      <div id="my-exercise" className="my-exercise">
        <div className="line-chart-header">
          <div>MY EXERCISE</div>
          <div>2021.05.21</div>
        </div>
        {exerciseData.length ? (
          <ul className="exercise-list">
            {exerciseData.map((item, idx) => (
              <li key={idx}>
                <div>
                  <span>{item.name}</span>
                  <span>{item.time}</span>
                </div>
                <span>{item.kcal}</span>
              </li>
            ))}
          </ul>
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
      <div id="my-diary" className="my-diary">
        <span>MY DIARY</span>
        <div id="diary-list" className="diary-list">
          {itemList.length ? (
            itemList.map((item, idx) => (
              <ItemListBase key={idx} type="record" data={item}></ItemListBase>
            ))
          ) : (
            <EmptyData></EmptyData>
          )}
        </div>
      </div>

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
