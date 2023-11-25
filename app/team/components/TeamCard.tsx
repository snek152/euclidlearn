import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface TeamCardProps {
  name: string;
  role: string;
  description: string;
  image: StaticImport;
  quals: string[];
}

export default function TeamCard(props: TeamCardProps) {
  return (
    <div className="m-2">
      <div className="bg-white relative rounded-xl gap-3 grid grid-cols-7 w-full px-5 py-3 shadow-sm border border-black border-opacity-5">
        <Image
          src={props.image}
          alt={props.name}
          className="object-cover aspect-square rounded-full col-span-2"
        />
        <div className="col-span-5 px-5 py-3 gap-1 flex flex-col justify-center">
          <div className="flex gap-2 items-end">
            <h1 className="font-dm text-4xl">{props.name}</h1>
            <h2 className="font-dekko text-3xl text-navy">&ndash;</h2>
            <h2 className="font-dekko text-3xl text-navy">{props.role}</h2>
          </div>
          <p className="font-antic text-xl">{props.description}</p>
          <ul className="grid list-disc list-inside grid-cols-2 self-center w-full">
            {props.quals.map((qual) => (
              <li key={qual} className="font-antic text-xl">
                {qual}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
