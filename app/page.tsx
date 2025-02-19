import Image from "next/image";
import 증명사진 from "@/component/증명사진.jpg";

export default function Home() {
  return (
    <div className="p-5 bg-pink-200 flex flex-col items-center justify-center h-screen">
      <h1 className="text-[30pt] font-bold text-purple-900 text-center">Shirlyn Park</h1>
      <p className="text-lg text-gray-600 text-center">shirlynpark@gmail.com</p>
      <div className="mt-4"></div> {/* 여백 추가 */}
      <Image 
        src={증명사진} 
        alt="Shirlyn Park 증명사진" 
        width={150} 
        height={150} 
        className="rounded-full mb-4"
      />
      <h1 className="text-lg text-black-600 text-center">Seoul National University </h1>
      <p className="text-m text-gray-600 text-center">Bachelor of Economics</p>
      <p className="text-m text-gray-600 text-center">Combined Minor in Financial Economics</p>
    </div>
  );


}