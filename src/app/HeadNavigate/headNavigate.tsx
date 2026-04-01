"use client";
import { useCard } from "../context/cardcontext";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function HeadNavigate() {
  const { count, total } = useCard();
  const badgeRef = useRef<HTMLSpanElement>(null);
  const prevCount = useRef(count);

  // count 变化时触发弹跳动画
  useEffect(() => {
    if (count !== prevCount.current && badgeRef.current) {
      badgeRef.current.animate(
        [{ transform: "scale(1)" }, { transform: "scale(1.4)" }, { transform: "scale(1)" }],
        { duration: 250, easing: "ease" }
      );
      prevCount.current = count;
    }
  }, [count]);

  return (
    <nav className="flex items-center justify-between px-8 h-16 border-b border-black/[0.06] sticky top-0 bg-white z-50">
      <div className="flex items-center gap-2 text-[17px] font-medium">
        <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
        我的商店
      </div>
      <div className="flex items-center gap-5">
        <div className="text-right hidden sm:block">
          <div className="text-[11px] text-gray-400 tracking-wide">购物车</div>
          <div className="text-[15px] font-medium tabular-nums">¥{total.toFixed(2)}</div>
        </div>
        <Link
          href="/cart"
          className="flex items-center gap-2 px-[18px] py-[9px] bg-[#111] text-white text-sm font-medium rounded-[10px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.18)] active:scale-95"
        >
          <svg className="w-4 h-4 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 001.98 1.61h9.72a2 2 0 001.98-1.68l1.56-8.32H6"/>
          </svg>
          结算
          <span ref={badgeRef} className="flex items-center justify-center min-w-[18px] h-[18px] px-1 bg-red-500 text-white text-[11px] font-medium rounded-full">
            {count}
          </span>
        </Link>
      </div>
    </nav>
  );
}