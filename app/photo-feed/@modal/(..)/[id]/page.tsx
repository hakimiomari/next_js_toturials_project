import Image from "next/image";
import wonders, { WonderImage } from "../../../wonders";
import Modal from "@/app/components/modal";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo: WonderImage = wonders.find((wonder) => wonder.id === id)!;

  return (
    <Modal>
      <Image
        alt={photo.name}
        src={photo.src}
        className="w-full object-cover aspect-square"
      />
      <div className="bg-white p-4">
        <h2 className="text-xl font-semibold">{photo.name}</h2>
        <p>{photo.photographer}</p>
        <p>{photo.location}</p>
      </div>
    </Modal>
  );
}

