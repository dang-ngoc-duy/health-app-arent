import React from "react";
import EmptyData from "src/components/common/EmptyData";
import ItemListBase, { ItemColumn } from "src/components/common/ItemListBase";

interface ItemListProps {
  showList: ItemColumn[];
}

const ItemList: React.FC<ItemListProps> = (props) => {
  const { showList } = props;
  return (
    <div id="item-list" className="item-list">
      {showList.length ? (
        showList.map((item, idx) => (
          <ItemListBase key={idx} type="column" data={item}></ItemListBase>
        ))
      ) : (
        <EmptyData></EmptyData>
      )}
    </div>
  );
};

export default ItemList;
