import { Button } from '../../components/Button/Button';
import ButtonLink from '../../components/ButtonLink/ButtonLink';
import CourseCard from '../../components/CourseCard/CourseCard';
import { Link } from 'react-router-dom';
import Wrapper from '../../components/Wrapper/Wrapper';
import Header from '../../components/Header/Header';
import { useState, useEffect } from 'react';
import { getAuth, User } from 'firebase/auth';
import { onValue, ref, set } from 'firebase/database';
import { getDatabase } from 'firebase/database';
import { ExerciseType } from '../../types';
import { FaSave } from 'react-icons/fa';
import { updateDisplayName } from '../../utils/updateDisplayName';


interface WorkoutType {
  name: string;
  video: string;
  _id: string;
  exercises: ExerciseType[];
  progressWorkout: number;
}

interface UserCourseType {
  _id: string;
  nameEN: string;
  nameRU: string;
  progressCourse: number;
  workouts: WorkoutType[];
}

function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [courses, setCourses] = useState<UserCourseType[]>([]);
  const [name, setName] = useState<string>('');
  const database = getDatabase();
  const auth = getAuth();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        onValue(ref(database, `users/${user.uid}/displayName`), (snapshot) => {
          if (snapshot.exists()) {
            setName(snapshot.val());
          }
        });
      } else {
        setUser(null);
      }
    });
  }, [auth, database]);

  useEffect(() => {
    if (!auth.currentUser?.uid) return;

    return onValue(ref(database, `users/${auth.currentUser.uid}/courses`), (snapshot) => {
      if (snapshot.exists()) {
        const userCourseList: UserCourseType[] = Object.entries(snapshot.val() as { [key: string]: UserCourseType}).map(([, course]) => ({
          ...course,
        }));
        setCourses(userCourseList);
      } else {
        console.log('No data available');
        setCourses([]);
      }
    });
  }, [auth.currentUser?.uid]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleNameSave = async () => {
    if (!auth.currentUser) return;
    await set(ref(database, `users/${auth.currentUser.uid}/displayName`), name);
    updateDisplayName(name, setName)
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <Wrapper>
        <div className="box-border bg-[#FAFAFA]">
          <h2 className="sm:mt-[0px] mt-[36px] sm:mb-[31px] mb-[19px] sm:text-[40px] text-[24px] font-bold">
            Профиль
          </h2>
          <div className="bg-[#FFFFFF] rounded-[30px] sm:px-[30px] px-[10px] py-[30px]">
            <div className="flex flex-wrap flex-row sm:space-x-[33px] sm:justyfy-start md:justify-center justify-center lg:justify-start">
              <div className="relative sm:w-[197px] w-[141px] sm:h-[197px] h-[141px] sm:mt-[0px] mt-[22px]">
                <img src="/img/no_foto.png" alt="no foto" className="w-full h-full object-cover mx-auto"/>
              </div>
              <div className="flex flex-col sm:gap-[20px] gap-[13px] sm:mt-0 mt-[22px] sm:ml-0 ml-[19px]">
                <div className="sm:text-[32px] text-[24px] font-bold flex items-center">
                  <input type="text" value={name} onChange={handleNameChange} className="mr-4 md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl max-w-[15rem]" />
                  <FaSave onClick={handleNameSave} className="cursor-pointer" />
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
                    <ButtonLink title="Выйти" link="/" onClick={() => {}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="sm:mt-[53px] mt-[23px] sm:mb-[31px] mb-[12px] sm:text-[40px] text-[24px] font-bold">
            Мои курсы
          </h2>
          {courses.length === 0 && <p className="sm:text-[18px] text-[16px]">У вас нет добавленных курсов</p>}
          <div className="grid grid-flow-row gap-6 md:grid-cols-2 xl:grid-cols-3 md:gap-x-[calc(100%-343px*2)] lg:gap-x-[calc(100%-360px*2)] xl:gap-x-[calc((100%-360px*3)/2)] md:gap-y-8 main:gap-x-10 main:gap-y-8 item-start">
            {courses.map((course) => {
              const progress = course.progressCourse.toString().concat('%');
              

              return (
                <CourseCard
                  key={course._id}
                  title={course.nameRU}
                  imgURL={course.nameEN}
                  isSubscribed={true}
                  courseId={course._id}
                  progress={progress}
                />
              );
            })}
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default ProfilePage;