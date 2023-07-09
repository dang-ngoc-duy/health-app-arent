import React, { useState } from "react";
import RecommendedBase from "src/components/common/RecommendedBase";
import ItemListBase, { ItemColumn } from "src/components/common/ItemListBase";
import column1 from "src/assets/images/column-1.jpg";
import column2 from "src/assets/images/column-2.jpg";
import column3 from "src/assets/images/column-3.jpg";
import column4 from "src/assets/images/column-4.jpg";
import column5 from "src/assets/images/column-5.jpg";
import column6 from "src/assets/images/column-6.jpg";
import column7 from "src/assets/images/column-7.jpg";
import column8 from "src/assets/images/column-8.jpg";
import { StyledRecommended } from "./style";
import ButtonBase from "src/components/common/ButtonBase";

const Recommended: React.FC = () => {
  const [itemList, setItemList] = useState<ItemColumn[]>([
    {
      id: "1",
      imageLink: column1,
      date: "2021.05.17",
      time: "23:25",
      describe:
        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
      hashTag: ["#魚料理", "#和食", "#DHA"],
    },
    {
      id: "2",
      imageLink: column2,
      date: "2021.05.17",
      time: "23:25",
      describe:
        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
      hashTag: ["#魚料理", "#和食", "#DHA"],
    },
    {
      id: "3",
      imageLink: column3,
      date: "2021.05.17",
      time: "23:25",
      describe:
        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
      hashTag: ["#魚料理", "#和食", "#DHA"],
    },
    {
      id: "4",
      imageLink: column4,
      date: "2021.05.17",
      time: "23:25",
      describe:
        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
      hashTag: ["#魚料理", "#和食", "#DHA"],
    },
    {
      id: "5",
      imageLink: column5,
      date: "2021.05.17",
      time: "23:25",
      describe:
        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
      hashTag: ["#魚料理", "#和食", "#DHA"],
    },
    {
      id: "6",
      imageLink: column6,
      date: "2021.05.17",
      time: "23:25",
      describe:
        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
      hashTag: ["#魚料理", "#和食", "#DHA"],
    },
    {
      id: "7",
      imageLink: column7,
      date: "2021.05.17",
      time: "23:25",
      describe:
        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
      hashTag: ["#魚料理", "#和食", "#DHA"],
    },
    {
      id: "8",
      imageLink: column8,
      date: "2021.05.17",
      time: "23:25",
      describe:
        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
      hashTag: ["#魚料理", "#和食", "#DHA"],
    },
  ]);
  const [recommendedList, setRecommendedList] = useState([
    { title: "RECOMMENDED COLUMN", describe: "オススメ" },
    { title: "RECOMMENDED DIET", describe: "ダイエット" },
    { title: "RECOMMENDED BEAUTY", describe: "美容" },
    { title: "RECOMMENDED HEALTH", describe: "健康" },
  ]);

  const addItemList = () => {
    const listContainer = document.getElementById("item-list");

    setItemList((prev) => [
      ...prev,
      {
        id: "",
        imageLink: column8,
        date: "2021.05.17",
        time: "23:25",
        describe:
          "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
        hashTag: ["#魚料理", "#和食", "#DHA"],
      },
    ]);

    listContainer && (listContainer.scrollTop = listContainer.scrollHeight);
  };
  return (
    <StyledRecommended>
      <div className="recommend-filters">
        {recommendedList.map((recommended, idx) => (
          <RecommendedBase
            key={idx}
            title={recommended.title}
            describe={recommended.describe}
          ></RecommendedBase>
        ))}
      </div>
      <div id="item-list" className="item-list">
        {itemList.map((item, idx) => (
          <ItemListBase key={idx} type="column" data={item}></ItemListBase>
        ))}
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
