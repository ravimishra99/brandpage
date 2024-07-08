import React from 'react'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-content'>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p> YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.</p>
        
  
  <div className='hero-btn'>
    <button>Shop Now</button>
    <button className='secondary-btn'>Category</button>
  </div>
  </div>


        <div className='shopping'>
            <p>Also Available On</p>
        </div>

        <div className='brand-icons'>
            <img src='./Images/amazon.png'alt="amazon-logo"/>
            <img src='./Images/flipkart.png'alt="flipkart-logo"/>
        </div>

       <div className='hero-image'>
        <img src="./Images/shoe_image.png" alt="shoe-icon"/>
        </div> 
    </div>
  )
}

export default Hero