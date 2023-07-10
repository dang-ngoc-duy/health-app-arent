import React from "react";
import ButtonBase from "src/components/common/ButtonBase";
import { DashboardFilterData } from "src/services/models";

interface FiltersProps {
  filterList: DashboardFilterData[];
  handleFilterClick(id?: string): void;
}

const Filters: React.FC<FiltersProps> = (props) => {
  const { filterList, handleFilterClick } = props;
  return (
    <div className="filters">
      {filterList.length
        ? filterList.map((filter, idx) => (
            <ButtonBase
              onClick={handleFilterClick}
              key={idx}
              type="hexagon"
              iconLink={filter.icon}
              title={filter.title || "--"}
              id={filter.id}
            ></ButtonBase>
          ))
        : null}
    </div>
  );
};

export default Filters;
