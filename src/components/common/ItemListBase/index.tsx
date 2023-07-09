import React from "react";
import {
  StyledItemListPhoto,
  StyledItemListColumn,
  StyledItemListDiary,
} from "./style";

export interface ItemPhoto extends ItemBase {
  mealsOfTheDay: string;
}

export interface ItemColumn extends ItemBase {
  describe: string;
  hashTag: string[];
}

export interface ItemRecord extends ItemBase {
  content: string;
}

interface ItemBase {
  id: string;
  date: string;
  time?: string;
  imageLink?: string;
}

export interface ItemListBaseProps {
  type: "photo" | "column" | "record";
  data: ItemPhoto | ItemColumn | ItemRecord;
}

const ItemListBase: React.FC<ItemListBaseProps> = (props) => {
  const { type, data } = props;

  const renderItemListBase = () => {
    switch (type) {
      case "photo":
        const photoData = data as ItemPhoto;
        return (
          <StyledItemListPhoto
            style={{ backgroundImage: `url(${photoData?.imageLink})` }}
          >
            <span>{`${photoData.date}.${photoData.mealsOfTheDay}`}</span>
          </StyledItemListPhoto>
        );
      case "column":
        const columnData = data as ItemColumn;
        return (
          <StyledItemListColumn>
            <div
              className="image-block"
              style={{ backgroundImage: `url(${columnData?.imageLink})` }}
            >
              <div className="flag">
                <span>{columnData.date}</span> <span>{columnData.time}</span>
              </div>
            </div>
            <p className="describe-block">{columnData.describe ?? "---"}</p>
            <div className="hash-tag-block">
              {columnData.hashTag
                .filter((item) => item !== "")
                .map((item, index) => (
                  <a key={index} href="/#">
                    {item}
                  </a>
                ))}
            </div>
          </StyledItemListColumn>
        );
      case "record":
        const recordData = data as ItemRecord;
        return (
          <StyledItemListDiary>
            <div className="date-time-block">
              <span>{recordData.date}</span>
              <span>{recordData.time}</span>
            </div>
            <div className="content-block">{recordData.content}</div>
          </StyledItemListDiary>
        );
      default:
        return null;
    }
  };

  return renderItemListBase();
};

export default ItemListBase;
