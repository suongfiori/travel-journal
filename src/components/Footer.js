import React from 'react'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <div className='footer'>
      <p>© {year} by Suong Fiori</p>
    </div>
  )
}

export default Footer