type InputProgressFormType = {
  id: string;
  value: number;
  exerciseName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function InputProgressForm({
  exerciseName,
  id,
  value,
  onChange,
}: InputProgressFormType) {
  return (
    <div className="font-roboto-400 text-black text-[18px] font-normal">
      {exerciseName}
      <input
        className="font-roboto-400 w-[237px] lg:w-[320px] h-[52px] mb-5 border rounded-lg border-gray border-solid text-black text-[18px] font-normal px-[18px] py-[16px] mr-5"
        type="number"
        min="0"
        step="1"
        placeholder="0"
        id={id}
        defaultValue={value}
        onChange={onChange}
      />
    </div>
  );
}
