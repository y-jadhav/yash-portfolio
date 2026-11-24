import React, { useState, useRef, useEffect } from 'react'
import { X, Minus, Maximize2, Terminal as TerminalIcon } from 'lucide-react'

interface TerminalModalProps {
  onClose: () => void
  onPlayReel: () => void
}

interface CommandHistory {
  command: string
  output: React.ReactNode
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ onClose, onPlayReel }) => {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'welcome',
      output: (
        <div>
          <p className="text-emerald-400 font-bold">Interactive ZSH Terminal [Version 2.4.0-release]</p>
          <p className="text-neutral-400 text-xs mt-1">
            Type <span className="text-amber-400 font-semibold">'help'</span> to see available commands or <span className="text-amber-400 font-semibold">'play reel'</span> to launch the 4K showreel.
          </p>
        </div>
      ),
    },
  ])

  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  useEffect(() => {
    inputRef.current?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.code === 'Escape') {
        e.preventDefault()
        e.stopPropagation()
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = input.trim().toLowerCase()
    if (!trimmed) return

    let result: React.ReactNode = null

    switch (trimmed) {
      case 'help':
        result = (
          <div className="space-y-1 text-xs text-neutral-300">
            <p><span className="text-amber-300 font-semibold">help</span> : Show this list of commands</p>
            <p><span className="text-amber-300 font-semibold">cat brief.md</span> : Print my personal &amp; work brief</p>
            <p><span className="text-amber-300 font-semibold">metrics</span> : Display key growth and retention stats</p>
            <p><span className="text-amber-300 font-semibold">skills</span> : Show editing tools, motion graphics &amp; AI stack</p>
            <p><span className="text-amber-300 font-semibold">experience</span> : Print career path and current role</p>
            <p><span className="text-amber-300 font-semibold">play reel</span> : Launch the interactive 4K video showreel</p>
            <p><span className="text-amber-300 font-semibold">neofetch</span> : Display system info &amp; ASCII badge</p>
            <p><span className="text-amber-300 font-semibold">contact</span> : Get direct email, phone and LinkedIn</p>
            <p><span className="text-amber-300 font-semibold">clear</span> : Clear terminal screen</p>
          </div>
        )
        break

      case 'cat brief.md':
      case 'brief':
        result = (
          <div className="text-xs text-neutral-300 space-y-1.5">
            <p className="text-emerald-400 font-bold"># Yash Jadhav: Personal and Work Brief</p>
            <p><span className="text-neutral-400">Title:</span> Senior Video Editor &amp; AI SaaS Animation Specialist</p>
            <p><span className="text-neutral-400">Location:</span> Pune, Maharashtra, India</p>
            <p><span className="text-neutral-400">Current Role:</span> Senior Video Editor, Pepup HR Consulting Pvt. Ltd. (since Aug 2025)</p>
            <p><span className="text-neutral-400">Education:</span> Bachelor of Commerce, SPPU Pune (Jul 2022 – Mar 2025)</p>
            <p className="text-neutral-400 mt-2">
              I am a creative, results-driven Senior Video Editor with 3+ years of experience delivering engaging multimedia content across digital platforms. I translate complex data and founder stories into visual narratives under 60 seconds.
            </p>
          </div>
        )
        break

      case 'metrics':
        result = (
          <div className="text-xs space-y-1">
            <p className="text-amber-400 font-bold">Headline Numbers:</p>
            <p>● <span className="text-emerald-400 font-bold">0 → 55K+:</span> Poligram News followers grown organically (Pepup HR)</p>
            <p>● <span className="text-emerald-400 font-bold">10K → 75K+:</span> Shubham Rode Instagram scaled (Rode Exports)</p>
            <p>● <span className="text-emerald-400 font-bold">3+ Years:</span> Video production and post-production experience</p>
            <p>● <span className="text-emerald-400 font-bold">Team Lead:</span> Directed teams of video editors &amp; designers at Eazyfixit</p>
            <p>● <span className="text-emerald-400 font-bold">&lt; 60 Seconds:</span> Format length for viral Hindi political news</p>
          </div>
        )
        break

      case 'skills':
        result = (
          <div className="text-xs space-y-1">
            <p className="text-amber-400 font-bold">Editing &amp; Motion:</p>
            <p className="text-neutral-300">Adobe Premiere Pro, Adobe After Effects, Audition</p>
            <p className="text-amber-400 font-bold mt-1">Design &amp; Vector:</p>
            <p className="text-neutral-300">Adobe Photoshop, Adobe Illustrator, Canva</p>
            <p className="text-amber-400 font-bold mt-1">AI-Powered Production:</p>
            <p className="text-neutral-300">ChatGPT, Claude 3.7, Gemini, Adobe Firefly, Google AI Studio TTS</p>
          </div>
        )
        break

      case 'experience':
        result = (
          <div className="text-xs space-y-2">
            <div>
              <p className="text-emerald-400 font-bold">Pepup HR Consulting Pvt. Ltd. (Aug 2025 – Present)</p>
              <p className="text-neutral-400">Senior Video Editor · Poligram News (0 to 55K+) &amp; Ciper Analytics Infographics</p>
            </div>
            <div>
              <p className="text-emerald-400 font-bold">Rode Exports &amp; Services Pvt. Ltd. (Sep 2024 – Aug 2025)</p>
              <p className="text-neutral-400">Senior Video Editor · 10K → 75K+ Instagram followers growth</p>
            </div>
            <div>
              <p className="text-emerald-400 font-bold">Eazyfixit (Aug 2023 – Sep 2024)</p>
              <p className="text-neutral-400">Team Leader, Video Editing &amp; Design · Multi-editor supervision</p>
            </div>
          </div>
        )
        break

      case 'play reel':
      case 'reel':
      case 'play':
        result = <p className="text-emerald-400">Launching 4K Showreel Player window...</p>
        setTimeout(() => onPlayReel(), 400)
        break

      case 'contact':
        result = (
          <div className="text-xs space-y-1">
            <p className="text-amber-400 font-bold">Contact Coordinates:</p>
            <p>📧 Email: <a href="mailto:yashjadhav8007@gmail.com" className="text-[#57A4F0] underline">yashjadhav8007@gmail.com</a></p>
            <p>📱 Phone: <a href="tel:+919096833243" className="text-[#57A4F0] underline">+91 9096833243</a></p>
            <p>🔗 LinkedIn: <a href="https://www.linkedin.com/in/yashjadhav-yj/" target="_blank" rel="noreferrer" className="text-[#57A4F0] underline">linkedin.com/in/yashjadhav-yj/</a></p>
          </div>
        )
        break

      case 'neofetch':
        result = (
          <div className="font-mono text-xs flex gap-4 text-neutral-300">
            <div className="text-[#57A4F0] leading-none select-none">
              <pre>{`
    .---.
   /     \\
  | () () |
   \\  _  /
    '---'
   macOS
              `}</pre>
            </div>
            <div className="space-y-0.5">
              <p><span className="text-emerald-400 font-bold">yash@macbook-pro</span></p>
              <p>-----------------</p>
              <p><span className="text-amber-300">OS:</span> macOS Sequoia 15.1 (Apple Silicon)</p>
              <p><span className="text-amber-300">Host:</span> Apple Silicon M3 Max Edit Suite</p>
              <p><span className="text-amber-300">Uptime:</span> 3+ Years in Video Production</p>
              <p><span className="text-amber-300">Shell:</span> zsh 5.9 (x86_64-apple-darwin)</p>
              <p><span className="text-amber-300">Resolution:</span> 3840x2160 (4K UHD 60fps)</p>
              <p><span className="text-amber-300">Codecs:</span> ProRes 422 HQ, H.264, H.265</p>
            </div>
          </div>
        )
        break

      case 'clear':
        setHistory([])
        setInput('')
        return

      default:
        result = (
          <p className="text-rose-400 text-xs">
            zsh: command not found: {trimmed}. Type <span className="text-amber-300 font-bold">'help'</span> for valid commands.
          </p>
        )
        break
    }

    setHistory((prev) => [...prev, { command: input, output: result }])
    setInput('')
  }

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/50 backdrop-blur-sm animate-cardin"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex h-[75vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#121214] shadow-[0_25px_60px_rgba(0,0,0,0.5)]"
      >
        {/* Title bar */}
        <div className="relative flex h-10 shrink-0 items-center justify-between border-b border-white/10 bg-[#1c1c1f] px-4 select-none">
          {/* Traffic Lights: Exact 12px circles with equal 8px gap */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onClose}
              title="Close [Esc]"
              className="group relative flex h-3 w-3 items-center justify-center rounded-full bg-[#ff5f57] border border-[#e0443e] hover:opacity-80 transition-opacity cursor-pointer touch-manipulation before:content-[''] before:absolute before:-inset-2.5 before:rounded-full active:scale-90"
            >
              <X size={7} className="opacity-0 group-hover:opacity-100 text-black/70" />
            </button>
            <div className="h-3 w-3 rounded-full bg-[#febc2e] border border-[#d89e24]" />
            <div className="h-3 w-3 rounded-full bg-[#28c840] border border-[#1aab29]" />
          </div>

          <div className="flex items-center gap-1.5 font-mono text-xs text-neutral-400">
            <TerminalIcon size={13} className="text-emerald-400" />
            <span>yash@macbook-pro: ~ (zsh)</span>
          </div>

          <div className="w-12 text-right">
            <span className="font-mono text-[10px] text-neutral-500">80x24</span>
          </div>
        </div>

        {/* Terminal screen */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="flex-1 overflow-y-auto p-4 font-mono text-sm leading-relaxed text-neutral-200 cursor-text space-y-3"
        >
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              {item.command !== 'welcome' && (
                <div className="flex items-center gap-2 text-neutral-400 text-xs">
                  <span className="text-emerald-400 font-bold">➜</span>
                  <span className="text-cyan-400 font-bold">~</span>
                  <span className="text-white font-medium">{item.command}</span>
                </div>
              )}
              <div>{item.output}</div>
            </div>
          ))}

          {/* Active input line */}
          <form onSubmit={handleCommand} className="flex items-center gap-2 pt-1 text-xs">
            <span className="text-emerald-400 font-bold">➜</span>
            <span className="text-cyan-400 font-bold">~</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent font-mono text-xs text-white outline-none caret-emerald-400"
              placeholder="type 'help', 'cat brief.md' or 'play reel'..."
              autoFocus
            />
          </form>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  )
}
