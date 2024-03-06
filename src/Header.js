import React from 'react'
import Pdflogo from "./PDFlogo.svg"

function Header() {
  return (
    <div style={{backgroundColor:'#fcfcfc', display: 'flex', width: '100%', fontSize: '32px', color: '#2c2c2c', fontStyle: 'normal', fontFamily: 'Graphik,Open Sans,Arial,sans-serif' }}>
        <span style={{ paddingLeft: '50px', paddingTop: '15px'}}>
        <img height="60px" src={Pdflogo} alt="logo" />
        </span>
       <p style={{textAlign: 'center',opacity: 0.7, color: 'red', fontWeight: '600'}}>
          PDF Upload
       </p>
    </div>
  )
}

export default Header