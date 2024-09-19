import { ExerciseType } from "../../types";
import { Button } from "../Button/Button";
import { InputProgressForm } from "../InputProgressForm/InputProgressForm";
import { ModalWrapper } from "../ModalWrapper/ModalWrapper";

export function ModalWorkoutProgress({exercises, modalRef}: {exercises: ExerciseType[] | null, modalRef: React.MutableRefObject<HTMLDivElement | null>}) {
  const onSaveProgress = () => {};

  console.log(exercises);
  return (
    <ModalWrapper>
      <div
        ref={modalRef}
        className="fixed top-[calc(50%-(487px/2))] left-[calc(50%-(343px/2))] lg:top-[calc(50%-(596px/2))] lg:left-[calc(50%-(426px/2))]
       bg-white  rounded-[30px] shadow-def w-[343px] p-[30px] lg:w-[426px] lg:p-10 "
      >
        <h3 className="font-skyeng text-[32px] text-black mb-12">
          Мой прогресс
        </h3>
        <div className="w-[237px] lg:w-[320px] max-h-[350px]  mb-[34px] overflow-x-hidden pr-4">
          {exercises?.map((el, i) => {
            return(
              <InputProgressForm key={i} el={el.name} />
            );
          })}
        </div>
        <Button title="Сохранить" onClick={onSaveProgress} />
      </div>
    </ModalWrapper>
  );
}

