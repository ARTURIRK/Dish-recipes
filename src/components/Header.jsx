import {Link} from 'react-router-dom'

function Header(){
  return  <nav className=' container red darken-4 header '>
  <div className="nav-wrapper">
    <span className="brand-logo"><Link to='/'>Home</Link></span>
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li>
        <Link to='/about'>About</Link>
      </li>
    </ul>
  </div>
</nav>
}

export {Header}