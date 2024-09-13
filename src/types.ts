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
};

export type WorkoutType = {
  name: string;
  video: string;
  _id: string;
  exercises: ExerciseType[];
  progressWorkout: number;
};

export type PathProp = {
  HOME: string;
  COURSE: string;
  WORKOUT: string;
  PROFILE: string;
  LOGIN: string;
  SIGNUP: string;
};

export type InputProps = {
  // type: string;
  // name: string;
  placeholder: string;
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // value: string;
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

export type UserWorkoutType = [
  string, WorkoutType
];

export type UserCourseType = {
  _id: string;
  nameEN: string;
  nameRU: string;
  progress: string;
  workouts: UserWorkoutType[];
};
