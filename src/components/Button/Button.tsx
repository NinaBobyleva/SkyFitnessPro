
interface ButtonPropsType {
  title: string;
}

type ButtonPropsInput = ButtonPropsType & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonPropsInput) {
  return (
    <button
    {...props}
      className="justify-self-center font-roboto-400  rounded-full w-full h-[52px] px-5 bg-lime text-lg text-black hover:bg-limeHover active:bg-black active:text-white cursor-custom"
    >
      {props.title}
      {/* {props.children} */}
    </button>
  );
}
