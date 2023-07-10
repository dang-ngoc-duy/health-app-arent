import React from "react";
import RecordBase from "src/components/common/RecordBase";
import { ActionItem } from "src/services/models";

interface FeaturesProps {
  featureList: ActionItem[];
  handleGoToSection(id: string): void;
}

const Features: React.FC<FeaturesProps> = (props) => {
  const { featureList, handleGoToSection } = props;
  return (
    <div className="features">
      {featureList.length
        ? featureList?.map((feature, idx) => (
            <RecordBase
              id={feature.id}
              onClick={handleGoToSection}
              key={idx}
              imageLink={feature.imageLink}
              title={feature.title}
              describe={feature.describe}
            ></RecordBase>
          ))
        : null}
    </div>
  );
};

export default Features;
