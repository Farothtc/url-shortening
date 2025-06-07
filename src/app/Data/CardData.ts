type Card = {
  id: number;
  img: string;
  title: string;
  desc: string;
};

const CardData: Card[] = [
  {
    id: 0,
    img: "/icon-brand-recognition.svg",
    title: "Brand Recognition",
    desc: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.",
  },
  {
    id: 1,
    img: "/icon-detailed-records.svg",
    title: "Detailed Records",
    desc: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    id: 2,
    img: "/icon-fully-customizable.svg",
    title: "Fully Customizable",
    desc: "Improve brand awareness and content discoverability through customizable links, supercharcing audiance engagement.",
  },
];

export type { Card };
export default CardData;
