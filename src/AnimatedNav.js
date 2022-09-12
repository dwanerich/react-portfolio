import { Link } from "react-router-dom";

const AnimatedNav = () => {
  return (

  <div id="myHeader">

<Link to={'/'}><h1 alt="Dwane Richards Software Engineer" class="h-8 w-auto sm:h-2 text-4xl">dwane richards</h1></Link> <br />

    <h2 alt="Dwane Richards"> software engineer | creative director</h2>

    <input type="checkbox" id="menyAvPaa" />

    <label id="burger" for="menyAvPaa">
            <div></div>
            <div></div>
            <div></div>
        </label>

    <nav id="meny" className="navbar">

    <div className="links">
        <Link to={'/'}>Work</Link> <br />
        <Link to={'/about'}>About</Link> <br />
        <Link to={'/services'}>Services</Link> <br />
        <a href='https://main.dwrvmr20l0ogs.amplifyapp.com/visuals.html'>Visuals</a> <br />
        <a href='https://open.spotify.com/artist/6d2X2fOrEI5adbahA0Avxf'>Sound</a> <br />
        <a href='https://main.dwrvmr20l0ogs.amplifyapp.com/drums.html'>Interactive</a> <br />
        <Link to={'/books'}>Books</Link> <br />
        <Link to={'/create'}>Leave A Comment</Link> <br />
      </div>
    </nav>



  </div>
  );
}

export default AnimatedNav;
