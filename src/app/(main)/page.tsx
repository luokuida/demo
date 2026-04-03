import Link from "next/link";
import AiChat from "../../components/aiChat";
import AiChatButton from "../../components/aiChatButton";

import { prisma } from "@/lib/prisma";

const product = await prisma.product.findMany();

interface Product {
  id: string | number;
  name: string;
  price: number;
  desc: string;
  image: string;
}

const ProductCard = (item: Product) => {
  return (
    <Link href={`/product/${item.id}`}>
      <div className="flex items-center gap-4 bg-white border border-black/[0.06] rounded-xl p-4 cursor-pointer transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:border-black/[0.12] active:scale-[0.99]">
        <div className="w-20 h-20 rounded-[10px] overflow-hidden bg-gray-100 flex-shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[15px] font-medium text-gray-900 truncate mb-1">
            {item.name}
          </div>
          <div className="text-[13px] text-gray-400 truncate mb-2">
            {item.desc}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[16px] font-medium tabular-nums">
              ¥{item.price}
            </span>
            <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-900 transition-colors">
              <svg
                className="w-3.5 h-3.5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default async function Home() {
  return (
    <div>
      <div className="max-w-xl mx-auto px-6 py-8">
        <h1 className="text-[22px] font-medium mb-6">全部商品</h1>
        <div className="flex flex-col gap-3">
          {product.map((item: Product) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </div>
      <AiChatButton />
    </div>
  );
}
