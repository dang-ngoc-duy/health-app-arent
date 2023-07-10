import { useCallback, useEffect, useState } from "react";
import { ItemPhoto } from "src/components/common/ItemListBase";
import { LineChartData } from "src/components/common/LineChartBase";
import DashboardServices from "src/services/dashboard";
import { DashboardFilterData, QueryParams } from "src/services/models";

export const useDashboardFetch = () => {
  const [itemList, setItemList] = useState<ItemPhoto[]>([]);
  const [showList, setShowList] = useState<ItemPhoto[]>(itemList);
  const [filterList, setFilterList] = useState<DashboardFilterData[]>([]);
  const [lineDataChart, setLineDataChart] = useState<LineChartData>();
  const [currentPagination, setCurrentPagination] = useState<QueryParams>({
    _limit: "8",
  });

  const fetchLineDataChart = useCallback(() => {
    DashboardServices.getLineChartData<LineChartData>().then((res) => {
      const data = res?.data;

      if (data) {
        setLineDataChart(data);
      }
    });
  }, []);

  const fetchFilterList = useCallback(() => {
    DashboardServices.getFilterList<DashboardFilterData[]>().then((res) => {
      const data = res?.data;
      if (data) {
        setFilterList(data);
      }
    });
  }, []);

  const fetchMealList = useCallback(
    (queryParams: QueryParams) => {
      DashboardServices.getMealList<ItemPhoto[]>(queryParams).then((res) => {
        const data = res?.data;
        if (data) {
          setItemList(data);
        }
      });
    },
    [setItemList]
  );

  useEffect(() => {
    fetchLineDataChart();
    fetchFilterList();
    fetchMealList(currentPagination);
  }, [fetchLineDataChart, fetchFilterList, fetchMealList, currentPagination]);

  useEffect(() => {
    setShowList(itemList);
  }, [itemList]);

  return {
    itemList,
    setItemList,
    showList,
    setShowList,
    filterList,
    setFilterList,
    lineDataChart,
    setLineDataChart,
    currentPagination,
    setCurrentPagination,
    fetchMealList,
  };
};
