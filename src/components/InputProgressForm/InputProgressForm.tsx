export function InputProgressForm({el}: {el: string}) {
    return(
        <div className="font-roboto-400 text-black text-[18px] font-normal">
            {el}
            <input
            className="font-roboto-400 w-[237px] lg:w-[320px] h-[52px] mb-5 border rounded-lg border-gray border-solid text-black text-[18px] font-normal px-[18px] py-[16px] mr-5"
            />
        </div>
    );
}