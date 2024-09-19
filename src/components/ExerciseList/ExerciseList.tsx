import { ExerciseType } from "../../types";
import WorkoutProgress from "../WorkoutProgress/WorkoutProgress";


export function ExerciseList({ exercises }: { exercises: ExerciseType[] | null }) {
  if (!exercises || exercises.length === 0) {
    return <p className="text-black">Нет доступных упражнений.</p>;
  }

  return (
    <div className="grid grid-flow-row gap-6 items-end md:grid-cols-2 md:gap-5 xl:grid-cols-3">
      {exercises.map((exercise, i) => (
        <div key={i} className="lg:w-[320px] w-[283px]">
          <WorkoutProgress title={exercise.name} progress="0%" />
        </div>
      ))}
    </div>
  );
}