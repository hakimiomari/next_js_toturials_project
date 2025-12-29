export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container flex flex-col items-center  justify-center h-100">
      {children}
      <h2>This is the product layout</h2>
    </div>
  );
}
