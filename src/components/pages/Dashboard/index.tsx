import React, { useEffect } from "react";
import ButtonBase from "src/components/common/ButtonBase";
import { useDashboardFetch } from "src/hooks/useDashboardFetch";
import { QueryParams } from "src/services/models";

import Filters from "./Filters";
import ItemList from "./ItemList";
import LineChart from "./LineChart";
import ProgressCircle from "./ProgressCircle";
import { StyledDashboard } from "./style";
import { useNavigate } from "react-router-dom";
import { useUserLogin } from "src/hooks/useUserLogin";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { userProfile } = useUserLogin();
  const {
    itemList,
    showList,
    setShowList,
    filterList,
    lineDataChart,
    currentPagination,
    setCurrentPagination,
    fetchMealList,
  } = useDashboardFetch();

  const addItemList = () => {
    const newPaginationLimit = parseInt(currentPagination._limit as string) * 2;
    const newPagination: QueryParams = {
      ...currentPagination,
      _limit: newPaginationLimit.toString(),
    };
    setCurrentPagination(newPagination);
    fetchMealList(newPagination);
    const listContainer = document.getElementById("item-list");
    listContainer && (listContainer.scrollTop = listContainer.scrollHeight);
  };
  const handleFilterClick = (id: string | undefined) => {
    const newList = itemList.filter((item) => item.id === id);
    setShowList(newList);
  };

  useEffect(() => {
    if (!userProfile) {
      navigate("/login");
    }
  });

  return (
    <StyledDashboard>
      <ProgressCircle></ProgressCircle>
      <LineChart lineDataChart={lineDataChart}></LineChart>
      <div className="container">
        <Filters
          filterList={filterList}
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
      </div>
    </StyledDashboard>
  );
};

export default Dashboard;
