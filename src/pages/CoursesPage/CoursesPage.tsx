import Wrapper from "../../components/Wrapper/Wrapper";

export function CoursesPage() {
  return (
    <Wrapper>
      <div>
        <div
          id="notification-box"
          className="flex fixed flex-col items-center justify-center top-0 z-50 p-3"
        ></div>
        <section
          className={`flex flex-row justify-end md:justify-between w-auto h-[330px] lg:h-[310px] rounded-[30px] overflow-hidden`}
        >
          <h1 className="font-roboto-500 hidden md:text-4xl lg:text-6xl  md:block font-medium text-white mb-[10px] pt-[40px] pl-[40px]"></h1>
        </section>
        <section className="my-[40px] lg:my-[60px] ">
          <h2 className="font-roboto-500 text-black text-2xl md:text-5xl mb-[24px] lg:mb-[40px]">
            Подойдет для вас, если:
          </h2>
          <div className="flex flex-col md:flex-row gap-[17px]"></div>
        </section>
        <section className="z-10">
          <h2 className="font-roboto-500 text-black text-2xl md:text-5xl mb-[24px] lg:mb-[40px]">
            Направления:
          </h2>
          <ul className="bg-lime   rounded-[30px] flex flex-col  gap-y-[20px] lg:flex-row flex-wrap md:gap-y-[22px] p-[30px] "></ul>
        </section>
        <section className="z-10 mt-[156px] xl:mt-[102px] md:mt-[256px]">
          <div className="rounded-[30px] p-[40px] md:p-[30px] lg:p-10 bg-white shadow-def">
            <div className="max-w-[465px] flex flex-col xl:relative xl:z-20">
              <h2 className="text-[32px] md:text-5xl text-black font-roboto-500 leading-none mb-[28px]">
                Начните путь <br /> к новому телу
              </h2>
              <div className="mb-[28px] h-[178px] relative">
                <ul className="flex flex-col list-inside"></ul>
              </div>
            </div>
            <div
              className="relative xl:z-10 -z-10 flex justify-end
            xl:bottom-[550px] md:bottom-[730px] bottom-[700px] 
            lg:left-[30px] md:left-[0px] left-[60px]"
            ></div>
          </div>
        </section>
      </div>
    </Wrapper>
  );
}
