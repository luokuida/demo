"use client";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <div className="max-w-xl mx-auto px-6 py-8 text-center">
      <h2 className="text-[22px] font-medium mb-3">出错了</h2>
      <p className="text-gray-400 text-sm mb-6">{error.message}</p>
      <button
        onClick={() => reset()}
        className="px-6 py-2.5 bg-[#111] text-white text-sm rounded-lg"
      >
        重试
      </button>
      <button
        onClick={() => router.push("/")}
        className="ml-4 px-6 py-2.5 bg-gray-100 text-gray-900 text-sm rounded-lg"
      >
        返回首页
      </button>
    </div>
  );
}
