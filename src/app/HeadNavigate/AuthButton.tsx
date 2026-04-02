'use client';
import { signIn, signOut } from "next-auth/react"

export default function AuthButton({session}: {session: any}) {
    return (
        <div className="w-30">
            {session ? (
                <div className="flex items-center gap-4">
                    <span  className="text-sm text-gray-600">{session.user?.name}</span>
                    <button onClick={() => signOut()}
                        className="px-3 py-1.5 text-sm border border-black/10 rounded-lg hover:bg-gray-100 transition-colors"
                        >Sign Out</button>
                </div>
            ) : (
               <button onClick={() => signIn()}
                    className="px-3 py-1.5 text-sm border border-black/10 rounded-lg hover:bg-gray-100 transition-colors"
                    >Sign In</button>
            )}
        </div>
    );
} 