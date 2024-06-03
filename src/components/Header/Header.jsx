import {Link} from 'react-router-dom'
import './Header.css'
import logo from '../logo.jpg'

const Navbar = () => (
    <nav className='navbar'>
        <div className='logo-header-container'>
            <img src={logo} alt='logo' className='logo' />
            <h1 className='heading'>Marbles Health</h1>
        </div>
        <div className='tabs-container'>
            <Link className='tab' to="/">Home</Link>
            <Link className='tab' to="/add-user">Create User</Link>
        </div>
    </nav>
)

export default Navbar
