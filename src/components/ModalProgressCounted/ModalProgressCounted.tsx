import { ModalWrapper } from "../ModalWrapper/ModalWrapper";

export function ModalProgressCounted() {
  return (
    <ModalWrapper>
      <div className="fixed top-[calc(50%-(252px/2))] left-[calc(50%-(343px/2))] lg:top-[calc(50%-(278px/2))] lg:left-[calc(50%-(426px/2))]">
        <div className="flex flex-col items-center bg-white w-[343px] p-[30px] lg:w-[426px] lg:p-10 rounded-[30px] shadow-def text-center">
          <h3 className="font-skyeng text-[40px] text-black mb-10">
            Ваш прогресс засчитан!
          </h3>
          <svg className="w-14 h-14">
            <use xlinkHref={"/img/sprite.svg#icon-success"}></use>
          </svg>
        </div>
      </div>
    </ModalWrapper>
  );
}
