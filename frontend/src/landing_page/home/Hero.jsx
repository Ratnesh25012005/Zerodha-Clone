import React from 'react'
import { useNavigate } from 'react-router-dom'
const Hero = () => {
  const navigate=useNavigate();
  return (
    <div className='container p-5 mb-5'>
      <div className="row text-center">
        <img src="media/Images/homeHero.png" alt="Hero Image" className='mb-5'/>   {/* if we put the images in the src folder then we have to import it,bcz it is in the public folder we can do as it is*/}
        <h1 className='mt-5 '>Invest in everything</h1>
        <p>Online platform to invest in stocks,derivatives,mutual funds,and more</p>
        <button onClick={()=>{
          navigate("/signup")
        }} className='p-3 mb-5 btn btn-primary fs-5' style={{width:"20%" , margin:"0 auto"}}>Signup Now</button>
      </div>
    </div>
  )
}

export default Hero
