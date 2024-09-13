import { useEffect, useRef, useState } from "react";
import { Button } from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import { Video } from "../../components/Video/Video";
import WorkoutProgress from "../../components/WorkoutProgress/WorkoutProgress";
import Wrapper from "../../components/Wrapper/Wrapper";
import { ModalWorkoutProgress } from "../../components/WorkoutProgressModal/ModalWorkoutProgress";
import { CourseProp, ExerciseType, UserWorkoutType, WorkoutType } from "../../types";
import { useParams } from "react-router-dom";
import { getWorkouts } from "../../api/coursesApi";
import { getUser } from "../../api/workoutApi";
import { Title } from "../../components/Title/Title";

export function WorkoutPage({courses}: {courses: CourseProp[] | null;}) {
  const [isOpen, setIsOpen] = useState(false);
  const [workouts, setWorkouts] = useState<WorkoutType[] | null>([]);
  const { id } = useParams();
  const [exercises, setExercises] = useState<ExerciseType[] | null>([]);
  const courseUser = courses?.filter((item) => item.workouts.find((el) => el === id));

  const modalRef = useRef<HTMLDivElement | null>(null);

  const workout = workouts?.find((el) => el._id === id);

  useEffect(() => {
    const getDataWorkouts = async () => {
      const res = await getWorkouts();
      setWorkouts(res);
    };
    const getDataUser = async () => {
      // const uid = JSON.parse(localStorage.getItem('user') || "").uid;
      const res = await getUser("3", "q02a6i", "17oz5f");
      setExercises(res);
    }

    getDataWorkouts();
    getDataUser();
  }, []);

  const toggleWorkoutProgressModal = () => {
    setIsOpen(prev => !prev);
  };

  const handleClickOutside = (e: any) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      toggleWorkoutProgressModal();
    }
  }
  
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);

  return (
    <>
      <Header />
      <Wrapper>
        <section>
          {courseUser?.map((el, i) => <Title key={i} title={el.nameRU} />)}
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
            {exercises?.map((exercise, i) => {
                return (
                  <div key={i} className="lg:w-[320px] w-[283px]">
                    <WorkoutProgress title={exercise.name} progress="0%" />
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
          {isOpen && <ModalWorkoutProgress modalRef={modalRef} exercises={exercises} />}
        </section>
      </Wrapper>
    </>
  );
}
