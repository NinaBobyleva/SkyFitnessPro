import { db } from '../api/firebaseConfig';
import { getAuth } from 'firebase/auth';
import { ref, remove } from 'firebase/database';

const auth = getAuth();

export const removeSubscribedCourse = async (courseId: string) => {
  await remove(
    ref(db, `users/${auth.currentUser?.uid}/courses/${courseId}`),
  );
};

