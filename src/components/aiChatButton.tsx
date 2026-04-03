"use client";
import { useState } from "react";
import AiChat from "./aiChat";

export default function AiChatButton() {
  const [open, setOpen] = useState(false);

  return (
 <>
  <div className="fixed bottom-[70%] right-4 z-40 flex flex-col items-end pointer-events-none group">
    {!open && (
      <div className="pointer-events-auto mb-3 transition-all duration-300 transform group-hover:-translate-y-1">
        <div className="relative bg-white border border-black/[0.08] shadow-sm rounded-2xl px-4 py-2 text-[13px] text-gray-600 animate-bounce">
          需要帮助吗？
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-black/[0.08] rotate-45"></div>
        </div>
      </div>
    )}

    <div
      className={`pointer-events-auto cursor-pointer transition-all duration-500 ease-out transform
        ${open ? "translate-x-20 opacity-0 scale-75" : "translate-x-0 opacity-100 scale-100 hover:scale-110 active:scale-95"}`}
      onClick={() => setOpen(true)}
    >
      <div className="relative">
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-12 h-3 bg-black/5 rounded-[100%] blur-sm"></div>
        <img
          src="/ai.png"
          className="w-24 h-24 drop-shadow-xl scale-x-[-1]"
          alt="AI助手"
        />
      </div>
    </div>
  </div>

  {open && (
    <div
      className="fixed inset-0 z-[45] bg-black/10 backdrop-blur-[2px] transition-opacity duration-300"
      onClick={() => setOpen(false)}
    />
  )}

  <div className={`fixed top-0 right-0 h-full w-[350px] bg-white shadow-2xl z-[50] flex flex-col transition-transform duration-500 ease-in-out border-l border-black/[0.03]
    ${open ? "translate-x-0" : "translate-x-full"}`}>
    
    <div className="flex items-center justify-between px-5 py-4 border-b border-black/[0.04]">
      <div className="flex items-center gap-3">
        <div className="relative">
           <img src="/ai.png" className="w-9 h-9 rounded-full border border-pink-100 scale-x-[-1]" />
           <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-white rounded-full"></div>
        </div>
        <div>
          <h3 className="text-[15px] font-semibold text-gray-800">Mika</h3>
          <p className="text-[11px] text-gray-400 leading-none">在线 购物助手</p>
        </div>
      </div>
      <button 
        onClick={() => setOpen(false)} 
        className="w-8 h-8 rounded-full hover:bg-gray-100 text-gray-400 transition-colors flex items-center justify-center"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    </div>

    <div><AiChat></AiChat></div>
  </div>
</>
  );
}