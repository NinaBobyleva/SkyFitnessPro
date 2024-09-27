import CourseCard from "../../components/CourseCard/CourseCard";
import { Button } from "../../components/Button/Button";
import { CourseProp } from "../../types";
import { Link, Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Wrapper from "../../components/Wrapper/Wrapper";


export function HomePage({ courses }: { courses: CourseProp[] | null }) {

  return (
    <>
      <Header />
      <Wrapper>
        <div>
          <div id="top" className="flex flex-col md:flex-row">
            <h1 className="lg:mb-[8px] font-roboto font-semibold sm:text-[60px] text-[32px] leading-8 sm:leading-[60px] sm:w-[calc(100% - 308px)] main:w-[850px] md:ml-0 ml-[10px]">
              Начните заниматься спортом и улучшите качество жизни
            </h1>
            <div className="relative w-[288px] h-[120px] hidden sm:block">
              <img
                src={"/img/notice.png"}
                alt="Notice"
                className="absolute inset-0 w-full h-full object-cover flex-wrap"
              />
            <p className="lg:block w-[288px] h-[120px] py-4 main:px-5 px-4 font-roboto-400 main:text-[32px] leading-none text-[28px] text-black opacity-100 z-1 relative bg-notice bg-cover bg-no-repeat bg-center pb-8 align-middle">
              Измени своё тело за полгода!
            </p>
            </div>
          </div>

          <div className="flex md:justify-center mb-6 lg:justify-start flex-wrap gap-x-10 mt-10 sm:gap-x-[24px] md:gap-y-10 md:gap-x-10 gap-4">
            {courses ? (
              courses.map((course) => (
                <CourseCard
                  key={course._id}
                  courseId={course._id}
                  course={course}
                  isSubscribed={false}
                  imgURL={course.nameEN}
                  title={course.nameRU}
                />
              ))
            ) : (
              <p>Загрузка курсов...</p>
            )}
          </div>

          <div className="flex justify-end md:justify-center mb-7 mx-[auto] md:w-[140px] mt-8">
            <Link to={"#top"}>
              <Button onClick={() => window.scrollTo({top: 0, behavior: "smooth"})} title="Наверх &#8593;" />
            </Link>
          </div>
        </div>
      </Wrapper>
      <Outlet />
    </>
  );
}