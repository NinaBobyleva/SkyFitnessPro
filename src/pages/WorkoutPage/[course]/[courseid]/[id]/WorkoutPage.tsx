import { useEffect, useRef, useState } from "react";
import { Button } from "../../../../../components/Button/Button";
import Header from "../../../../../components/Header/Header";
import { Video } from "../../../../../components/Video/Video";
import WorkoutProgress from "../../../../../components/WorkoutProgress/WorkoutProgress";
import Wrapper from "../../../../../components/Wrapper/Wrapper";
import { ModalWorkoutProgress } from "../../../../../components/WorkoutProgressModal/ModalWorkoutProgress";
import { CourseProp, ExerciseType, WorkoutType } from "../../../../../types";
import { useParams } from "react-router-dom";
import { ref, update } from "firebase/database";
import { db } from "../../../../../api/firebaseConfig";
import { getProgress } from "../../../../../utils/getProgress";
import { getProgressCourse } from "../../../../../utils/getProgressCourse";
import { getExercises, getWorkoutsByUser } from "../../../../../api/coursesApi";
import { Title } from "../../../../../components/Title/Title";

export function WorkoutPage({ courses }: { courses: CourseProp[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [workoutsUser, setWorkoutsUser] = useState<WorkoutType[]>([]);
  const { id } = useParams();
  const [exercises, setExercises] = useState<ExerciseType[]>([]);

  const uid = JSON.parse(localStorage.getItem("user") || "").uid;

  const workout = workoutsUser?.find((el) => el._id === id);

  const courseUser = courses?.find((course) =>
    course.workouts.includes(String(id))
  );
  const courseId = courseUser?._id;
  const workoutId = workout?._id;

  const modalRef = useRef<HTMLDivElement | null>(null);

  function closeSuccessModal() {
    setIsSuccess(false);
    setIsOpen(false);
  }

  function openSuccessModal() {
    setIsSuccess(true);
    setTimeout(closeSuccessModal, 2000);
  }

  // Получаем данные usera о тренировках и упражнениях с сервера
  useEffect(() => {
    const getDataExercisesByUser = async () => {
      const res = await getExercises(uid, String(courseId), String(workoutId));
      setExercises(res);
    };
    const getDataWorkoutsByUser = async () => {
      const res = await getWorkoutsByUser(uid, String(courseId));
      setWorkoutsUser(res);
    };

    getDataExercisesByUser();
    getDataWorkoutsByUser();
  }, [courseId, workoutId, uid]);

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

  // Добавляем данные о exercises и progressCourse на сервер
  async function handleSaveChanges() {
    await update(
      ref(db, `users/${uid}/courses/${courseId}/workouts/${workoutId}`),
      { exercises: exercises }
    );

    const progressCourse = await getProgressCourse(uid, String(courseId));

    await update(ref(db, `users/${uid}/courses/${courseId}/`), {
      progressCourse: progressCourse,
    });

    openSuccessModal();
  }
  return (
    <>
      <Header />
      <Wrapper>
        <section>
          <Title title={courseUser?.nameRU} />
          <p className="text-black md:text-[32px] text-[18px] font-roboto-400 font-normal mb-6 lg:mb-10">
            {workout?.name}
          </p>
          <div className="h-[189px] md:h-[639px] rounded-[30px] mb-6 lg:mb-10">
            <Video videoURL={workout?.video} />
          </div>
        </section>
        <section className="rounded-[30px] mb-16 md:mb-32 p-[30px] lg:p-10 bg-white shadow-def ">
          <h2 className="text-[32px] text-black font-skyeng font-normal mb-[20px]">
            Упражнения тренировки
          </h2>
          <div className="grid grid-flow-row gap-6 items-end md:grid-cols-2 md:gap-5 xl:grid-cols-3">
            {exercises.length > 0
              ? exercises?.map((exercise, i) => {
                  const progress = getProgress(exercise).toString().concat("%");
                  return (
                    <div key={i} className="lg:w-[320px] w-[283px]">
                      <WorkoutProgress
                        title={exercise.name}
                        progress={progress}
                      />
                    </div>
                  );
                })
              : "Список упражнений пуст"}
          </div>
          {exercises.length ? (
            <div className="lg:w-[320px] max-w-[283px] w-auto mt-10">
              <Button
                title={
                  exercises?.find((el) => el.progressWorkout)
                    ? "Обновить свой прогресс"
                    : "Заполнить свой прогресс"
                }
                onClick={toggleWorkoutProgressModal}
              />
            </div>
          ) : null}
          {isOpen && (
            <ModalWorkoutProgress
              isOpen={isSuccess}
              modalRef={modalRef}
              exercises={exercises}
              setExercises={setExercises}
              handleSaveChanges={handleSaveChanges}
            />
          )}
        </section>
      </Wrapper>
    </>
  );
}
