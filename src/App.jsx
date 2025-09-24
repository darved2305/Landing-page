import React from 'react'

const CARDS = [
  {
    title: "Simha",
    text:
      "A figure of dharmic rage and protective power. Simha teaches that true strength lies in protecting what is right, and that courage is quiet but unwavering when faced with injustice.",
  },
  {
    title: "Vasuki",
    text:
      "Wrapped around the universe as the great churning rope, Vasuki represents balance and disciplined power — a guardian of change that transforms chaos into order.",
  },
  {
    title: "Airavat",
    text:
      "Born from the cosmic churn of Samudra Manthan, Airavat embodies strength with wisdom. The divine white elephant faces storms, sustains life, and chooses duty over fear.",
  },
  {
    title: "Garuda",
    text:
      "The enemy‑slayer of serpents and a symbol of freedom and loyalty. With mighty wings, Garuda reminds us that light must always rise above encroaching shadow.",
  },
  {
    title: "Devdutta",
    text:
      "The celestial conch whose resounding call heralds change. Its timeless echo signals great beginnings and the courage to undergo transformation.",
  },
  {
    title: "Mayura",
    text:
      "Graceful yet fierce, the peacock triumphs over poison and darkness. Mayura stands for resilience, beauty, and remaining proudly untamed.",
  },
];

export default function App() {
  return (
    <div style={styles.page}>
      <style>{css}</style>

      
      <section className="hero">
        <div className="cards">
          {CARDS.map((c) => (
            <article key={c.title} className="card">
              <h3 className="card__title">{c.title}</h3>
              <p className="card__text">{c.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about">
        <div className="about__heading">About Us</div>
        <div className="about__card">
          <p>
            Trinity embodies the spirit of D.J. Sanghvi as the most anticipated and
            cherished annual socio‑cultural, sports, and technical festival. Trinity is a
            coalescence of innovation and technology, festivities and social
            responsibilities, and the competitive streak of sports. The grandeur of
            Trinity is sure to attract students not only from Mumbai but from colleges all
            around the world.
          </p>
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100svh",
    color: "#25190f",
    background: "#0b0f14",
  },
};

const css = `
  :root{
    --parchment:#e2c7a2;         
    --parchment-deep:#d6b48a;    
    --ink:#2b1c11;               
    --gold:#f3c26b;              
    --hero-vignette: radial-gradient(1200px 600px at 50% 20%, rgba(243,194,107,.18), transparent 55%),
                     radial-gradient(900px 500px at 20% 10%, rgba(243,194,107,.10), transparent 60%),
                     radial-gradient(900px 500px at 80% 10%, rgba(243,194,107,.10), transparent 60%);
  }

.hero{
  padding: clamp(24px, 4vw, 48px) clamp(16px, 4vw, 48px);
  background:
    linear-gradient(to bottom, rgba(0,0,0,.45), rgba(0,0,0,.65)),
    url('/bg-temple.png') center/cover no-repeat;
}
  .cards{
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: clamp(16px, 2.5vw, 28px);
  }
.card{
  background: radial-gradient(120% 120% at 30% 20%, var(--parchment) 0 60%, var(--parchment-deep) 100%);
  border-radius: 28px;
  padding: 18px 18px 20px;
  box-shadow: 0 6px 24px rgba(0,0,0,.45), inset 0 0 0 1px rgba(80,48,20,.25);
  border: 1px solid rgba(120,80,40,.35);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card__title{
  margin: 6px 0 10px;
  font-size: 22px;
  letter-spacing: .5px;
  color: #5e3a16;
  text-shadow: 0 1px 0 rgba(255,255,255,.4);
  font-weight: 800;
  font-family: 'Jaini', cursive;
  text-align: center;
}

.card__text{
  color: var(--ink);
  line-height: 1.45;
  font-size: 14.5px;
  font-family: 'Kokila', serif;
  text-align: center;
}
.about{
  padding: clamp(40px, 6vw, 72px) 16px 96px;
  background:
    linear-gradient(to bottom, rgba(0,0,0,.55), rgba(0,0,0,.75)),
    url('/bg-aboutus.png') center/cover no-repeat;
  color: #f3e7d8;
  text-align: center;
}

  .about__heading{
  display: inline-block;
  margin: 0 auto 22px;
  padding: 10px 18px;
  background: linear-gradient(#2a1a0f, #1b120c);
  border: 1px solid rgba(243,194,107,.55);
  color: var(--gold);
  font-weight: 800;
  font-size: 28px;
  letter-spacing: .6px;
  border-radius: 8px;
  box-shadow: 0 6px 22px rgba(0,0,0,.5), inset 0 0 18px rgba(243,194,107,.08);
  font-family: 'Reggae One', cursive; 
}

.about__card{
  max-width: 780px;
  margin: 0 auto;
  background: radial-gradient(140% 120% at 25% 15%, var(--parchment) 0 60%, var(--parchment-deep) 100%);
  color: var(--ink);
  border-radius: 28px;
  padding: clamp(18px, 3vw, 26px) clamp(18px, 3vw, 28px);
  border: 1px solid rgba(120,80,40,.35);
  box-shadow: 0 10px 28px rgba(0,0,0,.45);
  line-height: 1.55;
  font-size: 15.5px;
  text-align: center;
  font-family: 'Kokila', serif;
}
`
