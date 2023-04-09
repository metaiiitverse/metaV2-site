import {Component} from 'react'
import logo from './1x/Asset.png'
import '../index.css'
import { Link } from 'react-router-dom'
import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

class Navbar extends Component {
  state = {clicked : false};
  handleClick=()=>{
    this.setState({clicked: !this.state.clicked})
  }

  render(){
  return (
    <>
        <nav className='contaner flex justify-between leading-5 w-100%'  >
            <div className="logo">
                <img className=' cursor-pointer m-2 p-4 absolute left-0 top-0 w-20' src={logo} alt="Logo" />
            </div>
            <div className="list text-white font-bold">
                <ul id='navbar' className={this.state.clicked ? "#navbar active":"#navbar"} >
                    <li className='a active cursor-pointer' ><Link to="/">Home</Link></li>
                    <li className='a cursor-pointer' ><Link to="/about">About</Link></li>
                    <li className='a cursor-pointer' ><Link to="/events">Events</Link></li>
                    <li className='a cursor-pointer' ><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div id='navbar' className="socialMedia justify-between text-white text-md w-36"  >
                <a href="https://www.instagram.com/metaverse_iiitbh/" target="_blank"><BsInstagram className='cursor-pointer' id='socialMedia' /></a>
                <a href="https://www.linkedin.com/company/learnmetaverse/" target="_blank"><BsLinkedin className='cursor-pointer' id='socialMedia' /></a>
                <a href="https://github.com/metaiiitverse" target="_blank"><BsGithub className='cursor-pointer' id='socialMedia' /></a>
            </div>
            <div id="mobile" className='text-white m-2 p-6 text-2xl cursor-pointer' onClick={this.handleClick}>
                <i 
                    id='bar'
                    className={this.state.clicked ? "fas fa-times":"fas fa-bars"}
                >

                </i>
            </div>
        </nav>
    </>
  )
  }
}

export default Navbar;