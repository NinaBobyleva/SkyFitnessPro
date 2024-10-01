import { Dispatch, SetStateAction } from "react";
import { ExerciseType } from "../../types";
import { Button } from "../Button/Button";
import { InputProgressForm } from "../InputProgressForm/InputProgressForm";
import { ModalProgressCounted } from "../ModalProgressCounted/ModalProgressCounted";
import { ModalWrapper } from "../ModalWrapper/ModalWrapper";

export function ModalWorkoutProgress({
  exercises,
  setExercises,
  handleSaveChanges,
  modalRef,
  isOpen
}: {
  exercises: ExerciseType[] | null;
  modalRef: React.MutableRefObject<HTMLDivElement | null>;
  setExercises: Dispatch<SetStateAction<ExerciseType[]>>;
  handleSaveChanges: () => void;
  isOpen: boolean;
}) {
  
  return (
    <ModalWrapper>
      {isOpen ? (
        <div className="fixed top-[calc(50%-(252px/2))] left-[calc(50%-(343px/2))] lg:top-[calc(50%-(278px/2))] lg:left-[calc(50%-(426px/2))]">
          <ModalProgressCounted/>
        </div>
      ) : (
        <div
        ref={modalRef}
        className="fixed top-[calc(50%-(487px/2))] left-[calc(50%-(343px/2))] lg:top-[calc(50%-(596px/2))] lg:left-[calc(50%-(426px/2))]
       bg-white  rounded-[30px] shadow-def w-[343px] p-[30px] lg:w-[426px] lg:p-10"
      >
        <div className="overflow-x-hidden">
          <h3 className="font-skyeng text-[32px] text-black mb-12">
            Мой прогресс
          </h3>
          <div className="w-[237px] lg:w-[320px] max-h-[350px]  mb-[34px]">
            {exercises?.map((exercise, i) => {
              return (
                <InputProgressForm
                  key={i}
                  exerciseName={exercise.name}
                  id={String(exercise)}
                  value={exercise.progressWorkout}
                  onChange={(e) => setExercises((prev: ExerciseType[]) => prev.map(item => item.name === exercise.name ? {...item, progressWorkout: Number(e.target.value)} : item))}
                />
              );
            })}
          </div>
        </div>

        <Button title="Сохранить" onClick={handleSaveChanges} />
      </div>
      )}
    </ModalWrapper>
  );
}
