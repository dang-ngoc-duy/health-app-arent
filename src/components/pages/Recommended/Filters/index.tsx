import React from "react";
import RecommendedBase from "src/components/common/RecommendedBase";
import { RecommendedFilter } from "src/services/models";

interface FiltersProps {
  recommendedList: RecommendedFilter[];
  handleFilterClick(id?: string): void;
}

const Filters: React.FC<FiltersProps> = (props) => {
  const { recommendedList, handleFilterClick } = props;
  return (
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
  );
};

export default Filters;
