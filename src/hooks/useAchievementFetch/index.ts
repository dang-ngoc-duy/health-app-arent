import { useCallback, useEffect, useState } from "react";
import { ItemRecord } from "src/components/common/ItemListBase";
import { LineChartData } from "src/components/common/LineChartBase";
import AchievementsServices from "src/services/achievements";
import { ActionItem, ExerciseItem, QueryParams } from "src/services/models";

export const useAchievementFetch = () => {
  const [itemList, setItemList] = useState<ItemRecord[]>([]);
  const [featureList, setFeatureList] = useState<ActionItem[]>([]);
  const [exerciseData, setExerciseData] = useState<ExerciseItem[]>([]);
  const [lineDataChart, setLineDataChart] = useState<LineChartData>();
  const [currentPagination, setCurrentPagination] = useState<QueryParams>({
    _limit: "8",
  });

  const fetchActionList = useCallback(() => {
    AchievementsServices.getActionList<ActionItem[]>().then((res) => {
      const data = res?.data;
      if (data) {
        setFeatureList(data);
      }
    });
  }, []);

  const fetchBodyRecordList = useCallback(() => {
    AchievementsServices.getBodyRecordData<LineChartData>().then((res) => {
      const data = res?.data;
      if (data) {
        setLineDataChart(data);
      }
    });
  }, []);

  const fetchExerciseList = useCallback(() => {
    AchievementsServices.getExerciseList<ExerciseItem[]>().then((res) => {
      const data = res?.data;
      if (data) {
        setExerciseData(data);
      }
    });
  }, []);

  const fetchDiaryList = useCallback(
    (queryParams: QueryParams) => {
      AchievementsServices.getDiaryList<ItemRecord[]>(queryParams).then(
        (res) => {
          const data = res?.data;
          if (data) {
            setItemList(data);
          }
        }
      );
    },
    [setItemList]
  );

  useEffect(() => {
    fetchActionList();
    fetchBodyRecordList();
    fetchExerciseList();
    fetchDiaryList(currentPagination);
  }, [
    fetchActionList,
    fetchBodyRecordList,
    fetchExerciseList,
    fetchDiaryList,
    currentPagination,
  ]);

  return {
    itemList,
    setItemList,
    featureList,
    setFeatureList,
    exerciseData,
    setExerciseData,
    lineDataChart,
    setLineDataChart,
    currentPagination,
    setCurrentPagination,
    fetchDiaryList,
  };
};
