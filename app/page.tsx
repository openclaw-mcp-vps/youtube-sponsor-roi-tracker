export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For YouTube Creators
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know Exactly How Your{" "}
          <span className="text-[#58a6ff]">Sponsors Perform</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          SponsorROI analyzes your YouTube videos to detect sponsor segments,
          measure viewer drop-off, and calculate real ROI — so you can negotiate
          better deals and place sponsors where they actually convert.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking — $9/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No contracts.</p>

        {/* Stats row */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#21262d] rounded-xl bg-[#161b22] p-6">
          {[
            ["Retention Drop", "Pinpoint exactly when viewers skip"],
            ["ROI Score", "Per-sponsor performance at a glance"],
            ["Best Placement", "Data-backed timing recommendations"]
          ].map(([title, desc]) => (
            <div key={title} className="text-center">
              <p className="text-[#58a6ff] font-semibold text-sm mb-1">{title}</p>
              <p className="text-[#6e7681] text-xs">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl bg-[#161b22] p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$9</p>
          <p className="text-[#6e7681] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited video analysis",
              "Sponsor segment auto-detection",
              "Retention drop heatmaps",
              "ROI score per sponsor deal",
              "Optimal placement recommendations",
              "YouTube Data API integration"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "How does sponsor segment detection work?",
              "We combine YouTube's retention graph data with transcript analysis to identify timestamps where viewership drops — a reliable signal for sponsor segments. You can also manually tag segments."
            ],
            [
              "Do I need to share my YouTube credentials?",
              "No. You connect via the official YouTube Data API using OAuth. We only request read access to your analytics — we never touch your account settings or upload anything."
            ],
            [
              "What counts as a good ROI score?",
              "We benchmark your sponsor's retention drop against your video's average drop rate. A score above 80 means viewers are staying through your sponsor at near-normal rates — a strong signal for your next negotiation."
            ]
          ].map(([q, a]) => (
            <details
              key={q as string}
              className="border border-[#21262d] rounded-lg bg-[#161b22] p-5 group"
            >
              <summary className="cursor-pointer font-semibold text-[#c9d1d9] text-sm list-none flex justify-between items-center">
                {q}
                <span className="text-[#58a6ff] ml-4 text-lg leading-none">+</span>
              </summary>
              <p className="mt-3 text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} SponsorROI. All rights reserved.
      </footer>
    </main>
  );
}
