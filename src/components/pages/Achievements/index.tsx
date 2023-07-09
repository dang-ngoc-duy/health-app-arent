import React, { useState } from "react";
import myRecommend from "src/assets/images/MyRecommend-1.jpg";
import RecordBase from "src/components/common/RecordBase";
import ButtonBase from "src/components/common/ButtonBase";
import LineChartBase, {
  LineChartData,
  LineChartFilter,
} from "src/components/common/LineChartBase";
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
  const exerciseData = [
    { name: "家事全般（立位・軽い）", time: "10 min", kcal: "26kcal" },
    { name: "家事全般（立位・軽い）", time: "10 min", kcal: "26kcal" },
    { name: "家事全般（立位・軽い）", time: "10 min", kcal: "26kcal" },
    { name: "家事全般（立位・軽い）", time: "10 min", kcal: "26kcal" },
    { name: "家事全般（立位・軽い）", time: "10 min", kcal: "26kcal" },
    { name: "家事全般（立位・軽い）", time: "10 min", kcal: "26kcal" },
    { name: "家事全般（立位・軽い）", time: "10 min", kcal: "26kcal" },
    { name: "家事全般（立位・軽い）", time: "10 min", kcal: "26kcal" },
    { name: "家事全般（立位・軽い）", time: "10 min", kcal: "26kcal" },
    { name: "家事全般（立位・軽い）", time: "10 min", kcal: "26kcal" },
    { name: "家事全般（立位・軽い）", time: "10 min", kcal: "26kcal" },
    { name: "家事全般（立位・軽い）", time: "10 min", kcal: "26kcal" },
    { name: "家事全般（立位・軽い）", time: "10 min", kcal: "26kcal" },
    { name: "家事全般（立位・軽い）", time: "10 min", kcal: "26kcal" },
    { name: "家事全般（立位・軽い）", time: "10 min", kcal: "26kcal" },
    { name: "家事全般（立位・軽い）", time: "10 min", kcal: "26kcal" },
    { name: "家事全般（立位・軽い）", time: "10 min", kcal: "26kcal" },
    { name: "家事全般（立位・軽い）", time: "10 min", kcal: "26kcal" },
    { name: "家事全般（立位・軽い）", time: "10 min", kcal: "26kcal" },
  ];

  const dataChart: LineChartData = {
    labels: [
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
    ],
    datasets: [
      {
        label: "Dataset 1",
        data: [85, 83, 65, 73, 68, 58, 68, 55, 50, 49, 45, 49],
        borderColor: "rgb(255, 204, 33)",
        backgroundColor: "rgb(255, 204, 33)",
      },
      {
        label: "Dataset 2",
        data: [85, 80, 70, 68, 54, 53, 44, 43, 40, 30, 26, 22],
        borderColor: "rgb(143, 233, 208)",
        backgroundColor: "rgb(143, 233, 208)",
      },
    ],
  };

  const chartFilters: LineChartFilter[] = [
    { id: 1, name: "日", isActive: false },
    { id: 2, name: "週", isActive: false },
    { id: 3, name: "月", isActive: false },
    { id: 4, name: "年", isActive: true },
  ];

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
        <LineChartBase
          data={dataChart}
          textColor="white"
          gridLineColor="white"
          style={{
            background: "var(--dark-600)",
            paddingInline: "46px",
            paddingBlock: "56px",
            paddingTop: "20px",
          }}
          header={{ title: "BODY RECORD", dateTime: "2021.05.21" }}
          filters={chartFilters}
        ></LineChartBase>
      </div>
      <div className="my-exercise">
        <div className="line-chart-header">
          <div>MY EXERCISE</div>
          <div>2021.05.21</div>
        </div>
        <ul className="exercise-list">
          {exerciseData.map((item, idx) => (
            <li key={idx}>
              <div>
                <span>{item.name}</span>
                <span>{item.time}</span>
              </div>
              <span>{item.kcal}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="my-diary">
        <span>MY DIARY</span>
        <div id="diary-list" className="diary-list">
          {itemList.map((item, idx) => (
            <ItemListBase key={idx} type="record" data={item}></ItemListBase>
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
