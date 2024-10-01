import { WrapperProp } from "../../types";

export default function Wrapper({ children }: WrapperProp) {
  return (
    <main className="flex flex-col justify-center sm:justify-center mx-auto px-4 lg:px-8  lg:max-w-[1440px] main:px-[140px] lg:pb-10 md:justify-center">
      {children}
    </main>
  );
}
