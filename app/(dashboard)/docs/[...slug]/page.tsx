import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).slug;
  return {
    title: `Docs - ${id}`,
    description: `Docs - ${id}`,
  };
};

const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};

const Docs = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const random = getRandomInt(2);
  if (random == 0) {
    throw new Error("Error Loading Slugs");
  }
  const { slug } = await params;
  return <h1>Welcome to the docs page {slug}</h1>;
};

export default Docs;
