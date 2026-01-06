import { useState } from 'react'

function htmlForm() {
    const [text, setText] = useState('');
    const [word, setWord] = useState(0);
    const [char, setChar] = useState(0);

    const handleText = (e) => {
        let value = e.target.value
        setText(value)
        let words = value.trim().split(/\s+/).filter(a => (a.length != 0)).length;
        setWord(words)
        setChar(value.length)
    }
    const upperText = () => {
        setText(text.toUpperCase());
    }
    const lowerText = () => {
        setText(text.toLowerCase());
    }
    const titleText = () => {
        // a[0].toUpperCase() + a.split(1)
        let newText = text.split(' ').map(a => a[0].toUpperCase() + a.slice(1).toLowerCase()).join(" ")
        // alert(newText);
        // console.log(newText)
        setText(newText);
    }
    const extraText = () => {
        let newText = text.split(' ').filter(a => (a.length != 0)).join(" ")
        // console.log(newText)
        setText(newText)
        let words = newText.trim().split(/\s+/).filter(a => (a.length != 0)).length;
        setWord(words)
        setChar(newText.length)
    }
    const copyText = () => {
        navigator.clipboard.writeText(text)
    }

  return (
    <div>            
        <main className="flex-1 p-6 lg:p-10 max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            <div className="lg:col-span-3 space-y-4">
                <div className="flex justify-between items-end px-1">
                <label htmlFor="editor" className="text-sm font-medium text-slate-400 italic">Enter your workspace content below...</label>
                <span className="text-xs text-slate-500">Auto-saving enabled</span>
                </div>
                
                <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-20 group-focus-within:opacity-40 transition duration-500"></div>
                <textarea 
                    id="editor" 
                    className="relative w-full h-[500px] bg-slate-800/80 border border-slate-700 rounded-2xl p-6 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 resize-none transition-all shadow-2xl backdrop-blur-sm"
                    placeholder="Start typing or paste your content here..."
                    value={text}
                    onInput={handleText}
                     />
                </div>
            </div>

            <aside className="space-y-6">
                <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-md">
                <h2 className="text-xs font-bold uppercase tracking-tighter text-cyan-500 mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                    Text Manipulators
                </h2>
                
                <div className="flex flex-col gap-3">
                    <button onClick={upperText} className="w-full py-3 px-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-semibold text-sm transition-all transhtmlForm hover:-translate-y-1 shadow-lg shadow-cyan-900/20 active:scale-95">
                    UPPERCASE
                    </button>

                    <button onClick={lowerText} className="w-full py-3 px-4 bg-slate-700 hover:bg-slate-600 text-slate-100 rounded-xl font-semibold text-sm transition-all border border-slate-600 active:scale-95">
                    lowercase
                    </button>

                    <button onClick={titleText} className="w-full py-3 px-4 bg-slate-700 hover:bg-slate-600 text-slate-100 rounded-xl font-semibold text-sm transition-all border border-slate-600 active:scale-95">
                    Title Case
                    </button>

                    <button onClick={extraText} className="w-full py-3 px-4 bg-slate-700 hover:bg-slate-600 text-slate-100 rounded-xl font-semibold text-sm transition-all border border-slate-600 active:scale-95">
                    Remove Extra Spaces
                    </button>

                    <button onClick={copyText} className="w-full py-3 px-4 bg-slate-700 hover:bg-slate-600 text-slate-100 rounded-xl font-semibold text-sm transition-all border border-slate-600 active:scale-95">
                    Copy to Clipboard
                    </button>

                    {/* <button className="w-full py-3 px-4 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 rounded-xl font-semibold text-sm transition-all active:scale-95">
                    Analyze Sentiment
                    </button> */}

                    <button onClick={() => setText("")} className="w-full py-3 px-4 bg-rose-500/10 hover:bg-rose-500 text-rose-500 hover:text-white border border-rose-500/20 rounded-xl font-semibold text-sm transition-all active:scale-95">
                    Clear Canvas
                    </button>
                </div>
                </div>

                <div className="px-2 grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-slate-800/20 rounded-xl border border-slate-800">
                    <p className="text-2xl font-bold text-white">{word}</p>
                    <p className="text-[10px] text-slate-500 uppercase font-bold">Words</p>
                </div>
                <div className="text-center p-3 bg-slate-800/20 rounded-xl border border-slate-800">
                    <p className="text-2xl font-bold text-white">{char}</p>
                    <p className="text-[10px] text-slate-500 uppercase font-bold">Characters</p>
                </div>
                </div>
            </aside>

            </div>
        </main>
    </div>
  )
}

export default htmlForm