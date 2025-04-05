import Image from 'next/image';

export default function Footer() {
  return (
    <div className="pt-20 bg-[#222021] text-white pb-10 md:text-xl">
      <div className="w-[65%] m-0 m-auto lg:flex lg:w-[80%] lg:justify-around">
        <div className="flex justify-center">
          <Image
            className="md:scale-[1.5]"
            width={140}
            height={100}
            src="/icons/logo.svg"
            alt=""
          />
        </div>
        <div className="md:flex md:justify-between md:mt-10 lg:mt-0">
          <div className="flex mt-5">
            <div className="pr-3">
              <Image
                width={100}
                height={100}
                className="w-[30px]  h-[30px] mt-3"
                src="/icons/location-mark.svg"
                alt=""
              />
            </div>
            <div>
              Na Plzeňce 1166/1 <br />
              Прага 5 - Смихов, 150 00
            </div>
          </div>
          <div className="flex mt-5 lg:pl-10">
            <div className="pr-3">
              <Image
                width={100}
                height={100}
                className="w-[30px]  h-[30px]"
                src="/icons/phone.svg"
                alt=""
              />
            </div>
            <div>+420 000 000 000</div>
          </div>
        </div>
      </div>
    </div>
  );
}
