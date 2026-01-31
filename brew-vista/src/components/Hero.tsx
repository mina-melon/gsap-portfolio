import "./Hero.css";
export default function Hero() {
  return (
    <>
      <section id="hero" className="bg-radial">
        <div className="hero-text">
          <h1>BUNA</h1>
        </div>
        <div className="subhero">
          <div className="subhero-text">
            <p>A journey of aroma, color, and flavor in every drop.</p>
            <button>SHOP NOW</button>
          </div>
          <div className="subhero2">
            <p>Awaken Your Senses, One Sip</p>
          </div>
        </div>
        <div className="relative w-75 h-75">
          <img src="coffee-beans-2.png" className="left-coffee" />
        </div>

        <video src="/coffee.mp4" muted playsInline preload="auto" />
      </section>
    </>
  );
}
