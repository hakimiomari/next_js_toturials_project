const ReviewDetail = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId, reviewId } = await params;
  return (
    <div className="container flex flex-col items-center  justify-center h-100">
      <h1>Review Detail</h1>
      <p>
        This is the review detail page for {productId} and {reviewId}
      </p>
    </div>
  );
};

export default ReviewDetail;
