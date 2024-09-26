import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, update } from '@firebase/database';
import { auth } from '../api/firebaseConfig';

const useFavoriteCourses = () => {
  const [favoriteCourses, setFavoriteCourses] = useState(() => {
    const storedValue = localStorage.getItem('favorite-courses');
    return storedValue ? JSON.parse(storedValue) : {};
  });

  useEffect(() => {
    localStorage.setItem('favorite-courses', JSON.stringify(favoriteCourses));
  }, [favoriteCourses]);

  useEffect(() => {
    if (auth.currentUser) {
      const userId = auth.currentUser.uid;
      const db = getDatabase();
      const favoriteCoursesRef = ref(db, `users/${userId}/favorite-courses`);

      onValue(favoriteCoursesRef, (snapshot) => {
        const favoriteCoursesData = snapshot.val();
        if (favoriteCoursesData) {
          setFavoriteCourses(favoriteCoursesData);
        } else {
          setFavoriteCourses({});
        }
      });
    }
  }, [auth.currentUser]);

  const addFavoriteCourse = (courseId: string) => {
    if (auth.currentUser) {
      setFavoriteCourses((prevCourses: { [key: string]: boolean }) => ({ ...prevCourses, [courseId]: true }));
      const userId = auth.currentUser.uid;
      const db = getDatabase();
      const favoriteCoursesRef = ref(db, `users/${userId}/favorite-courses`);
      update(favoriteCoursesRef, { [courseId]: true });
    }
  };

  const removeFavoriteCourse = (courseId: string) => {
    if (auth.currentUser) {
      setFavoriteCourses((prevCourses: { [key: string]: boolean }) => {
        const newCourses = { ...prevCourses };
        delete newCourses[courseId];
        return newCourses;
      });
      const userId = auth.currentUser.uid;
      const db = getDatabase();
      const favoriteCoursesRef = ref(db, `users/${userId}/favorite-courses`);
      update(favoriteCoursesRef, { [courseId]: null });
    }
  };

  const isFavoriteCourse = (courseId: string) => {
    return favoriteCourses[courseId] === true;
  };

  return { favoriteCourses, addFavoriteCourse, removeFavoriteCourse, isFavoriteCourse };
};

export default useFavoriteCourses;
