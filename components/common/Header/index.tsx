import CoffeeIcon from "./CoffeeIcon";
import Link from "next/link";
import Image from "next/image";
import Button from "../../atoms/Button";

const Header = () => {
  return (
    <header className="bg-lightGray sm:block lg:flex px-24 py-4 drop-shadow-sm justify-between items-center">
      <Image
        src="/Logo.svg"
        alt="loge"
        className="mx-40"
        width={217}
        height={52}
      />
      <div className="flex mx-20 gap-12 font-bold items-center">
        <Link href="https://github.com/useonguk" className="mx-1">
          Github
        </Link>
        <Link href="https://github.com/useonguk" className="mx-1">
          About Me
        </Link>
        {/* <button className="ml-10 flex bg-primary px-4 py-2.5 rounded">
          <CoffeeIcon />
          <p className="text-white">Coffee Chat With Me</p>
        </button> */}
        <Button />
      </div>
    </header>
  );
};

export default Header;
