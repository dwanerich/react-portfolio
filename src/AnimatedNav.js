import { Link } from "react-router-dom";

const AnimatedNav = () => {
  function refreshPage() {
    window.location.reload(false);
  }
  return (

  <div id="myHeader" class=".w-nav-button">

<Link to={'/'}><h1 alt="Dwane Richards Software Engineer" class=" text-3xl font-bold hover:text-gray-200">Dwane Richards</h1></Link>

  <Link to={'/'}> <h2 alt="Dwane Richards" class=' text-large text-gray-300'> FRONT END DEVELOPER</h2> </Link>

    <input type="checkbox" id="menyAvPaa" />

    <label id="burger" for="menyAvPaa">
            <div></div>
            <div></div>
            <div></div>
        </label>

    <nav id="meny" class="navbar">

    <div className="links text-4xl text-right">
        <Link to={'/'}>Projects</Link> <br />
        <Link to={'/about'}>About</Link> <br />
        <Link to={'/library'}>Library</Link> <br />
        <a href='https://main.dwrvmr20l0ogs.amplifyapp.com/drums.html' onClick={'/'}>Interactive</a> <br />
        <a href='https://open.spotify.com/artist/6d2X2fOrEI5adbahA0Avxf' target="_blank" onClick={'/'}>Sound</a> <br />
        <a href='https://main.dwrvmr20l0ogs.amplifyapp.com/visuals.html'>Visuals</a> <br />
        {/* <Link to={'/services'} onClick={'/services'}>Services</Link> <br /> */}
        {/* <Link to={'/create'}>Leave Comment</Link> <br /> */}
      </div>
    </nav>
  </div>
  );
}

export default AnimatedNav;
