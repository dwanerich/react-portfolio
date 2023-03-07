import { Link } from "react-router-dom";

const AnimatedNav = () => {

  return (

  <div id="myHeader" class=".w-nav-button">

<Link to={'/'}><h1 alt="Dwane Richards Software Engineer" class=" text-4xl font-bold hover:text-gray-200">Dwane Richards</h1></Link>

  <Link to={'/'}> <h2 alt="Dwane Richards" class=' text-sm text-yellow-500'> SOFTWARE DEVELOPER | VINYL COLLECTOR</h2> </Link>

    <input type="checkbox" id="menyAvPaa" />

    <label id="burger" for="menyAvPaa">
            <div></div>
            <div></div>
            <div></div>
        </label>

    <nav id="meny" class="navbar">

    <div className="links text-4xl text-right">

        <Link to={'/'}>Home</Link> <br />
        <Link to={'/about'}>About</Link> <br />
        {/* <Link to={'/library'}>Library</Link> <br /> */}
        <a href='https://main.dwrvmr20l0ogs.amplifyapp.com/drums.html' rel="noreferrer" onClick={'/'}>Interactive</a> <br />
        <a href='https://open.spotify.com/artist/6d2X2fOrEI5adbahA0Avxf' rel="noreferrer" target="_blank" onClick={'/'}>Music</a> <br />
        <a href='https://main.dwrvmr20l0ogs.amplifyapp.com/visuals.html'>Visuals</a> <br />
        {/* <Link to={'/services'} onClick={'/services'}>Services</Link> <br /> */}
        {/* <Link to={'/create'}>Leave Comment</Link> <br /> */}
      </div>
    </nav>
  </div>
  );
}

export default AnimatedNav;
