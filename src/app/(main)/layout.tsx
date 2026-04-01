import HeadNavigate from "../HeadNavigate/headNavigate";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <HeadNavigate />
      {children}
    </div>
  );
}
