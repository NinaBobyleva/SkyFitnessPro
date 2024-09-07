import { Button } from "../Button/Button";
import { ModalWrapper } from "../ModalWrapper/ModalWrapper";

export function ModalWorkoutProgress() {
  const onSaveProgress = () => {};

  return (
    <ModalWrapper>
      <div
        className="fixed top-[calc(50%-(487px/2))] left-[calc(50%-(343px/2))] lg:top-[calc(50%-(596px/2))] lg:left-[calc(50%-(426px/2))]
       bg-white  rounded-[30px] shadow-def w-[343px] p-[30px] lg:w-[426px] lg:p-10 "
      >
        <h3 className="font-skyeng text-[32px] text-black mb-12">
          Мой прогресс
        </h3>
        <input className="font-roboto-400 w-[237px] lg:w-[320px] h-[52px] mb-5 border rounded-lg border-gray border-solid text-black text-[18px] font-normal px-[18px] py-[16px] mr-5" />
        <Button title="Сохранить" onClick={onSaveProgress} />
      </div>
    </ModalWrapper>
  );
}
