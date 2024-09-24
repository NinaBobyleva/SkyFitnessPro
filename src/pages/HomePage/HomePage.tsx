import CourseCard from "../../components/CourseCard/CourseCard";
import { Button } from "../../components/Button/Button";
import { CourseProp } from "../../types";
import { Link, Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Wrapper from "../../components/Wrapper/Wrapper";
import noticeImg from "/public/img/notice.png";


export function HomePage({ courses }: { courses: CourseProp[] | null; } ) {


  return (
    <>
      <Header />
      <Wrapper>
        <div>
          <div id="top" className="flex flex-col md:flex-row">
            <h1 className="mb-[16px] lg:mb-[8px] font-roboto font-medium text-[60px] leading-[60px] md:w-[calc(100% - 308px)] main:w-[850px]">
              Начните заниматься спортом и улучшите качество жизни
            </h1>
            <div className="relative w-[288px] h-[120px]">
              <img
                src={noticeImg}
                alt="Notice"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex md:justify-center lg:justify-start flex-wrap md:gap-y-10 gap-x-10 mb-32 mt-10">
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

          <div className="flex justify-center mx-[auto] w-[140px] mt-8">
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

