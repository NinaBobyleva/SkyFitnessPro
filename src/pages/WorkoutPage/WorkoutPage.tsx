import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import { Video } from "../../components/Video/Video";
import WorkoutProgress from "../../components/WorkoutProgress/WorkoutProgress";
import Wrapper from "../../components/Wrapper/Wrapper";
import { ModalWorkoutProgress } from "../../components/WorkoutProgressModal/ModalWorkoutProgress";
import { ExerciseType, WorkoutType } from "../../types";
import { useParams } from "react-router-dom";
import { getWorkouts } from "../../api/coursesApi";

export function WorkoutPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [workouts, setWorkouts] = useState<WorkoutType[] | null>([]);
  console.log(workouts);
  const { id } = useParams();
  console.log(id);
  const [exercises, setExercises] = useState<ExerciseType | null>();

  const workout = workouts?.find((el) => el._id === id);

  console.log(workout?.exercises);

  useEffect(() => {
    const getDataWorkouts = async () => {
      const res = await getWorkouts();
      setWorkouts(res);
    };
    getDataWorkouts();
  }, []);

  const toggleWorkoutProgressModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Header />
      <Wrapper>
        <section>
          <h1 className="font-roboto-500 text-2xl lg:text-6xl font-medium text-black mb-[10px] lg:mb-6">
            Йога
          </h1>
          <p className="text-black text-[32px] font-roboto-400 font-normal mb-6 lg:mb-10">
            {workout?.name}
          </p>
          <div className="h-[189px] md:h-[639px] rounded-[30px] mb-6 lg:mb-10">
            <Video videoURL={workout?.video} />
          </div>
        </section>
        <section className="rounded-[30px] p-[30px] lg:p-10 bg-white shadow-def ">
          <h2 className="text-[32px] text-black font-skyeng font-normal mb-[20px]">
            Упражнения тренировки
          </h2>
          <div className="grid grid-flow-row gap-6 items-end md:grid-cols-2 md:gap-5 xl:grid-cols-3">
            {workout?.exercises?.map((exercise) => {
                return (
                  <div className="lg:w-[320px] w-[283px]">
                    <WorkoutProgress title={exercise.name} progress="40%" />
                  </div>
                );
              })}
          </div>
          <div className="lg:w-[320px] max-w-[283px] w-auto mt-10">
            <Button
              title="Заполнить свой прогресс"
              onClick={toggleWorkoutProgressModal}
            />
          </div>
          {isOpen && <ModalWorkoutProgress />}
        </section>
      </Wrapper>
    </>
  );
}
