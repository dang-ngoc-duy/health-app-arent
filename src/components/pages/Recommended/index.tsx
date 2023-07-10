import React, { useEffect, useState } from "react";
import RecommendedBase from "src/components/common/RecommendedBase";
import ItemListBase, { ItemColumn } from "src/components/common/ItemListBase";
import { StyledRecommended } from "./style";
import ButtonBase from "src/components/common/ButtonBase";
import { QueryParams, RecommendedFilter } from "src/services/models";
import EmptyData from "src/components/common/EmptyData";
import RecommendedServices from "src/services/recommended";

const Recommended: React.FC = () => {
  const [itemList, setItemList] = useState<ItemColumn[]>([]);
  const [showList, setShowList] = useState<ItemColumn[]>(itemList);
  const [recommendedList, setRecommendedList] = useState<RecommendedFilter[]>(
    []
  );
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
    fetchPostsList(newPagination);
    const listContainer = document.getElementById("diary-list");
    listContainer && (listContainer.scrollTop = listContainer.scrollHeight);
  };

  const handleFilterClick = (id: string | undefined) => {
    const newList = itemList.filter((item) => item.id === id);
    setShowList(newList);
  };

  useEffect(() => {
    fetchFilterList();
    fetchPostsList(currentPagination);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setShowList(itemList);
  }, [itemList]);

  // **** FETCH API AREA **** //
  const fetchFilterList = () => {
    RecommendedServices.getFilterList<RecommendedFilter[]>().then((res) => {
      const data = res?.data;
      if (data) {
        setRecommendedList(data);
      }
    });
  };
  const fetchPostsList = (queryParams: QueryParams) => {
    RecommendedServices.getPostsList<ItemColumn[]>(queryParams).then((res) => {
      const data = res?.data;
      if (data) {
        setItemList(data);
      }
    });
  };

  return (
    <StyledRecommended>
      <div className="recommend-filters">
        {recommendedList.length
          ? recommendedList.map((recommended, idx) => (
              <RecommendedBase
                id={recommended.id}
                onClick={handleFilterClick}
                key={idx}
                title={recommended.title}
                describe={recommended.describe}
              ></RecommendedBase>
            ))
          : null}
      </div>
      <div id="item-list" className="item-list">
        {showList.length ? (
          showList.map((item, idx) => (
            <ItemListBase key={idx} type="column" data={item}></ItemListBase>
          ))
        ) : (
          <EmptyData></EmptyData>
        )}
      </div>
      <div className="load-more">
        <ButtonBase
          onClick={addItemList}
          title="記録をもっと見る"
          type="normal"
        ></ButtonBase>
      </div>
    </StyledRecommended>
  );
};

export default Recommended;
