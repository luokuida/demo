"use client";
import { useCard } from "../../context/cardcontext";
import { useState } from "react";
import { checkout } from "./action";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Cart() {
  const { count, total, items, clearCart } = useCard();
  const [userName, setUserName] = useState("");
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    setIsLoading(true);
    const result = await checkout({
      userName,
      address,
      items: items.map((item) => ({ ...item, id: Number(item.id) })),
    });
    if (result.success) {
      alert(`订单成功！订单号：${result.orderId}`);
      clearCart();
      router.push("/");
    } else {
      alert(result.error);
    }
    setIsLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto px-6 py-8">
      <Link href="/" className="inline-flex items-center gap-1.5 text-[13px] text-gray-400 hover:text-gray-900 transition-colors mb-6">
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        继续购物
      </Link>

      <h1 className="text-[22px] font-medium mb-5">确认订单</h1>

      {/* 商品列表 */}
      <div className="flex flex-col gap-2.5 mb-4">
        {items.length === 0 ? (
          <p className="text-center py-8 text-gray-400 text-sm">购物车是空的</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-white border border-black/[0.06] rounded-xl px-4 py-3.5">
              <div className="flex flex-col gap-0.5">
                <span className="text-[14px] font-medium">{item.name}</span>
                <span className="text-[12px] text-gray-400">ID: {item.id}</span>
              </div>
              <span className="text-[13px] text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                × {item.quantity}
              </span>
            </div>
          ))
        )}
      </div>

      {/* 合计 */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg mb-6">
        <span className="text-[13px] text-gray-400">共 {count} 件商品</span>
        <span className="text-[16px] font-medium tabular-nums">¥{total.toFixed(2)}</span>
      </div>

      <div className="h-px bg-black/[0.06] mb-6" />

      {/* 收货信息 */}
      <p className="text-[13px] text-gray-400 mb-3">收货信息</p>
      <div className="flex flex-col gap-3 mb-6">
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] text-gray-400">收件人</label>
          <input
            type="text"
            placeholder="请输入收件人姓名"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="px-3.5 py-2.5 border border-black/[0.06] rounded-lg text-[14px] outline-none focus:border-black/20 transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] text-gray-400">收货地址</label>
          <input
            type="text"
            placeholder="请输入详细地址"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="px-3.5 py-2.5 border border-black/[0.06] rounded-lg text-[14px] outline-none focus:border-black/20 transition-colors"
          />
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full py-3.5 bg-[#111] text-white text-[15px] font-medium rounded-xl transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] active:scale-[0.98]"
        disabled={isLoading}
      >
        提交订单
      </button>
    </div>
  );
}