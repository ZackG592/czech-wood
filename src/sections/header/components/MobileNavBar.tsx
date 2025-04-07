import { FC, SetStateAction, Dispatch } from 'react';

interface MobileNavBarProps {
  setFunc: Dispatch<SetStateAction<boolean>>;
}

const MobileNavBar: FC<MobileNavBarProps> = ({ setFunc }) => {
  return (
    <div className="bg-black opacity-90 fixed left-0 right-0 z-10 h-[100vh] text-white text-[24px] overflow-hidden p-5">
      <div
        className="text-[48px] text-end active:text-red-800"
        onClick={() => setFunc(false)}
      >
        X
      </div>
      <div>
        <div className="w-[50%] m-0 m-auto mt-15 text-center active:text-red-800">
          Gallery
        </div>
        <div className="w-[50%] m-0 m-auto mt-5 text-center  active:text-red-800">
          Prices
        </div>
        <div className="w-[50%] m-0 m-auto mt-5 text-center  active:text-red-800">
          About us
        </div>
        <div className="w-[50%] m-0 m-auto mt-5 text-center  active:text-red-800">
          Contact
        </div>
      </div>
    </div>
  );
};

export default MobileNavBar;
