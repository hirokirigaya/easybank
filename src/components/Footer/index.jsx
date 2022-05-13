import './footer.css'
import Button from '../Button'

import {FaGithubAlt as Github, FaLinkedin as Linkedin} from 'react-icons/fa';

import Facebook from '../Icons/Facebook'
import Youtube from '../Icons/Youtube'
import Twitter from '../Icons/Twitter'
import Pinterest from '../Icons/Pinterest'
import Instagram from '../Icons/Instagram'

function index() {
  return (
    <footer>
      <div className='tie-one'>
        <div className="logo">
          <img src="./img/logo-footer.svg" alt="logo" />
        </div>
        <ul className="social-network">
          <li>
            <a href="#" target="_blank">
              <Facebook />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <Twitter />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <Instagram />
            </a>
          </li>
          <li>
            <a href="https://github.com/hirokirigaya" target="_blank">
              <Github/>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/daniel-junio-0832481bb/" target="_blank">
              <Linkedin/>
            </a>
          </li>
     
        </ul>
      </div>
      <nav className="nav-footer">
        <ul>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </nav>
      <div className='tie-two'>
      <Button name="Request Invite" style="button" />
      <p className="copy">&copy; Easybank. All Rights Reserved</p>
      <p className='copy'>Maked with &hearts; by <a href="http://github.com/hirokirigaya" target="_blank" rel="developer">Daniel</a></p>
      </div>
    </footer>
  )
}

export default index
