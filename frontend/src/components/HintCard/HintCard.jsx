import React from 'react'
import "./hints.css"


function HintCard({hint}) {
  return (
    <div>
          <section className="products">
      <div className="product-card">
        <div className="product-image">
          <img className= "img-hint" src={hint} />
        </div>
        <div className="product-info">
          
        </div>
      </div>
    </section>
    </div>
  )
}

export default HintCard