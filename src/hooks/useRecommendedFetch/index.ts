import { useState, useCallback, useEffect } from "react";
import { ItemColumn } from "src/components/common/ItemListBase";
import { RecommendedFilter, QueryParams } from "src/services/models";
import RecommendedServices from "src/services/recommended";

export const useRecommendedFetch = () => {
  const [itemList, setItemList] = useState<ItemColumn[]>([]);
  const [showList, setShowList] = useState<ItemColumn[]>(itemList);
  const [recommendedList, setRecommendedList] = useState<RecommendedFilter[]>(
    []
  );
  const [currentPagination, setCurrentPagination] = useState<QueryParams>({
    _limit: "8",
  });

  const fetchFilterList = useCallback(() => {
    RecommendedServices.getFilterList<RecommendedFilter[]>().then((res) => {
      const data = res?.data;
      if (data) {
        setRecommendedList(data);
      }
    });
  }, []);

  const fetchPostsList = useCallback(
    (queryParams: QueryParams) => {
      RecommendedServices.getPostsList<ItemColumn[]>(queryParams).then(
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
    fetchFilterList();
    fetchPostsList(currentPagination);
  }, [fetchFilterList, fetchPostsList, currentPagination]);

  useEffect(() => {
    setShowList(itemList);
  }, [itemList]);

  return {
    itemList,
    setItemList,
    showList,
    setShowList,
    recommendedList,
    setRecommendedList,
    currentPagination,
    setCurrentPagination,
    fetchPostsList,
  };
};
