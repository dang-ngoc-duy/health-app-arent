import React, { useState } from "react";
import RecommendedBase from "src/components/common/RecommendedBase";
import ItemListBase, { ItemColumn } from "src/components/common/ItemListBase";
import m01 from "src/assets/images/m01.jpg";
import { StyledRecommended } from "./style";
import ButtonBase from "src/components/common/ButtonBase";

const Recommended: React.FC = () => {
  const [itemList, setItemList] = useState<ItemColumn[]>([
    {
      imageLink: m01,
      date: "2021.05.17",
      time: "23:25",
      describe:
        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
      hashTag: ["#魚料理", "#和食", "#DHA"],
    },
    {
      imageLink: m01,
      date: "2021.05.17",
      time: "23:25",
      describe:
        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
      hashTag: ["#魚料理", "#和食", "#DHA"],
    },
    {
      imageLink: m01,
      date: "2021.05.17",
      time: "23:25",
      describe:
        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
      hashTag: ["#魚料理", "#和食", "#DHA"],
    },
    {
      imageLink: m01,
      date: "2021.05.17",
      time: "23:25",
      describe:
        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
      hashTag: ["#魚料理", "#和食", "#DHA"],
    },
  ]);
  const [recommendedList, setRecommendedList] = useState([
    { title: "Recommended", describe: "オススメ" },
    { title: "Recommended", describe: "オススメ" },
    { title: "Recommended", describe: "オススメ" },
    { title: "Recommended", describe: "オススメ" },
  ]);

  const addItemList = () => {
    const listContainer = document.getElementById("item-list");

    setItemList((prev) => [
      ...prev,
      {
        imageLink: m01,
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
