import Card from "@/app/components/card";

const sleep = async (ms: number) =>
  await new Promise((resolve) => setTimeout(resolve, ms));

const Revenue = async () => {
  await sleep(5000);
  return <Card>Revenue Default</Card>;
};

export default Revenue;
