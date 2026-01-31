import './Navbar.css';

export default function Navbar(){
  return (
    <nav>
      <p className={"logo"}>BrewVista</p>
          <div className="container-nav">
            <ul className="links-nav">
              <li className="font-bold link-item">HOME</li>
              <li className="link-item">MENU</li>
              <li className="link-item">ABOUT</li>
            </ul>
            <button className="cta-nav">SHOP NOW</button>
          </div>
    </nav>
  )
}