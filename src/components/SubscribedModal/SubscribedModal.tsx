import SVG from '../SVG/SVG';

// type SubscribedModalProp = {
//   onClick: () => void;
//   isSubscribed: boolean;
// };
const SubscribedModal: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto">
      <div className="bg-white w-[343px] p-[30px] lg:w-[426px] lg:p-10 rounded-[30px] shadow-def text-center">
        <div className="flex justify-end">
          <button
          // onClick={onClick}
          className="mr-4">
            <SVG icon="icon-close" className="w-6 h-6" />
          </button>
        </div>
        <h3 className="font-skyeng text-[40px] text-black mb-10">Вы подписались на курс!</h3>
        <SVG icon="icon-success" className="w-14 h-14 mx-auto" />
      </div>
    </div>
  );
};

export default SubscribedModal;

