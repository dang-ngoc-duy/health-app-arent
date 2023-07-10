import React from "react";
import EmptyData from "src/components/common/EmptyData";
import ItemListBase, { ItemRecord } from "src/components/common/ItemListBase";

interface MyDiaryProps {
  itemList: ItemRecord[];
}

const MyDiary: React.FC<MyDiaryProps> = (props) => {
  const { itemList } = props;
  return (
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
  );
};

export default MyDiary;
