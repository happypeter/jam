import React from 'react'
import Header from '../pages/Header.js'
import Footer from '../pages/Footer.js'
import '../assets/global.css'

export default ({ children }) => {
  return (
    <div>
      <Header />
      {children()}
      <Footer />
    </div>
  )
}
