const ProductDetail = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const productId = (await params).productId;
  return (
    <div className="container flex flex-col items-center  justify-center h-100">
      <h1>Product Detail</h1>
      <p>This is the product detail page for {productId}</p>
    </div>
  );
};

export default ProductDetail;
