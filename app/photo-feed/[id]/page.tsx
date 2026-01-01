import Image from "next/image";
import wonders, { WonderImage } from "../wonders";

const PhotoPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const photo: WonderImage = wonders.find((wonder) => wonder.id === id)!;

  return (
    <div className="container mx-auto my-10">
      <div className="w1/2 mx-auto">
        <div>
          <h1 className="text-center text-3xl font-bold my-4">
            {photo?.name} Kamran
          </h1>
        </div>
        <Image
          alt={photo?.name}
          src={photo?.src}
          className="w-full object-cover aspect-square"
        />
        <div className="bg-white py-4">
          <h3>{photo?.photographer}</h3>
          <p>{photo?.location}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoPage;
