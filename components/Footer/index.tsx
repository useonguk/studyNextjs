import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-lightGray py-10 ">
      <footer className="flex gap-20 ml-16">
        <div className="block gap-12 my-10">
          <Image src="/Logo.svg" alt="로고" width={217} height={52} />
          <p>Digitaldastin by Dastin Darmawan</p>
        </div>
        <div className="block gap-12 my-10">
          <p className="font-bold">GET IN TOUCH</p>
          <p className="my-8">010-1010-1010</p>
          <p>demo@holymoly.com</p>
        </div>
      </footer>
      <p className="ml-16">&copy; 2022 Digitaldastin</p>
    </div>
  );
};

export default Footer;
