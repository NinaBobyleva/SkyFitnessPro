import { useEffect, useRef, useState } from "react";
import { Button } from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import { Video } from "../../components/Video/Video";
import WorkoutProgress from "../../components/WorkoutProgress/WorkoutProgress";
import Wrapper from "../../components/Wrapper/Wrapper";
import { ModalWorkoutProgress } from "../../components/WorkoutProgressModal/ModalWorkoutProgress";
import { CourseProp, ExerciseType, WorkoutType } from "../../types";
import { useParams } from "react-router-dom";
import { getWorkouts } from "../../api/coursesApi";
import { getExercises } from "../../api/workoutApi";
import { Title } from "../../components/Title/Title";
import { ref, update } from "firebase/database";
import { db } from "../../api/firebaseConfig";

export type ExerciseArrayType = [string, ExerciseType];

export function WorkoutPage({ courses }: { courses: CourseProp[] | null }) {
  const [isOpen, setIsOpen] = useState(false);
  const [workouts, setWorkouts] = useState<WorkoutType[] | null>([]);
  const { id } = useParams();
  const [exercises, setExercises] = useState<ExerciseType[] | null>([]);
  const uid = JSON.parse(localStorage.getItem("user") || "").uid;
  console.log(exercises);

  // const ex = exercises?.filter((exercise) => console.log(exercise[1].progress));

  // console.log(ex);

  const workout = workouts?.find((el) => el._id === id);

  const courseUser = courses?.find((course) =>
    course.workouts.includes(String(id))
  );
  const courseId = courseUser?._id;
  const workoutId = workout?._id;

  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // console.log(courseId);
    const getDataWorkouts = async () => {
      const res = await getWorkouts(uid, String(courseId));
      // console.log(res);
      setWorkouts(res);
    };
    const getDataExercises = async () => {
      const res = await getExercises(uid, String(courseId), String(workoutId));
      // console.log(res);
      setExercises(res);
    };

    getDataWorkouts();
    getDataExercises();
  }, [courseId, workoutId]);

  const toggleWorkoutProgressModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      toggleWorkoutProgressModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  async function handleSaveChanges() {
    // const arrAvr = exercises?.map((exercise) =>
    //   exercise.progressWorkout < exercise.quantity
    //     ? (exercise.progressWorkout / exercise.quantity) * 100
    //     : 100
    // );

    await update(
      ref(
        db,
        `users/${uid}/courses/${courseId}/workouts/${workoutId}`
      ),
      { exercises: exercises }
    );
  }
  return (
    <>
      <Header />
      <Wrapper>
        <section>
          <Title title={courseUser?.nameRU} />
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
              const progress = Math.floor(
                exercise.progressWorkout < exercise.quantity
                  ? (exercise.progressWorkout / exercise.quantity) * 100
                  : 100
              )
                .toString()
                .concat("%");
              return (
                <div key={i} className="lg:w-[320px] w-[283px]">
                  <WorkoutProgress title={exercise.name} progress={progress} />
                </div>
              );
            })}
          </div>
          <div className="lg:w-[320px] max-w-[283px] w-auto mt-10">
            <Button
              title={exercises?.map(exercise => {exercise.progressWorkout ? "Обновить свой прогресс" : "Заполнить свой прогресс"})}
              onClick={toggleWorkoutProgressModal}
            />
          </div>
          {isOpen && (
            <ModalWorkoutProgress
              modalRef={modalRef}
              exercises={exercises}
              setExercises={setExercises}
              handleSaveChanges={handleSaveChanges}
              courseId={courseId}
              workoutId={workoutId}
            />
          )}
        </section>
      </Wrapper>
    </>
  );
}
