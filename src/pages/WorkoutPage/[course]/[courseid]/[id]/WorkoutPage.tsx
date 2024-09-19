import { useEffect, useRef, useState } from "react";
import { Button } from "../../../../../components/Button/Button";
import Header from "../../../../../components/Header/Header";
import { Video } from "../../../../../components/Video/Video";
import Wrapper from "../../../../../components/Wrapper/Wrapper";
import { ModalWorkoutProgress } from "../../../../../components/WorkoutProgressModal/ModalWorkoutProgress";
import { CourseProp, ExerciseType, WorkoutType } from "../../../../../types";
import { useParams } from "react-router-dom";
import { getWorkouts } from "../../../../../api/coursesApi";
import { getExercises } from "../../../../../api/workoutApi";
import { Title } from "../../../../../components/Title/Title";
import { ExerciseList } from "../../../../../components/ExerciseList/ExerciseList";

export function WorkoutPage({courses}: {courses: CourseProp[] | null;}) {
  const [isOpen, setIsOpen] = useState(false);
  const [workouts, setWorkouts] = useState<WorkoutType[] | null>([]);
  const [exercises, setExercises] = useState<ExerciseType[] | null>([]);
  const { id } = useParams();
  
  const modalRef = useRef<HTMLDivElement | null>(null);

  
  const courseUser = courses?.filter((item) => item.workouts.find((el) => el === id));
  const courseId = courseUser?.find((el) => el._id);
  const workout = workouts?.find((el) => el._id === id);

  useEffect(() => {
    
    const getDataWorkouts = async () => {
      try {
        const res = await getWorkouts();
        setWorkouts(res);
      } catch (error) {
        console.error('Ошибка при загрузке тренировок:', error);
      }
    };

    getDataWorkouts();
  }, []);

  useEffect(() => {
    
    const getDataExercises = async () => {
      if (workout && courseId) {  
        try {
          const uid = JSON.parse(localStorage.getItem('user') || "").uid;
          const res = await getExercises(uid, String(courseId._id), String(workout._id));
          setExercises(res);
        } catch (error) {
          console.error('Ошибка при загрузке упражнений:', error);
        }
      }
    };

    
    if (workout && courseId) {
      getDataExercises();
    }
  }, [workout, courseId]); 

  const toggleWorkoutProgressModal = () => {
    setIsOpen(prev => !prev);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
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
        
        <section className="rounded-[30px] p-[30px] lg:p-10 bg-white shadow-def">
          <h2 className="text-[32px] text-black font-skyeng font-normal mb-[20px]">
            Упражнения тренировки
          </h2>

          {/* Используем компонент ExerciseList для отображения упражнений */}
          <ExerciseList exercises={exercises} />

          <div className="lg:w-[320px] max-w-[283px] w-auto mt-10">
            <Button
              title="Заполнить свой прогресс"
              onClick={toggleWorkoutProgressModal}
            />
          </div>

          {/* Отображаем модальное окно, если оно открыто */}
          {isOpen && <ModalWorkoutProgress modalRef={modalRef} exercises={exercises} />}
        </section>
      </Wrapper>
    </>
  );
}