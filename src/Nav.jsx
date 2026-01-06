import React from 'react'

export default function Nav() {
  return (
    <>
        <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md px-6 py-4 flex justify-between items-center sticky top-0 z-10">
            <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                <span className="text-white font-bold text-xl">R</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Arslan React Text htmlForm
            </h1>
            </div>
            <div className="text-xs uppercase tracking-widest text-slate-500 font-semibold">v2.0 Stable</div>
        </nav>
    </>
  )
}
