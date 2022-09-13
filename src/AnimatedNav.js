import { Link } from "react-router-dom";

const AnimatedNav = () => {
  return (

  <div id="myHeader" class="pl-6">

<Link to={'/'}><h1 alt="Dwane Richards Software Engineer" class="h-8 w-auto sm:h-2 text-4xl font-bold hover:text-gray-200">dwane richards</h1></Link> <br />

  <Link to={'/'}> <h2 alt="Dwane Richards" class='text-large'> software engineer | creative director</h2> </Link>

    <input type="checkbox" id="menyAvPaa" />

    <label id="burger" for="menyAvPaa">
            <div></div>
            <div></div>
            <div></div>
        </label>

    <nav id="meny" class="navbar">

    <div className="links text-6xl text-right">
        <Link to={'/'}>Work</Link> <br />
        <Link to={'/about'}>About</Link> <br />
        <Link to={'/services'}>Services</Link> <br />
        <Link to={'/books'}>Books</Link> <br />
        <a href='https://main.dwrvmr20l0ogs.amplifyapp.com/drums.html'>Interactive</a> <br />
        <a href='https://open.spotify.com/artist/6d2X2fOrEI5adbahA0Avxf' target="_blank">Sound</a> <br />
        <a href='https://main.dwrvmr20l0ogs.amplifyapp.com/visuals.html'>Visuals</a> <br />
        <Link to={'/create'}>Leave A Comment</Link> <br />
      </div>
    </nav>



  </div>
  );
}

export default AnimatedNav;
