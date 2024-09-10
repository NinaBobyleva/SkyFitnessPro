
export default function InputForm(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="px-[18px] py-[16px] mb-2.5 border border-[#D0CECE] rounded-[8px] w-full text-[16px/18px] leading-tight focus:outline-none focus:shadow-outline"
      {...props}
    />
  );
}
