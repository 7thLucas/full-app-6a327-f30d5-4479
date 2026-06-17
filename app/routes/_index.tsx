export default function IndexPage() {
  const hearts = [
    { emoji: "❤️", size: "text-4xl", color: "text-red-400", x: 8, delay: 0 },
    { emoji: "💜", size: "text-3xl", color: "text-purple-400", x: 18, delay: 1.2 },
    { emoji: "💙", size: "text-5xl", color: "text-indigo-400", x: 28, delay: 0.5 },
    { emoji: "🩷", size: "text-2xl", color: "text-pink-400", x: 38, delay: 2.1 },
    { emoji: "💖", size: "text-6xl", color: "text-pink-300", x: 48, delay: 0.8 },
    { emoji: "💗", size: "text-3xl", color: "text-purple-300", x: 58, delay: 1.7 },
    { emoji: "💓", size: "text-4xl", color: "text-red-300", x: 68, delay: 0.3 },
    { emoji: "💞", size: "text-5xl", color: "text-pink-400", x: 78, delay: 2.5 },
    { emoji: "💝", size: "text-2xl", color: "text-indigo-300", x: 88, delay: 1.0 },
    { emoji: "❤️", size: "text-3xl", color: "text-red-400", x: 13, delay: 3.0 },
  ];

  const scatteredHearts = [
    { emoji: "❤️", size: "text-4xl", color: "text-red-400" },
    { emoji: "💜", size: "text-6xl", color: "text-purple-400" },
    { emoji: "💙", size: "text-3xl", color: "text-indigo-400" },
    { emoji: "🩷", size: "text-5xl", color: "text-pink-400" },
    { emoji: "💖", size: "text-2xl", color: "text-pink-300" },
    { emoji: "💗", size: "text-4xl", color: "text-purple-300" },
    { emoji: "💓", size: "text-6xl", color: "text-red-300" },
    { emoji: "💞", size: "text-3xl", color: "text-pink-400" },
    { emoji: "💝", size: "text-5xl", color: "text-indigo-300" },
    { emoji: "❤️", size: "text-2xl", color: "text-red-400" },
    { emoji: "💜", size: "text-4xl", color: "text-purple-400" },
    { emoji: "💙", size: "text-6xl", color: "text-indigo-400" },
    { emoji: "🩷", size: "text-3xl", color: "text-pink-400" },
    { emoji: "💖", size: "text-5xl", color: "text-pink-300" },
    { emoji: "💗", size: "text-2xl", color: "text-purple-300" },
    { emoji: "💓", size: "text-4xl", color: "text-red-300" },
    { emoji: "💞", size: "text-6xl", color: "text-pink-400" },
    { emoji: "💝", size: "text-3xl", color: "text-indigo-300" },
    { emoji: "❤️", size: "text-5xl", color: "text-red-400" },
    { emoji: "💜", size: "text-2xl", color: "text-purple-400" },
    { emoji: "💙", size: "text-4xl", color: "text-indigo-400" },
    { emoji: "🩷", size: "text-6xl", color: "text-pink-400" },
    { emoji: "💖", size: "text-3xl", color: "text-pink-300" },
    { emoji: "💗", size: "text-5xl", color: "text-purple-300" },
  ];

  return (
    <div className="bg-[#0a0a0f]">
      {/* Floating hearts keyframes */}
      <div
        dangerouslySetInnerHTML={{
          __html: `<style>
            @keyframes floatUp {
              0% { transform: translateY(0px); opacity: 0.8; }
              100% { transform: translateY(-100vh); opacity: 0; }
            }
            .float-heart {
              animation: floatUp 8s linear infinite;
              position: absolute;
              bottom: 0;
              pointer-events: none;
            }
          </style>`,
        }}
      />

      {/* Section 1 — Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Glow behind text */}
        <div className="absolute w-96 h-96 bg-purple-600/20 blur-3xl rounded-full animate-pulse" />

        <div className="relative z-10 flex flex-col items-center gap-6">
          {/* Replace with actual logo */}
          <img
            src="/logo.png"
            alt="QuantumByte Logo"
            width={80}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Hello QuantumByte
          </h1>
        </div>
      </section>

      {/* Section 2 — Love section */}
      <section className="relative min-h-screen bg-[#0d0b1a] flex flex-col items-center justify-center overflow-hidden px-6 py-16">
        {/* Floating hearts */}
        {hearts.map((h, i) => (
          <span
            key={i}
            className={`float-heart ${h.size} ${h.color}`}
            style={{
              left: `${h.x}%`,
              animationDelay: `${h.delay}s`,
              animationDuration: `${7 + h.delay}s`,
            }}
          >
            {h.emoji}
          </span>
        ))}

        <div className="relative z-10 flex flex-col items-center gap-10">
          {/* Heading with purple glow border */}
          <h2
            className="text-4xl md:text-6xl font-bold text-white text-center"
            style={{
              textShadow:
                "0 0 30px rgba(168, 85, 247, 0.7), 0 0 60px rgba(99, 102, 241, 0.4)",
            }}
          >
            We Love Quantum x QuantumByte
          </h2>

          {/* Scattered hearts grid */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
            {scatteredHearts.map((h, i) => (
              <span key={i} className={`${h.size} ${h.color}`}>
                {h.emoji}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
