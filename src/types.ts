import { ReactNode } from "react";

export type CourseProp = {
  _id: string;
  description: string;
  directions: string[];
  fitting: string[];
  nameEN: string;
  nameRU: string;
  order: number;
  workouts: string[];
};

export type ExerciseType = {
  name: string;
  quantity: number;
  progressWorkout: number;
};

export type WorkoutType = {
  progressWorkout: number;
  name: string;
  video: string;
  _id: string;
  exercises: ExerciseType[];
};

export type PathProp = {
  HOME: string;
  COURSE: string;
  WORKOUT: string;
  PROFILE: string;
  LOGIN: string;
  SIGNUP: string;
};

export type ButtonProps = {
  title?: string;
  onClick?: () => void;
  type?: "submit";
};

export type ButtonLinkProps = {
  title: string;
  link: string;
  onClick?: () => void;
};

export type ModalNewPasswordProps = {
  email: string;
};

export type WorkoutProgressProp = {
  title: string;
  progress: string;
};

export type WrapperProp = {
  children: ReactNode;
};

export type SVGProp = {
  icon: string;
  className?: string;
};

export type UserWorkoutType = [string, WorkoutType];

export type UserCourseType = {
  _id: string;
  nameEN: string;
  nameRU: string;
  progressWorkout: string;
  workouts: UserWorkoutType[];
};

export type NewWorkoutContentType = {
  [key: string]: {
    _id: string;
    name: string;
    video: string;
    exercises: ExerciseType[];
  };
};

export type ChangePasswordType = {
  password: string;
  repeatPassword: string;
};
