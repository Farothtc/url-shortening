import { Card } from "../Data/CardData";
import Image from "next/image";

type StatisticCardProps = {
  e: Card;
};
export default function StatisticCard({ e }: StatisticCardProps) {
  const firstCard = 0;
  const secondCard = 1;
  const thirdCard = 2;
  return (
    <div
      className={`${e.id === secondCard ? "pt-10" : ""} ${
        e.id === thirdCard ? "pt-20" : ""
      }`}
    >
      <div className="card w-96 h-64 bg-white card-md shadow-sm">
        <div className="card-body">
          <div className="absolute top-[-15%] w-22 h-22 bg-[#3a3053] flex justify-center items-center rounded-full">
            <Image src={e.img} alt={e.title} width={48} height={48}></Image>
          </div>
          <div className="flex flex-col gap-5 pt-12">
            <h2 className="card-title text-black text-xl font-bold">
              {e.title}
            </h2>
            <p className="text-gray-400 text-base">{e.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
