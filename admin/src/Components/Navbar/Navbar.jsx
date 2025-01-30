import './Navbar.css'
import navlogo from "../../assets/hand_icon.png"
import navProfile from "../../assets/hand_icon.png"

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={navlogo} alt="" className='nav-logo'/>
      <img src={navProfile} alt="" className='nav-profile'/>
    </div>
  )
}

export default Navbar
