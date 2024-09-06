import { Button } from '../../components/Button/Button';
import ButtonLink from '../../components/ButtonLink/ButtonLink';
import CourseCard from '../../components/CourseCard/CourseCard';
import { Link } from 'react-router-dom';
import Wrapper from '../../components/Wrapper/Wrapper';
import Header from '../../components/Header/Header';

type Course = {
  _id: string;
  nameEN: string;
  nameRU: string;
  progressCourse: number;
  workouts: never[];
};

function ProfilePage() {
  const user = { email: 'example@example.com' }; // Замените на реальные данные пользователя
  const courses: [string, Course][] = [
    ['course1', {
      _id: '1',
      nameEN: '/img/Yoga.png',
      nameRU: 'Йога',
      progressCourse: 80,
      workouts: []
    }],
  ];

  return (
    <>
      <Header />
      <Wrapper>
        <div className="box-border bg-[#FAFAFA] pt-40">
          <h2 className="sm:mt-[0px] mt-[36px] sm:mb-[31px] mb-[19px] sm:text-[40px] text-[24px] font-bold">
            Профиль
          </h2>
          <div className="bg-[#FFFFFF] rounded-[30px] sm:px-[30px] px-[10px] py-[30px]">
            <div className="flex flex-wrap flex-row sm:space-x-[33px]">
              <div className="relative sm:w-[197px] w-[141px] sm:h-[197px] h-[141px] sm:mx-[0px] mx-[90px]">
                <img src="/img/no_foto.png" alt="no foto" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col sm:gap-[20px] gap-[13px] sm:mt-0 mt-[22px] sm:ml-0 ml-[19px]">
                <div className="sm:text-[32px] text-[24px] font-bold">
                  {user.email.split('@')[0]}
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="sm:text-[18px] text-[16px]">{`Логин: ${user.email}`}</p>
                  <p className="sm:text-[18px] text-[16px]">{`Пароль: ********`}</p>
                </div>
                <div className="flex flex-wrap flex-col align-center md:flex-row gap-[15px]">
                  <Link to="/reset" className="sm:w-[192px] w-[283px]">
                    <Button title="Изменить пароль" />
                  </Link>
                  <div className="sm:w-[192px] w-[283px]">
                    <ButtonLink
                      title="Выйти"
                      link="/"
                      onClick={() => { }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="sm:mt-[53px] mt-[23px] sm:mb-[31px] mb-[12px] sm:text-[40px] text-[24px] font-bold">
            Мои курсы
          </h2>
          {courses.length === 0 && (
            <p className="sm:text-[18px] text-[16px]">
              У вас нет добавленных курсов
            </p>
          )}
          <div className="grid grid-flow-row gap-6 md:grid-cols-2 xl:grid-cols-3 md:gap-x-[calc(100%-343px*2)] lg:gap-x-[calc(100%-360px*2)] xl:gap-x-[calc((100%-360px*3)/2)] md:gap-y-8 main:gap-x-10 main:gap-y-8 item-start">
            {courses.map(([id, course]) => {
              const progress = course.progressCourse.toString().concat('%');
              return (
                <CourseCard
                  key={id}
                  title={course.nameRU}
                  imgURL={course.nameEN}
                  isSubscribed={true}
                  courseId={id}
                  progress={progress} />
              );
            })}
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default ProfilePage;