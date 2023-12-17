import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface TeamCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
  quals: string[];
}

export default function TeamCard(props: TeamCardProps) {
  return (
    <div className="m-2">
      <div className="bg-white bg-opacity-50 backdrop-blur-md relative rounded-xl gap-3 grid grid-cols-1 md:grid-cols-7 w-full px-5 py-3 shadow-sm border border-black border-opacity-20">
        <Image
          src={props.image}
          alt={props.name}
          className="object-cover aspect-square rounded-full md:col-span-2"
          width={600}
          height={600}
        />
        <div className="md:col-span-5 px-5 py-3 gap-1 flex flex-col justify-center">
          <div className="flex md:flex-row flex-col gap-2 md:items-end">
            <h1 className="font-dm text-2xl md:text-4xl">{props.name}</h1>
            <h2 className="font-dekko hidden md:block text-3xl text-navy">
              &ndash;
            </h2>
            <h2 className="font-dekko text-2xl md:text-3xl text-navy">
              {props.role}
            </h2>
          </div>
          <p className="font-antic text-xl">{props.description}</p>
          <ul className="grid list-disc pt-1 list-inside grid-cols-1 md:grid-cols-2 self-center w-full">
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
