import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import WorkoutProgress from "../WorkoutProgress/WorkoutProgress";
import { CourseProp } from "../../types";
import { createPortal } from "react-dom";
import SubscribedModal from "../SubscribedModal/SubscribedModal";
import { addUserCourse } from "../../utils/userData";
import { auth } from "../../api/firebaseConfig";
import { removeSubscribedCourse } from "../../utils/removeSubscribedCourse";
import useFavoriteCourses from "../../hooks/useFavoriteCourse";

type CourseCardProp = {
  imgURL: string;
  title: string;
  isSubscribed: boolean;
  progress?: string;
  courseId: string;
  course?: CourseProp;
};

const CourseCard: React.FC<CourseCardProp> = ({
  courseId,
  progress,
  imgURL,
  title,
  isSubscribed,
  course,
}) => {
  const navigate = useNavigate();
  const currentUser = auth.currentUser;
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);
  const { isFavoriteCourse, addFavoriteCourse, removeFavoriteCourse } =
    useFavoriteCourses();

  const handleCardClick = () => {
    if (!isSubscribed) {
      navigate(`/course/${courseId}`);
    }
  };

  const handleAddCourseClick = () => {
    if (!currentUser) {
      navigate("/signin");
    } else if (!isSubscribed) {
      addUserCourse({
        userId: currentUser?.uid,
        courseId: String(course?._id),
        course: course!,
      });
      if (!isFavoriteCourse(courseId)) {
        addFavoriteCourse(courseId);
        setIsSuccessMessageVisible(true);
      }
    }
  };

  useEffect(() => {
    if (isSuccessMessageVisible) {
      const timer = setTimeout(() => {
        setIsSuccessMessageVisible(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isSuccessMessageVisible]);

  return (
    <div
      onClick={handleCardClick}
      className="relative w-[360px] bg-white rounded-[30px] shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out sm:gap-y-[24px] md:gap-y-[40px]"
      style={{ padding: "0px 0px 15px 0px", gap: "40" }}
    >
      <div>
        <img
          className="rounded-[30px] h-[325px] w-full object-cover"
          src={`/img/${imgURL}.png`}
          alt={title}
          width={360}
          height={325}
        />
        {isSubscribed ? (
          <svg
            onClick={(e) => {
              e.stopPropagation();
              removeSubscribedCourse(courseId);
              removeFavoriteCourse(courseId);
            }}
            className="absolute w-8 h-8 right-[20px] top-[20px] z-10 cursor-custom"
          >
            <g>
              <title>Удалить курс</title>
              <use xlinkHref={`/img/sprite.svg#icon-minus`}></use>
            </g>
          </svg>
        ) : (
          <svg
            onClick={(e) => {
              e.stopPropagation();
              handleAddCourseClick();
            }}
            className="absolute w-8 h-8 right-[20px] top-[20px] z-10 cursor-custom"
          >
            <g>
              <title>Добавить курс</title>
              <use xlinkHref={`/img/sprite.svg#icon-plus`}></use>
            </g>
          </svg>
        )}
      </div>
      {isSuccessMessageVisible &&
        createPortal(
          <SubscribedModal />,
          document.getElementById("modal-root") || document.body
        )}
      <div className="flex flex-col px-[30px] pt-6 pb-4 gap-y-[18px]">
        <h2 className="font-roboto-500 text-[24px] lg:text-[28px] leading-8 text-gray-800">
          {title}
        </h2>
        <div className="flex flex-wrap gap-1.5">
          <div className="flex shrink-0 items-center gap-x-1.5 bg-gray-200 rounded-[30px] p-[10px]">
            <svg className="w-[16px] h-[16px] text-gray-600">
              <use xlinkHref={`/img/sprite.svg#icon-calendar`}></use>
            </svg>
            <p className="text-[16px] leading-[110%] lg:text-[18px] text-gray-600">
              25 дней
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-x-1.5 bg-gray-200 rounded-[30px] p-[10px]">
            <svg className="w-[16px] h-[16px] text-gray-600">
              <use xlinkHref={`/img/sprite.svg#icon-time`}></use>
            </svg>
            <p className="text-base leading-[110%] lg:text-[18px] text-gray-600">
              20-50 мин/день
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-x-1.5 bg-gray-200 rounded-[30px] p-[10px]">
            <svg className="w-[16px] h-[16px] text-gray-600">
              <use xlinkHref={`/img/sprite.svg#icon-level`}></use>
            </svg>
            <p className="text-base leading-[110%] lg:text-[18px] text-gray-600">
              Сложность
            </p>
          </div>
        </div>
        {progress && (
          <div className="flex flex-col gap-10">
            <WorkoutProgress title="Прогресс" progress={progress} />
            <Link to={`/selection/${courseId}`}>
              <Button
                title={progress !== "0%" ? "Продолжить" : "Начать заново"}
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
