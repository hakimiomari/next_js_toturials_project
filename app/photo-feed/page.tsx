import Link from "next/link";
import wonders from "./wonders";
import Image from "next/image";

const Home = () => {
  return (
    <main>
      <h1 className="text-center text-3xl font-blod my-4">
        New Wonders of the World
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {wonders.map(({ id, src, name }: any) => (
          <Link key={id} href={`/photo-feed/${id}`}>
            <Image
              src={src}
              alt={name}
              className="w-full object-cover aspect-square"
            ></Image>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Home;
