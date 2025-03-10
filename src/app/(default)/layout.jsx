import React from 'react'
import Footer from '../components/Footer'

export default function Defaultlayout({children}) {
  return (
    <div>
      {children}
      <Footer/>
    </div>
  )
}
