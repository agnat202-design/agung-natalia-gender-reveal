import { useEffect, useRef, useState } from 'react';

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const scrollTo = (ref) => ref.current?.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth' });
const symbols = ['♡', '✿', '✧', '♥', '✨'];
const colors = ['#b85f78', '#a96b7a', '#d8c18d', '#c6ad78'];

function Confetti() {
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    if (reducedMotion()) return;
    setParticles(Array.from({ length: 55 }, (_, id) => ({
      id, symbol: symbols[Math.floor(Math.random() * symbols.length)],
      style: { left: Math.random() * 100 + '%', fontSize: 14 + Math.random() * 22 + 'px',
        color: colors[Math.floor(Math.random() * colors.length)],
        animationDuration: 4 + Math.random() * 5 + 's', animationDelay: Math.random() * 1.2 + 's' }
    })));
    const timer = window.setTimeout(() => setParticles([]), 10500);
    return () => window.clearTimeout(timer);
  }, []);
  return <div className="confetti-layer" aria-hidden="true">{particles.map(p =>
    <span key={p.id} className="float" style={p.style}>{p.symbol}</span>
  )}</div>;
}

export default function App() {
  const [stageOpen, setStageOpen] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [guess, setGuess] = useState(null);
  const homeRef = useRef(null);
  const stageRef = useRef(null);
  const revealRef = useRef(null);

  useEffect(() => { if (stageOpen) scrollTo(stageRef); }, [stageOpen]);
  useEffect(() => { if (revealed) scrollTo(revealRef); }, [revealed]);

  function restart() {
    setRevealed(false);
    setStageOpen(false);
    setGuess(null);
    scrollTo(homeRef);
  }

  return <>
    <main>
<section className="hero" id="home" ref={homeRef}><div className="card">
<div className="eyebrow">Our little miracle · Gender reveal</div>
<h1>A little love<br />is on the <span className="script">way</span></h1>
<p className="subtitle">Dari dua hati yang saling memilih, kini ada satu cinta kecil yang sedang tumbuh. Ada satu kejutan yang ingin kami bagikan…</p>
<div className="photo-wrap"><img alt="Foto romantis Agung dan Natalia di tepi danau" src="/images/agung-natalia.jpg" /></div>
<div className="names">Agung <span className="amp">&amp;</span> Natalia</div>
<div className="date">The sweetest chapter of our lives</div>
<button id="revealBtn" onClick={() => setStageOpen(true)} type="button">Buka kejutan kami ✨</button>
<div className="hint">Tarik napas… lalu buka bersama 🤍</div>
</div></section>
<section className={`stage${stageOpen ? " show" : ""}`} id="guessStage" ref={stageRef} aria-live="polite"><div className="stage-inner">
<div className="eyebrow">A little secret is waiting</div>
<h2>Menurut kamu, <span className="script">si kecil</span> perempuan atau laki-laki?</h2>
<p>Ini dia foto USG si kecil yang masih menyimpan rahasia. Coba tebak dulu sebelum kita membuka jawabannya… 🤍</p>
<img className="ultrasound" src="/images/ultrasound.jpg" alt="Foto USG calon buah hati Agung dan Natalia" />
<div className="guess-row"><button type="button" className="guess" data-guess="girl" aria-pressed={guess === "girl"} onClick={() => setGuess("girl")}>Tebak perempuan ♡</button><button type="button" className="guess boy" data-guess="boy" aria-pressed={guess === "boy"} onClick={() => setGuess("boy")}>Tebak laki-laki ✦</button></div>
<div className="feedback" id="guessFeedback" aria-live="polite">{guess ? `Kamu menebak ${guess === "girl" ? "perempuan" : "laki-laki"}! Simpan tebakanmu…` : ""}</div>
<button id="answerBtn" onClick={() => setRevealed(true)} disabled={revealed} type="button">Buka jawaban sebenarnya ✨</button>
</div></section>
<section className={`reveal${revealed ? " show" : ""}`} id="reveal" ref={revealRef} aria-live="polite">{revealed && <Confetti />}<div className="reveal-inner">
<div className="small-title">A tiny dream, a lifetime of love</div><div className="baby-icon" aria-hidden="true">♡</div>
<h2><span>It's a</span>Baby Girl!</h2>
<p className="message"><strong>Our Little Miracle. ✨</strong><br /><br />Kamu bahkan belum hadir di dunia, tetapi kehadiranmu sudah membawa begitu banyak kebahagiaan.<br /><br />Semoga kamu tumbuh sehat dan bahagia, selalu dikelilingi kasih sayang, serta disambut dunia dengan kehangatan dan cinta yang tak pernah kurang.<br /><br />Ketahuilah, kamu sudah begitu dicintai, bahkan sebelum kami bertemu denganmu. 🤍</p>
<div className="signature">With all our love, Agung &amp; Natalia</div>
<button className="again" id="againBtn" onClick={restart} type="button">Ulangi kejutan ♡</button>
</div></section>
</main>
    <footer>Made with love for our little family ♡</footer>
  </>;
}
