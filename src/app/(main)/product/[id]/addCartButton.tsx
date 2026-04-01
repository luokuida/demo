"use client";
import { useCard } from "../../../context/cardcontext";
import { useState } from "react";

export default function AddCartButton({ product }: { product: any }) {
  const { count, total, addItem } = useCard();
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={handleAdd}
        className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 bg-[#111] text-white text-[15px] font-medium rounded-xl transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] active:scale-[0.98]"
      >
        <svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 001.98 1.61h9.72a2 2 0 001.98-1.68l1.56-8.32H6"/>
        </svg>
        加入购物车
      </button>
      <div className="text-[13px] text-gray-400 whitespace-nowrap">
        共 <span className="text-gray-900 font-medium">{count}</span> 件
        {justAdded && <span className="ml-2 text-green-600 text-[12px]">已加入 ✓</span>}
      </div>
    </div>
  );
}