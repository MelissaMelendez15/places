import React from 'react'

import './Footer.css'

const Footer = () => {
   return(
      <footer>
         <p className='footer-text'>Developed by Melissa Meléndez {new Date().getFullYear()}</p>
      </footer>
   )
}


export default Footer