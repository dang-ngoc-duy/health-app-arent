import React, { useState } from "react";
import myRecommend from "src/assets/images/MyRecommend-1.jpg";
import RecordBase from "src/components/common/RecordBase";
import ButtonBase from "src/components/common/ButtonBase";
import LineChartBase from "src/components/common/LineChartBase";
import ItemListBase, { ItemRecord } from "src/components/common/ItemListBase";

import { StyledAchievements } from "./style";

const Achievements: React.FC = () => {
  const [itemList, setItemList] = useState<ItemRecord[]>([
    {
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      content:
        "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    },
  ]);
  const [featureList, setFeatureList] = useState([
    {
      title: "BODY RECORD",
      describe: "自分のカラダの記録",
      imageLink: myRecommend,
    },
    {
      title: "BODY RECORD",
      describe: "自分のカラダの記録",
      imageLink: myRecommend,
    },
    {
      title: "BODY RECORD",
      describe: "自分のカラダの記録",
      imageLink: myRecommend,
    },
  ]);

  const recordData: ItemRecord = {
    date: "2021.05.21",
    time: "23:25",
    content:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
  };

  const addItemList = () => {
    const listContainer = document.getElementById("diary-list");

    setItemList((prev) => [
      ...prev,
      {
        date: "2021.05.21",
        time: "23:25",
        content:
          "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
      },
    ]);

    listContainer && (listContainer.scrollTop = listContainer.scrollHeight);
  };
  return (
    <StyledAchievements>
      <div className="features">
        {featureList.map((feature, idx) => (
          <RecordBase
            key={idx}
            imageLink={feature.imageLink}
            title={feature.title}
            describe={feature.describe}
          ></RecordBase>
        ))}
      </div>

      <div className="body-record">
        Body Record Section <LineChartBase></LineChartBase>
      </div>
      <div className="my-exercise">Exercise Section</div>
      <div className="my-diary">
        Diary Section
        <div id="diary-list" className="diary-list">
          {itemList.map((item, idx) => (
            <ItemListBase
              key={idx}
              type="record"
              data={recordData}
            ></ItemListBase>
          ))}
        </div>
      </div>
      <div className="load-more">
        <ButtonBase
          onClick={addItemList}
          title="記録をもっと見る"
          type="normal"
        ></ButtonBase>
      </div>
    </StyledAchievements>
  );
};

export default Achievements;
