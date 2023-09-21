import Hero from "@/components/Hero";
import Link from "next/link";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
//a tag는 세로고침
//Link는 필요한것만 리렌더링
//next Img는 빠르다 width랑 height 필요
export default function Home() {
  return (
    <main>
      <Hero />

      <Link href="/test">move test</Link>
      <hr />
      <Link href="test2">move test2</Link>
      <Image
        src="https://newsteacher.chosun.com/site/data/img_dir/2020/08/13/2020081300406_0.jpg"
        alt="판다"
        width={600}
        height={355}
      />
    </main>
  );
}
