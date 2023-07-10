import React from "react";
import EmptyData from "src/components/common/EmptyData";
import { ExerciseItem } from "src/services/models";

interface MyExerciseProps {
  exerciseData: ExerciseItem[];
}

const MyExercise: React.FC<MyExerciseProps> = (props) => {
  const { exerciseData } = props;
  return (
    <div id="my-exercise" className="my-exercise">
      <div className="line-chart-header">
        <div>MY EXERCISE</div>
        <div>2021.05.21</div>
      </div>
      {exerciseData.length ? (
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
      ) : (
        <EmptyData
          style={{
            height: "100%",
            width: "100%",
            background: "var(--dark-600)",
            color: "#fff",
          }}
        ></EmptyData>
      )}
    </div>
  );
};

export default MyExercise;
