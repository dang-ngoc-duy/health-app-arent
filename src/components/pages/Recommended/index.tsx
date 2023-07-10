import React from "react";
import ButtonBase from "src/components/common/ButtonBase";
import { QueryParams } from "src/services/models";

import Filters from "./Filters";
import ItemList from "./ItemList";
import { StyledRecommended } from "./style";
import { useRecommendedFetch } from "src/hooks/useRecommendedFetch";

const Recommended: React.FC = () => {
  const {
    itemList,
    showList,
    setShowList,
    recommendedList,
    currentPagination,
    setCurrentPagination,
    fetchPostsList,
  } = useRecommendedFetch();

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

  return (
    <StyledRecommended>
      <Filters
        recommendedList={recommendedList}
        handleFilterClick={handleFilterClick}
      ></Filters>
      <ItemList showList={showList}></ItemList>
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
