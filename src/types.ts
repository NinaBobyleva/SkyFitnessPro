export type CourseType = {
  _id: string;
  description: string;
  directions: string[];
  fitting: string[];
  nameEN: string;
  nameRU: string;
  order: number;
  workouts: string[];
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
