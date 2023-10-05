"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import animationData from "@/public/HeroBanner.json";
import Lottie, { useLottie } from "lottie-react";

export default function Hero() {
  const defultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="bg-lightGray px-24 py-32">
      {/* <Fade direction="left"> */}
      <div className="flex justify-between items-center mx-auto max-w-7xl">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5 text-6xl font-bold whitespace-nowrap">
            <h1>안녕하세요,</h1>
            <h1>프론트엔드 개발자</h1>
            <h1>김소마입니다.</h1>
          </div>
          <span className="text-gray-500">
            Visual Studio Code editing. Redefined. Free. Built on open source.
            Runs everywhere.
          </span>
        </div>
        <div>
          <Lottie animationData={animationData} loop autoplay />
          {/* <Image src="/HeroBanner.svg" alt="로고" width={470} height={387} /> */}
        </div>
      </div>
      {/* </Fade> */}
    </div>
  );
}
//지민선배 블로그글 참조
// Lottie 적용하기
// install : react-awesome-reveal
//메인 화면 Hero 렌더링 시 Fade 애니메이션 효과 추가
