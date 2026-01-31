import "./Hero.css";
export default function Hero() {
  return (
    <section>
      <main className="hero w-screen h-dvh bg-radial">
        <nav className='nav'>
          <p className={"logo"}>BrewVista</p>
          <div className="container-nav">
            <ul className="links-nav">
              <li>HOME</li>
              <li>MENU</li>
              <li>ABOUT</li>
            </ul>
            <button className="cta-nav">SHOP NOW</button>
          </div>
        </nav>
      </main>
    </section>
  );
}
