import { timeLog } from "console";
import Image from "next/image";
const Footer = () => {
  const info = [
    {
      title: "follo me",
      info1: "facebook",
      info2: "instargram",
      infoLink1: "",
      infoLink2: "",
    },
    {
      title: "about me",
      info1: "portfolio",
      info2: "resume",
      infoLink1: "",
      infoLink2: "",
    },
  ];

  const footerContentList = [
    { title: "get in touch", list: ["010-1010-1010", "gmail@mail.com"] },
    { title: "follow me", list: ["facebook", "instagram"] },
    { title: "about me", list: ["portfolio", "resume"] },
  ];
  return (
    <div className="bg-lightGray py-10 ">
      <footer className="pt-[70px] pb-[77px] flex gap-16 flex-col md:flex-row md:gap-40">
        {/* <footer className="flex gap-20 ml-16"> */}
        <div className="block gap-12 my-10">
          <Image src="/Logo.svg" alt="로고" width={217} height={52} />
          <p>Digitaldastin by Dastin Darmawan</p>
        </div>
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-24">
          {/* {follow me - facebook, instagram
          aboutme - portfolio, resume} */}
          {/* <p className="font-bold">GET IN TOUCH</p>
          <p className="my-8">010-1010-1010</p>
          <p>demo@holymoly.com</p> */}
          {/* {info.map((x) => x.info1)} */}
          {footerContentList.map(({ title, list }) =>
            FooterContent({ title, list })
          )}
        </div>
      </footer>
      <p className="ml-16">&copy; 2022 Digitaldastin</p>
    </div>
  );
};

function FooterContent({ title, list }: { title: string; list: string[] }) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold">{title}</h2>
      <ul className="flex flex-col gap-5 text-lg">
        {list.map((content) => (
          <li>{content}</li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
