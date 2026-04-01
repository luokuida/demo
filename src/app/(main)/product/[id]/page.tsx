import product from "../../../product.json";
import AddCartButton from "./addCartButton";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return product.map((item) => ({ id: item.id.toString() }));
}
export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;
  const currentproduct: any = product.find((item) => item.id.toString() === id);
  return { title: currentproduct.name, description: currentproduct.desc };
}

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const currentproduct: any = product.find((item) => item.id.toString() === id);
  // if (!currentproduct) {
  //   notFound();
  // }
  return (
    <div className="max-w-xl mx-auto px-6 py-8">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-[13px] text-gray-400 hover:text-gray-900 transition-colors mb-6"
      >
        <svg
          className="w-3.5 h-3.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
        返回列表
      </Link>
      <div className="w-full aspect-[4/3] rounded-[14px] overflow-hidden bg-gray-100 mb-6">
        <img
          src={currentproduct.image}
          alt={currentproduct.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mb-6">
        <h1 className="text-[22px] font-medium mb-1.5">
          {currentproduct.name}
        </h1>
        <div className="text-[28px] font-medium tabular-nums mb-2.5">
          ¥{currentproduct.price.toFixed(2)}
        </div>
        <p className="text-[14px] text-gray-400 leading-relaxed">
          {currentproduct.desc}
        </p>
      </div>
      <div className="h-px bg-black/[0.06] mb-6" />
      <AddCartButton product={currentproduct} />
    </div>
  );
}
