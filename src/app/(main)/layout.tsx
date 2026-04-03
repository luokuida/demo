import { auth } from "@/auth";
import HeadNavigate from "../HeadNavigate/headNavigate";
import AuthButton from "../HeadNavigate/AuthButton";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <div>
      <header  className="flex justify-between ">
        <HeadNavigate />
       <div className="mr-8 flex items-center">
        <AuthButton session={session} />
       </div>
      </header>
      {children}
    </div>
  );
}
