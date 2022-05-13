import './styles.css'

import {useState} from 'react'
import Button from '../Button'


function index() {
  
  const [open, setOpen] = useState()

  const openBurger = () => {
    setOpen(!open)
  }

  return (
    <div className='navbar'>
      <div className='tie'>
      <div className='icons'>
        <img src="./img/logo.svg" alt="logo" className='logo'/>
        <img src={open === true ? "./img/icon-close.svg" : "./img/icon-hamburger.svg" } alt="burger" className='burger' onClick={openBurger}/>
      </div>
      <nav className={open === true ? 'nav' : 'nav off'} onClick={openBurger}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
      </nav>
      <div className='btn-request'>
        <Button style='button' name="Request Invite"/>
      </div>
      </div>
    </div>
  )
}

export default index
